"""FastAPI application."""

import secrets
from dataclasses import dataclass
from datetime import UTC, datetime, timedelta
from datetime import date as LocalDate
from math import ceil
from typing import Annotated, Any
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

from fastapi import Depends, FastAPI, Header, HTTPException, Query, Response, status
from sqlalchemy import or_, select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session, joinedload

from calorie_tracker.config import get_settings
from calorie_tracker.database import get_session
from calorie_tracker.models import BarcodeCache, Goal, Meal, Product, Profile, WeightCheckIn
from calorie_tracker.schemas import (
    CurrentGoalOut,
    GoalOut,
    MealCreate,
    MealOut,
    MealUpdate,
    ProductCreate,
    ProductLookupOut,
    ProductOut,
    ProductUpdate,
    ProfileOut,
    TargetUpdate,
    TotalsOut,
    WeightCheckInCreate,
    WeightCheckInOut,
    WeightGoalPreviewOut,
    WeightGoalRequest,
)
from calorie_tracker.service import (
    get_or_create_profile,
    lookup_or_cache,
    meals_for_day,
    nutrition_for_amount,
    product_to_dict,
    update_meal_from_product,
)
from calorie_tracker.weight_model import (
    MAXIMUM_PLAN_DAYS,
    MODEL_REFERENCE,
    WeightModelError,
    WeightModelInputs,
    calculate_weight_loss_plan,
)

app = FastAPI(title="HA Calorie Tracker API", version="0.2.1")
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
    if expected and (x_api_token is None or not secrets.compare_digest(x_api_token, expected)):
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


def _weight_model_inputs(
    data: dict[str, Any], current_weight_kg: float
) -> WeightModelInputs:
    """Build validated model inputs from a goal payload."""
    return WeightModelInputs(
        weight_kg=current_weight_kg,
        height_cm=float(data["height_cm"]),
        age_years=int(data["age_years"]),
        sex_parameter=data["sex_parameter"],
        activity_level=float(data["activity_level"]),
    )


def _weight_goal_preview(
    data: dict[str, Any], current_weight_kg: float, timezone: str
) -> WeightGoalPreviewOut:
    """Preview a requested pace without changing the profile's daily targets."""
    target_weight_kg = float(data["target_weight_kg"])
    pace_kg_per_week = float(data["pace_kg_per_week"])
    if current_weight_kg <= target_weight_kg or pace_kg_per_week <= 0:
        raise WeightModelError(
            "Current weight must be above target weight and pace must be positive."
        )
    duration_days = ceil((current_weight_kg - target_weight_kg) / pace_kg_per_week * 7.0)
    if duration_days > MAXIMUM_PLAN_DAYS:
        raise WeightModelError("Choose a more specific pace; the modeled plan exceeds 10 years.")
    estimated_end_date = datetime.now(ZoneInfo(timezone)).date() + timedelta(days=duration_days)
    method = data["method"]
    if method == "manual":
        calorie_target = int(round(float(data["manual_calorie_target_kcal"])))
        return WeightGoalPreviewOut(
            method="manual",
            calorie_target_kcal=calorie_target,
            duration_days=duration_days,
            estimated_end_date=estimated_end_date,
            projected_weight_kg=None,
            model_note=(
                "This is the calorie target you entered. The pace and date are your chosen "
                "schedule, not a model prediction."
            ),
        )

    model_inputs = _weight_model_inputs(data, current_weight_kg)
    plan = calculate_weight_loss_plan(
        model_inputs,
        target_weight_kg=target_weight_kg,
        pace_kg_per_week=pace_kg_per_week,
    )
    return WeightGoalPreviewOut(
        method="calculated",
        calorie_target_kcal=plan.calorie_target_kcal,
        duration_days=plan.duration_days,
        estimated_end_date=estimated_end_date,
        projected_weight_kg=plan.projected_weight_kg,
        model_note=(
            "Estimated with the published dynamic adult body-weight model. Individual results "
            "vary; this is not medical advice."
        ),
        source=MODEL_REFERENCE,
    )


@app.get("/api/v1/goals/current", response_model=CurrentGoalOut)
def current_goal(
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)], session: SessionDep
) -> dict[str, Any]:
    """Return the signed-in user's active goal and recent weight check-ins."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    goal = session.scalar(
        select(Goal).where(Goal.profile_id == profile.id, Goal.status == "active")
    )
    if goal is None:
        return {"goal": None, "check_ins": [], "latest_plan": None, "plan_error": None}

    check_ins = list(
        session.scalars(
            select(WeightCheckIn)
            .where(
                WeightCheckIn.profile_id == profile.id,
                WeightCheckIn.measured_on >= goal.created_at.date(),
            )
            .order_by(WeightCheckIn.measured_on.desc())
            .limit(12)
        )
    )
    data = goal.goal_data
    current_weight_kg = (
        check_ins[0].weight_kg if check_ins else float(data["current_weight_kg"])
    )
    try:
        latest_plan = _weight_goal_preview(data, current_weight_kg, user.timezone)
        plan_error = None
    except (KeyError, TypeError, ValueError) as err:
        latest_plan = None
        plan_error = str(err)
    return {
        "goal": goal,
        "check_ins": check_ins,
        "latest_plan": latest_plan,
        "plan_error": plan_error,
    }


@app.post("/api/v1/goals/preview", response_model=WeightGoalPreviewOut)
def preview_weight_goal(
    payload: WeightGoalRequest,
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
) -> WeightGoalPreviewOut:
    """Calculate a plan preview without saving a goal or changing daily targets."""
    try:
        return _weight_goal_preview(payload.model_dump(), payload.current_weight_kg, user.timezone)
    except WeightModelError as err:
        raise HTTPException(status_code=422, detail=str(err)) from err


@app.post("/api/v1/goals", response_model=GoalOut, status_code=status.HTTP_201_CREATED)
def create_weight_goal(
    payload: WeightGoalRequest,
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
) -> Goal:
    """Create one active weight-loss goal for the signed-in profile."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    active_goal = session.scalar(
        select(Goal).where(Goal.profile_id == profile.id, Goal.status == "active")
    )
    if active_goal is not None:
        raise HTTPException(status_code=409, detail="Complete or cancel the active goal first.")
    goal_data = payload.model_dump(
        exclude={"adult_confirmed", "not_pregnant_or_breastfeeding"}
    )
    try:
        _weight_goal_preview(goal_data, payload.current_weight_kg, user.timezone)
    except WeightModelError as err:
        raise HTTPException(status_code=422, detail=str(err)) from err
    goal = Goal(
        profile_id=profile.id,
        goal_type="weight_loss",
        status="active",
        goal_data=goal_data,
        created_at=datetime.now(UTC),
    )
    session.add(goal)
    try:
        session.commit()
    except IntegrityError as err:
        session.rollback()
        raise HTTPException(
            status_code=409, detail="Complete or cancel the active goal first."
        ) from err
    session.refresh(goal)
    return goal


@app.delete("/api/v1/goals/current", response_model=GoalOut)
def cancel_current_goal(
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)], session: SessionDep
) -> Goal:
    """Cancel the active goal while preserving its history."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    goal = session.scalar(
        select(Goal).where(Goal.profile_id == profile.id, Goal.status == "active")
    )
    if goal is None:
        raise HTTPException(status_code=404, detail="There is no active goal.")
    goal.status = "cancelled"
    session.commit()
    session.refresh(goal)
    return goal


@app.post("/api/v1/goals/current/complete", response_model=GoalOut)
def complete_current_goal(
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)], session: SessionDep
) -> Goal:
    """Complete the active goal while preserving its history."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    goal = session.scalar(
        select(Goal).where(Goal.profile_id == profile.id, Goal.status == "active")
    )
    if goal is None:
        raise HTTPException(status_code=404, detail="There is no active goal.")
    goal.status = "completed"
    session.commit()
    session.refresh(goal)
    return goal


@app.put("/api/v1/goals/current/check-ins", response_model=WeightCheckInOut)
def save_weight_checkin(
    payload: WeightCheckInCreate,
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
) -> WeightCheckIn:
    """Save or correct one dated check-in for the active weight-loss goal."""
    profile = get_profile(session, user.user_id, user.display_name, user.timezone)
    goal = session.scalar(
        select(Goal).where(Goal.profile_id == profile.id, Goal.status == "active")
    )
    if goal is None or goal.goal_type != "weight_loss":
        raise HTTPException(status_code=404, detail="There is no active weight-loss goal.")
    if payload.measured_on < goal.created_at.date():
        raise HTTPException(
            status_code=422,
            detail="A check-in date cannot be earlier than the active goal.",
        )
    if payload.measured_on > datetime.now(ZoneInfo(user.timezone)).date():
        raise HTTPException(status_code=422, detail="A check-in date cannot be in the future.")
    check_in = session.scalar(
        select(WeightCheckIn).where(
            WeightCheckIn.profile_id == profile.id,
            WeightCheckIn.measured_on == payload.measured_on,
        )
    )
    if check_in is None:
        check_in = WeightCheckIn(
            profile_id=profile.id,
            measured_on=payload.measured_on,
            weight_kg=payload.weight_kg,
        )
        session.add(check_in)
    else:
        check_in.weight_kg = payload.weight_kg
    session.commit()
    session.refresh(check_in)
    return check_in


@app.get("/api/v1/products/lookup", response_model=ProductOut | None)
def product_lookup(
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
    upc: str = Query(min_length=8, max_length=14, pattern=r"^[0-9]+$"),
    refresh: bool = False,
) -> Product | None:
    """Resolve a barcode from the local cache, then USDA and Open Food Facts."""
    del user
    return lookup_or_cache(session, upc, refresh=refresh).product


@app.get("/api/v1/products/lookup/details", response_model=ProductLookupOut)
def product_lookup_details(
    user: Annotated[AuthenticatedUser, Depends(authenticated_user)],
    session: SessionDep,
    upc: str = Query(min_length=8, max_length=14, pattern=r"^[0-9]+$"),
    refresh: bool = False,
) -> ProductLookupOut:
    """Return a barcode match and diagnostics for each lookup provider."""
    del user
    outcome = lookup_or_cache(session, upc, refresh=refresh)
    return ProductLookupOut.model_validate(
        {"product": outcome.product, "providers": outcome.providers}
    )


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
    if expected and (x_api_token is None or not secrets.compare_digest(x_api_token, expected)):
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
    if expected and (x_api_token is None or not secrets.compare_digest(x_api_token, expected)):
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
