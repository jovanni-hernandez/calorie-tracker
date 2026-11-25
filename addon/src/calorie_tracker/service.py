"""Domain operations for product lookup and meal calculations."""

from datetime import UTC, datetime, time, timedelta
from typing import Any
from zoneinfo import ZoneInfo

from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session, joinedload

from calorie_tracker.config import get_settings
from calorie_tracker.models import BarcodeCache, Meal, Product, Profile
from calorie_tracker.nutrition import lookup_barcode


def get_or_create_profile(
    session: Session, ha_user_id: str, name: str | None, timezone: str | None = None
) -> Profile:
    """Resolve the authenticated HA user to a persistent calorie profile."""
    profile = session.scalar(select(Profile).where(Profile.ha_user_id == ha_user_id))
    if profile:
        changed = False
        if name and profile.display_name != name:
            profile.display_name = name
            changed = True
        if timezone and profile.timezone != timezone:
            profile.timezone = timezone
            changed = True
        if changed:
            session.commit()
        return profile
    profile = Profile(
        ha_user_id=ha_user_id,
        display_name=name or "Home Assistant user",
        timezone=timezone or get_settings().timezone,
    )
    session.add(profile)
    try:
        session.commit()
    except IntegrityError:
        session.rollback()
        existing = session.scalar(select(Profile).where(Profile.ha_user_id == ha_user_id))
        if existing is None:
            raise
        return existing
    session.refresh(profile)
    return profile


def product_to_dict(product: Product) -> dict[str, Any]:
    """Serialize a product without ORM internals."""
    return {
        "id": product.id,
        "upc": product.upc,
        "name": product.name,
        "brand": product.brand,
        "source": product.source,
        "lookup_status": product.lookup_status,
        "serving_size": product.serving_size,
        "serving_weight_g": product.serving_weight_g,
        "calories": product.calories,
        "protein_g": product.protein_g,
        "carbs_g": product.carbs_g,
        "fat_g": product.fat_g,
    }


def lookup_or_cache(session: Session, barcode: str, *, refresh: bool = False) -> Product | None:
    """Return a cached product or make one ordered lookup for an unseen UPC."""
    normalized = barcode.strip()
    cached = session.scalar(select(BarcodeCache).where(BarcodeCache.upc == normalized))
    if cached and not refresh:
        return session.get(Product, cached.product_id) if cached.product_id else None
    existing_product = session.scalar(select(Product).where(Product.upc == normalized))
    if cached:
        session.delete(cached)
        session.flush()
    facts = lookup_barcode(normalized)
    now = datetime.now(UTC)
    if facts is None:
        if existing_product:
            session.add(
                BarcodeCache(
                    upc=normalized,
                    status="found",
                    product_id=existing_product.id,
                    checked_at=now,
                )
            )
            session.commit()
            return existing_product
        session.add(BarcodeCache(upc=normalized, status="not_found", checked_at=now))
        session.commit()
        return None
    if existing_product:
        product = existing_product
        updatable_fields = {
            "name",
            "brand",
            "source",
            "serving_size",
            "serving_weight_g",
            "calories",
            "protein_g",
            "carbs_g",
            "fat_g",
        }
        for key, value in facts.items():
            if key in updatable_fields:
                setattr(product, key, value)
        product.updated_at = now
        product.lookup_status = "found"
    else:
        product = Product(
            upc=normalized,
            name=facts["name"],
            brand=facts.get("brand"),
            source=facts["source"],
            lookup_status="found",
            serving_size=facts.get("serving_size"),
            serving_weight_g=facts.get("serving_weight_g"),
            calories=facts.get("calories"),
            protein_g=facts.get("protein_g"),
            carbs_g=facts.get("carbs_g"),
            fat_g=facts.get("fat_g"),
            updated_at=now,
        )
    session.add(product)
    session.flush()
    session.add(BarcodeCache(upc=normalized, status="found", product_id=product.id, checked_at=now))
    session.commit()
    session.refresh(product)
    return product


def nutrition_for_amount(product: Product, mode: str, amount: float) -> dict[str, float]:
    """Calculate nutrition values from serving facts and amount consumed."""
    missing = [
        field
        for field in ("calories", "protein_g", "carbs_g", "fat_g")
        if getattr(product, field) is None
    ]
    if missing:
        raise ValueError(f"Complete these product facts before logging: {', '.join(missing)}")
    if mode in {"grams", "ounces"}:
        if not product.serving_weight_g or product.serving_weight_g <= 0:
            raise ValueError("Product serving weight is unavailable; log by servings instead")
        grams = amount * 28.349523125 if mode == "ounces" else amount
        multiplier = grams / product.serving_weight_g
    elif mode == "servings":
        multiplier = amount
    else:
        raise ValueError("Unsupported amount mode")
    return {
        "calories": (product.calories or 0) * multiplier,
        "protein_g": (product.protein_g or 0) * multiplier,
        "carbs_g": (product.carbs_g or 0) * multiplier,
        "fat_g": (product.fat_g or 0) * multiplier,
    }


def local_day_range(day: str, timezone: str | None = None) -> tuple[datetime, datetime]:
    """Convert an ISO local date to a UTC half-open interval."""
    local_date = datetime.fromisoformat(day).date()
    zone = ZoneInfo(timezone or get_settings().timezone)
    start = datetime.combine(local_date, time.min, tzinfo=zone)
    end = datetime.combine(local_date + timedelta(days=1), time.min, tzinfo=zone)
    return start.astimezone(UTC), end.astimezone(UTC)


def meals_for_day(
    session: Session, profile_id: int, day: str, timezone: str | None = None
) -> list[Meal]:
    """Load a profile's meals within a local calendar day."""
    start, end = local_day_range(day, timezone)
    return list(
        session.scalars(
            select(Meal)
            .options(joinedload(Meal.product))
            .where(Meal.profile_id == profile_id, Meal.consumed_at >= start, Meal.consumed_at < end)
            .order_by(Meal.consumed_at.desc())
        )
    )


def update_meal_from_product(meal: Meal, product: Product) -> None:
    """Recalculate meal totals when its amount changes."""
    values = nutrition_for_amount(product, meal.amount_mode, meal.amount)
    meal.calories = values["calories"]
    meal.protein_g = values["protein_g"]
    meal.carbs_g = values["carbs_g"]
    meal.fat_g = values["fat_g"]
