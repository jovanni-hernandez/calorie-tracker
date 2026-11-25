"""FastAPI application."""

import secrets
from dataclasses import dataclass
from datetime import UTC, datetime
from datetime import date as LocalDate
from typing import Annotated, Any
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

from fastapi import Depends, FastAPI, Header, HTTPException, Query, Response, status
from sqlalchemy import or_, select
from sqlalchemy.orm import Session, joinedload

from calorie_tracker.config import get_settings
from calorie_tracker.database import get_session
from calorie_tracker.models import BarcodeCache, Meal, Product, Profile
from calorie_tracker.nutrition import NutritionLookupError
from calorie_tracker.schemas import (
    MealCreate,
    MealOut,
    MealUpdate,
    ProductCreate,
    ProductOut,
    ProductUpdate,
    ProfileOut,
    TargetUpdate,
    TotalsOut,
)
from calorie_tracker.service import (
    get_or_create_profile,
    lookup_or_cache,
    meals_for_day,
    nutrition_for_amount,
    product_to_dict,
    update_meal_from_product,
)

app = FastAPI(title="HA Calorie Tracker API", version="0.1.0")
SessionDep = Annotated[Session, Depends(get_session)]


@dataclass(frozen=True)
class AuthenticatedUser:
    """Identity forwarded by the authenticated Home Assistant integration."""

    user_id: str
    display_name: str
    timezone: str


def authenticated_user(
    x_api_token: Annotated[str | None, Header()] = None,
    x_ha_user_id: Annotated[str | None, Header()] = None,
    x_ha_user_name: Annotated[str | None, Header()] = None,
    x_ha_timezone: Annotated[str | None, Header()] = None,
) -> AuthenticatedUser:
    """Authenticate the companion integration and require its HA user context."""
    expected = get_settings().api_token.get_secret_value()
    if not expected or x_api_token is None or not secrets.compare_digest(x_api_token, expected):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    if not x_ha_user_id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Missing HA user context",
        )
    timezone = x_ha_timezone or get_settings().timezone
    try:
        ZoneInfo(timezone)
    except ZoneInfoNotFoundError as err:
        raise HTTPException(status_code=400, detail="Invalid Home Assistant timezone") from err
    return AuthenticatedUser(x_ha_user_id, x_ha_user_name or "Home Assistant user", timezone)


def get_profile(
    session: Session,
    user_id: str,
    name: str | None = None,
    timezone: str | None = None,
) -> Profile:
    """Get the profile for a trusted Home Assistant user ID."""
    return get_or_create_profile(session, user_id, name, timezone)


def meal_out(meal: Meal) -> dict[str, Any]:
    """Serialize a meal and its product."""
    consumed_at = meal.consumed_at
    if consumed_at.tzinfo is None:
        consumed_at = consumed_at.replace(tzinfo=UTC)
    return {
        "id": meal.id,
        "consumed_at": consumed_at,
        "amount_mode": meal.amount_mode,
        "amount": meal.amount,
        "calories": meal.calories,
        "protein_g": meal.protein_g,
        "carbs_g": meal.carbs_g,
        "fat_g": meal.fat_g,
        "product": product_to_dict(meal.product),
    }


@app.get("/health")
def health() -> dict[str, str]:
    """Health check used by the add-on supervisor."""
    return {"status": "ok"}


@app.get("/api/v1/me", response_model=ProfileOut)
def current_profile(
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)], session: SessionDep
) -> Profile:
    """Return the current authenticated user's profile."""
    return get_profile(session, user.user_id, user.display_name, user.timezone)


@app.put("/api/v1/me/targets", response_model=ProfileOut)
def update_targets(
    payload: TargetUpdate,
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
) -> Profile:
    """Update daily goals for the authenticated profile."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    for key, value in payload.model_dump().items():
        setattr(profile, key, value)
    session.commit()
    session.refresh(profile)
    return profile


@app.get("/api/v1/products/lookup", response_model=ProductOut | None)
def product_lookup(
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
    upc: str = Query(min_length=8, max_length=14, pattern=r"^[0-9]+$"),
    refresh: bool = False,
) -> Product | None:
    """Resolve a barcode from the local cache, then USDA and Open Food Facts."""
    del user
    try:
        return lookup_or_cache(session, upc, refresh=refresh)
    except NutritionLookupError as err:
        raise HTTPException(status_code=503, detail=str(err)) from err


@app.get("/api/v1/products")
def search_products(
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
    q: str = "",
) -> list[dict[str, Any]]:
    """Search previously scanned and locally created products."""
    del user
    statement = select(Product).where(Product.lookup_status == "found")
    if q.strip():
        term = f"%{q.strip()}%"
        statement = statement.where(or_(Product.name.ilike(term), Product.brand.ilike(term)))
    products = session.scalars(statement.order_by(Product.name))
    return [product_to_dict(product) for product in products]


@app.post("/api/v1/products", response_model=ProductOut, status_code=status.HTTP_201_CREATED)
def create_product(
    payload: ProductCreate,
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
) -> Product:
    """Save confirmed OCR/manual product facts for future selection."""
    del user
    values = payload.model_dump()
    product = (
        session.scalar(select(Product).where(Product.upc == values["upc"]))
        if values["upc"]
        else None
    )
    if product:
        for key, value in values.items():
            setattr(product, key, value)
        product.lookup_status = "found"
        product.updated_at = datetime.now(UTC)
    else:
        product = Product(
            **values,
            lookup_status="found",
            updated_at=datetime.now(UTC),
            nutrition_basis="serving",
        )
    session.add(product)
    session.flush()
    if product.upc:
        old = session.scalar(select(BarcodeCache).where(BarcodeCache.upc == product.upc))
        if old:
            old.product_id = product.id
            old.status = "found"
            old.checked_at = datetime.now(UTC)
        else:
            session.add(
                BarcodeCache(
                    upc=product.upc,
                    status="found",
                    product_id=product.id,
                    checked_at=datetime.now(UTC),
                )
            )
    session.commit()
    session.refresh(product)
    return product


@app.patch("/api/v1/products/{product_id}", response_model=ProductOut)
def update_product(
    product_id: int,
    payload: ProductUpdate,
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
) -> Product:
    """Edit catalog facts without rewriting historical meal totals."""
    del user
    product = session.get(Product, product_id)
    if product is None or product.lookup_status != "found":
        raise HTTPException(status_code=404, detail="Product not found")
    for key, value in payload.model_dump(exclude_unset=True).items():
        setattr(product, key, value)
    product.updated_at = datetime.now(UTC)
    session.commit()
    session.refresh(product)
    return product


@app.get("/api/v1/meals", response_model=list[MealOut])
def list_meals(
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
    date: LocalDate,
) -> list[dict[str, Any]]:
    """List this user's meals for a local calendar date."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    return [
        meal_out(meal)
        for meal in meals_for_day(session, profile.id, date.isoformat(), profile.timezone)
    ]


@app.post("/api/v1/meals", response_model=MealOut, status_code=status.HTTP_201_CREATED)
def create_meal(
    payload: MealCreate,
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
) -> dict[str, Any]:
    """Log a meal for the authenticated user's profile."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    product = session.get(Product, payload.product_id)
    if product is None or product.lookup_status != "found":
        raise HTTPException(status_code=404, detail="Product not found")
    try:
        nutrition = nutrition_for_amount(product, payload.amount_mode, payload.amount)
    except ValueError as err:
        raise HTTPException(status_code=422, detail=str(err)) from err
    meal = Meal(
        profile_id=profile.id,
        product_id=product.id,
        consumed_at=payload.consumed_at,
        amount_mode=payload.amount_mode,
        amount=payload.amount,
        **nutrition,
    )
    session.add(meal)
    session.commit()
    return meal_out(
        session.scalar(select(Meal).options(joinedload(Meal.product)).where(Meal.id == meal.id))
        or meal
    )


def owned_meal(session: Session, meal_id: int, profile_id: int) -> Meal:
    """Fetch a meal only if it belongs to the current profile."""
    meal = session.scalar(
        select(Meal)
        .options(joinedload(Meal.product))
        .where(Meal.id == meal_id, Meal.profile_id == profile_id)
    )
    if meal is None:
        raise HTTPException(status_code=404, detail="Meal not found")
    return meal


@app.patch("/api/v1/meals/{meal_id}", response_model=MealOut)
def edit_meal(
    meal_id: int,
    payload: MealUpdate,
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
) -> dict[str, Any]:
    """Edit an owned meal and recalculate its nutrition."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    meal = owned_meal(session, meal_id, profile.id)
    changes = payload.model_dump(exclude_unset=True)
    for key, value in changes.items():
        setattr(meal, key, value)
    try:
        update_meal_from_product(meal, meal.product)
    except ValueError as err:
        raise HTTPException(status_code=422, detail=str(err)) from err
    session.commit()
    return meal_out(meal)


@app.delete("/api/v1/meals/{meal_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_meal(
    meal_id: int,
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
) -> Response:
    """Delete an owned meal."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    meal = owned_meal(session, meal_id, profile.id)
    session.delete(meal)
    session.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@app.get("/api/v1/totals", response_model=TotalsOut)
def daily_totals(
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
    date: LocalDate,
) -> dict[str, Any]:
    """Return local-day totals and goals for the authenticated user."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    meals = meals_for_day(session, profile.id, date.isoformat(), profile.timezone)
    return {
        "date": date.isoformat(),
        "calories": sum(meal.calories for meal in meals),
        "protein_g": sum(meal.protein_g for meal in meals),
        "carbs_g": sum(meal.carbs_g for meal in meals),
        "fat_g": sum(meal.fat_g for meal in meals),
        "profile": profile,
    }


@app.get("/api/v1/profiles")
def profiles_for_sensors(
    session: SessionDep,
    x_api_token: Annotated[str | None, Header()] = None,
) -> list[dict[str, Any]]:
    """Return profile identifiers for the trusted HA integration sensor platform."""
    expected = get_settings().api_token.get_secret_value()
    if x_api_token is None or not secrets.compare_digest(x_api_token, expected):
        raise HTTPException(status_code=401, detail="Unauthorized")
    return [
        {
            "id": profile.id,
            "ha_user_id": profile.ha_user_id,
            "display_name": profile.display_name,
        }
        for profile in session.scalars(select(Profile).order_by(Profile.display_name))
    ]


@app.get("/api/v1/profiles/{profile_id}/totals")
def totals_for_sensor(
    profile_id: int,
    date: LocalDate,
    session: SessionDep,
    x_api_token: Annotated[str | None, Header()] = None,
) -> dict[str, float]:
    """Return totals for an integration-owned sensor."""
    expected = get_settings().api_token.get_secret_value()
    if x_api_token is None or not secrets.compare_digest(x_api_token, expected):
        raise HTTPException(status_code=401, detail="Unauthorized")
    profile = session.get(Profile, profile_id)
    if profile is None:
        raise HTTPException(status_code=404, detail="Profile not found")
    meals = meals_for_day(session, profile.id, date.isoformat(), profile.timezone)
    return {
        "calories": sum(meal.calories for meal in meals),
        "protein_g": sum(meal.protein_g for meal in meals),
        "carbs_g": sum(meal.carbs_g for meal in meals),
        "fat_g": sum(meal.fat_g for meal in meals),
    }
