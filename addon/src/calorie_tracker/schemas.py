"""Typed API request and response schemas."""

from datetime import date, datetime
from typing import Any, Literal

from pydantic import BaseModel, ConfigDict, Field, field_validator, model_validator


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


ProviderStatus = Literal[
    "found",
    "not_found",
    "unavailable",
    "not_configured",
    "not_checked",
]


class ProductLookupProviders(BaseModel):
    """Per-provider result for a barcode lookup."""

    usda: ProviderStatus
    open_food_facts: ProviderStatus


class ProductLookupOut(BaseModel):
    """Product match and provider diagnostics for a barcode lookup."""

    product: ProductOut | None
    providers: ProductLookupProviders | None


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


class WeightGoalRequest(BaseModel):
    """Create or preview a weight-loss goal and its optional calorie estimate."""

    current_weight_kg: float = Field(gt=0, le=500)
    target_weight_kg: float = Field(gt=0, le=500)
    pace_kg_per_week: float = Field(gt=0, le=5)
    method: Literal["calculated", "manual"]
    manual_calorie_target_kcal: float | None = Field(default=None, gt=0, le=10000)
    age_years: int | None = Field(default=None, ge=18, le=120)
    height_cm: float | None = Field(default=None, ge=100, le=250)
    sex_parameter: Literal["male", "female"] | None = None
    activity_level: float | None = Field(default=None, ge=1.0, le=2.5)
    adult_confirmed: bool
    not_pregnant_or_breastfeeding: bool

    @model_validator(mode="after")
    def validate_goal_inputs(self) -> "WeightGoalRequest":
        """Require an adult, eligible weight-loss goal and complete method inputs."""
        if self.target_weight_kg >= self.current_weight_kg:
            raise ValueError("Target weight must be below current weight.")
        if not self.adult_confirmed:
            raise ValueError("The weight-loss goal is only available to adults.")
        if not self.not_pregnant_or_breastfeeding:
            raise ValueError(
                "The weight-loss goal is not available during pregnancy or breastfeeding."
            )
        if self.method == "manual" and self.manual_calorie_target_kcal is None:
            raise ValueError("Enter a manual daily calorie target.")
        if self.method == "calculated" and any(
            value is None
            for value in (
                self.age_years,
                self.height_cm,
                self.sex_parameter,
                self.activity_level,
            )
        ):
            raise ValueError("Complete the model inputs or choose manual calorie entry.")
        return self


class WeightGoalPreviewOut(BaseModel):
    """An estimated calorie target and the requested pace schedule."""

    method: Literal["calculated", "manual"]
    calorie_target_kcal: int | None
    duration_days: int
    estimated_end_date: date
    projected_weight_kg: float | None
    model_note: str
    source: str | None = None


class GoalOut(BaseModel):
    """A profile-owned active or historical goal."""

    model_config = ConfigDict(from_attributes=True)

    id: int
    goal_type: str
    status: str
    goal_data: dict[str, Any]
    created_at: datetime


class WeightCheckInCreate(BaseModel):
    """A dated weight measurement, accepted in canonical kilograms."""

    measured_on: date
    weight_kg: float = Field(gt=0, le=500)


class WeightCheckInOut(BaseModel):
    """A saved weight check-in."""

    model_config = ConfigDict(from_attributes=True)

    id: int
    measured_on: date
    weight_kg: float


class CurrentGoalOut(BaseModel):
    """The active goal, recent check-ins, and current plan proposal."""

    goal: GoalOut | None
    check_ins: list[WeightCheckInOut]
    latest_plan: WeightGoalPreviewOut | None
    plan_error: str | None = None


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
