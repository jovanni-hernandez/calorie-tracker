"""Typed API request and response schemas."""

from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field, field_validator


class ProductOut(BaseModel):
    """Product facts presented for review."""

    model_config = ConfigDict(from_attributes=True)

    id: int
    upc: str | None
    name: str
    brand: str | None
    source: str
    lookup_status: str
    serving_size: str | None
    serving_weight_g: float | None
    calories: float | None
    protein_g: float | None
    carbs_g: float | None
    fat_g: float | None


class ProductCreate(BaseModel):
    """Create a local product, for example from confirmed OCR."""

    upc: str | None = Field(default=None, max_length=32)
    name: str = Field(min_length=1, max_length=240)
    brand: str | None = Field(default=None, max_length=160)
    source: str = "label"
    serving_size: str | None = None
    serving_weight_g: float | None = Field(default=None, gt=0)
    calories: float | None = Field(default=None, ge=0)
    protein_g: float | None = Field(default=None, ge=0)
    carbs_g: float | None = Field(default=None, ge=0)
    fat_g: float | None = Field(default=None, ge=0)


class ProductUpdate(BaseModel):
    """Correct cached product facts."""

    name: str | None = None
    brand: str | None = None
    serving_size: str | None = None
    serving_weight_g: float | None = Field(default=None, gt=0)
    calories: float | None = Field(default=None, ge=0)
    protein_g: float | None = Field(default=None, ge=0)
    carbs_g: float | None = Field(default=None, ge=0)
    fat_g: float | None = Field(default=None, ge=0)


class MealCreate(BaseModel):
    """Create a meal; profile identity is supplied by authenticated HA context."""

    product_id: int
    consumed_at: datetime
    amount_mode: Literal["servings", "grams", "ounces"]
    amount: float = Field(gt=0)

    @field_validator("consumed_at")
    @classmethod
    def timestamp_must_be_aware(cls, value: datetime) -> datetime:
        """Reject ambiguous timestamps without an offset."""
        if value.tzinfo is None or value.utcoffset() is None:
            raise ValueError("Timestamp must include a timezone")
        return value


class MealUpdate(BaseModel):
    """Edit a logged meal."""

    consumed_at: datetime | None = None
    amount_mode: Literal["servings", "grams", "ounces"] | None = None
    amount: float | None = Field(default=None, gt=0)

    @field_validator("consumed_at")
    @classmethod
    def timestamp_must_be_aware(cls, value: datetime | None) -> datetime | None:
        """Reject ambiguous timestamps without an offset."""
        if value is not None and (value.tzinfo is None or value.utcoffset() is None):
            raise ValueError("Timestamp must include a timezone")
        return value


class TargetUpdate(BaseModel):
    """Update profile-specific daily nutrition goals."""

    calorie_target: float = Field(gt=0)
    protein_target_g: float = Field(gt=0)
    carbs_target_g: float = Field(gt=0)
    fat_target_g: float = Field(gt=0)


class ProfileOut(BaseModel):
    """Authenticated profile and targets."""

    model_config = ConfigDict(from_attributes=True)

    id: int
    display_name: str
    calorie_target: float
    protein_target_g: float
    carbs_target_g: float
    fat_target_g: float


class MealOut(BaseModel):
    """Meal record with nested product."""

    id: int
    consumed_at: datetime
    amount_mode: str
    amount: float
    calories: float
    protein_g: float
    carbs_g: float
    fat_g: float
    product: ProductOut


class TotalsOut(BaseModel):
    """Totals and goals for a profile and local date."""

    date: str
    calories: float
    protein_g: float
    carbs_g: float
    fat_g: float
    profile: ProfileOut
