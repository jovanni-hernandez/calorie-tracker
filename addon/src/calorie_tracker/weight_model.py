"""Published dynamic adult body-weight model used for weight-loss estimates.

This is an independent implementation of the model described by Hall et al.
(Lancet, 2011), not a copy of the NIDDK Body Weight Planner application.
"""

from __future__ import annotations

import math
from dataclasses import dataclass
from typing import Literal

MODEL_REFERENCE = (
    "Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. "
    "Lancet. 2011;378(9793):826-837. PMID 21872751."
)
MINIMUM_CALORIES_KCAL = 1000.0
MINIMUM_TARGET_BMI = 18.5
MAXIMUM_PLAN_DAYS = 3650
_INITIAL_GLYCOGEN_KG = 0.5
_CARBOHYDRATE_FRACTION = 0.5
_BASELINE_SODIUM_MG = 4000.0
_FAT_ENERGY_DENSITY = 9440.0
_LEAN_ENERGY_DENSITY = 1807.0
_GLYCOGEN_ENERGY_DENSITY = 4180.0
_GLYCOGEN_WATER_RATIO = 3.7
_BODY_PARTITION_CONSTANT = 1.990762711864407


class WeightModelError(ValueError):
    """The dynamic model cannot produce a supported weight-loss estimate."""


@dataclass(frozen=True)
class WeightModelInputs:
    """Starting values used by the adult body-weight model."""

    weight_kg: float
    height_cm: float
    age_years: int
    sex_parameter: Literal["male", "female"]
    activity_level: float


@dataclass(frozen=True)
class WeightLossPlan:
    """Calculated calorie target and projected endpoint."""

    calorie_target_kcal: int
    duration_days: int
    projected_weight_kg: float


@dataclass(frozen=True)
class _BodyState:
    fat_kg: float
    lean_kg: float
    glycogen_kg: float
    extracellular_water_kg: float
    thermogenesis_kcal: float


@dataclass(frozen=True)
class _Baseline:
    inputs: WeightModelInputs
    resting_energy_kcal: float
    maintenance_kcal: float
    activity_parameter: float
    energy_constant: float
    baseline_carbohydrate_kcal: float
    initial_state: _BodyState


def calculate_weight_loss_plan(
    inputs: WeightModelInputs,
    target_weight_kg: float,
    pace_kg_per_week: float,
) -> WeightLossPlan:
    """Solve for daily energy intake that reaches a goal at the chosen pace."""
    _validate_inputs(inputs)
    if not math.isfinite(target_weight_kg) or target_weight_kg <= 0:
        raise WeightModelError("Target weight must be a positive number.")
    if not math.isfinite(pace_kg_per_week) or pace_kg_per_week <= 0:
        raise WeightModelError("Weekly pace must be a positive number.")
    if target_weight_kg >= inputs.weight_kg:
        raise WeightModelError("A weight-loss target must be below the starting weight.")

    target_bmi = target_weight_kg / ((inputs.height_cm / 100.0) ** 2)
    if target_bmi < MINIMUM_TARGET_BMI:
        raise WeightModelError(
            "The target is below BMI 18.5. This model does not provide a weight-loss plan "
            "for that target."
        )

    duration_days = math.ceil(
        (inputs.weight_kg - target_weight_kg) / pace_kg_per_week * 7.0
    )
    if duration_days > MAXIMUM_PLAN_DAYS:
        raise WeightModelError("Choose a more specific pace; the modeled plan exceeds 10 years.")

    baseline = _make_baseline(inputs)
    minimum_weight = _simulate(baseline, MINIMUM_CALORIES_KCAL, duration_days)
    if minimum_weight > target_weight_kg:
        raise WeightModelError(
            "The selected pace would require less than 1,000 kcal/day in this model. "
            "Choose a slower pace or a different target, or discuss the plan with a clinician."
        )

    high_calories = max(baseline.maintenance_kcal, MINIMUM_CALORIES_KCAL + 1.0)
    high_weight = _simulate(baseline, high_calories, duration_days)
    if high_weight < target_weight_kg:
        raise WeightModelError("The requested target and pace are outside this model's range.")

    low_calories = MINIMUM_CALORIES_KCAL
    for _ in range(60):
        midpoint = (low_calories + high_calories) / 2.0
        projected_weight = _simulate(baseline, midpoint, duration_days)
        if projected_weight < target_weight_kg:
            low_calories = midpoint
        else:
            high_calories = midpoint

    suggested_calories = int(round(((low_calories + high_calories) / 2.0) / 10.0) * 10)
    projected_weight = _simulate(baseline, float(suggested_calories), duration_days)
    if suggested_calories < MINIMUM_CALORIES_KCAL:
        raise WeightModelError("The modeled target falls below the supported calorie range.")

    return WeightLossPlan(
        calorie_target_kcal=suggested_calories,
        duration_days=duration_days,
        projected_weight_kg=projected_weight,
    )


def project_weight_kg(
    inputs: WeightModelInputs,
    calorie_target_kcal: float,
    duration_days: int,
) -> float:
    """Project body weight for a fixed intake using the published model."""
    _validate_inputs(inputs)
    if not math.isfinite(calorie_target_kcal) or calorie_target_kcal <= 0:
        raise WeightModelError("Calorie target must be a positive number.")
    if duration_days < 1 or duration_days > MAXIMUM_PLAN_DAYS:
        raise WeightModelError("Projection duration must be between 1 day and 10 years.")
    return _simulate(_make_baseline(inputs), calorie_target_kcal, duration_days)


def _validate_inputs(inputs: WeightModelInputs) -> None:
    """Reject values outside the published planner's intended input domain."""
    numbers = (inputs.weight_kg, inputs.height_cm, inputs.activity_level)
    if not all(math.isfinite(value) for value in numbers):
        raise WeightModelError("Model inputs must be finite numbers.")
    if not 18 <= inputs.age_years <= 120:
        raise WeightModelError("The weight-loss model is intended for adults.")
    if not 100.0 <= inputs.height_cm <= 250.0:
        raise WeightModelError("Height must be between 100 and 250 cm.")
    if inputs.weight_kg <= 0:
        raise WeightModelError("Starting weight must be a positive number.")
    if not 1.0 <= inputs.activity_level <= 2.5:
        raise WeightModelError("Activity level must be between 1.0 and 2.5.")
    if inputs.sex_parameter not in ("male", "female"):
        raise WeightModelError("Choose a supported equation parameter or use manual calories.")


def _make_baseline(inputs: WeightModelInputs) -> _Baseline:
    """Estimate resting needs and initial body composition for the simulation."""
    bmi = inputs.weight_kg / ((inputs.height_cm / 100.0) ** 2)
    is_male = inputs.sex_parameter == "male"
    resting_energy = (
        9.99 * inputs.weight_kg
        + 6.25 * inputs.height_cm
        - 4.92 * inputs.age_years
        + (5.0 if is_male else -161.0)
    )
    maintenance = resting_energy * inputs.activity_level
    body_fat_percent = (
        0.14 * inputs.age_years
        + (37.31 if is_male else 39.96) * math.log(bmi)
        - (103.94 if is_male else 102.01)
    )
    body_fat_percent = min(60.0, max(0.0, body_fat_percent))
    fat_kg = inputs.weight_kg * body_fat_percent / 100.0
    lean_kg = inputs.weight_kg - fat_kg
    activity_parameter = (0.9 * resting_energy * inputs.activity_level - resting_energy) / (
        inputs.weight_kg
    )
    energy_constant = (
        0.76 * maintenance
        - 22.0 * lean_kg
        - 3.2 * fat_kg
        - activity_parameter * inputs.weight_kg
    )
    return _Baseline(
        inputs=inputs,
        resting_energy_kcal=resting_energy,
        maintenance_kcal=maintenance,
        activity_parameter=activity_parameter,
        energy_constant=energy_constant,
        baseline_carbohydrate_kcal=maintenance * _CARBOHYDRATE_FRACTION,
        initial_state=_BodyState(
            fat_kg=fat_kg,
            lean_kg=lean_kg,
            glycogen_kg=_INITIAL_GLYCOGEN_KG,
            extracellular_water_kg=0.0,
            thermogenesis_kcal=0.14 * maintenance,
        ),
    )


def _simulate(baseline: _Baseline, calorie_target_kcal: float, duration_days: int) -> float:
    """Integrate the daily body-composition equations with fourth-order Runge-Kutta."""
    state = baseline.initial_state
    for _ in range(duration_days):
        first = _derivative(state, baseline, calorie_target_kcal)
        second = _derivative(_add_change(state, first, 0.5), baseline, calorie_target_kcal)
        third = _derivative(_add_change(state, second, 0.5), baseline, calorie_target_kcal)
        fourth = _derivative(_add_change(state, third, 1.0), baseline, calorie_target_kcal)
        state = _weighted_change(state, first, second, third, fourth)
        if state.fat_kg <= 0 or state.lean_kg <= 0 or state.glycogen_kg <= 0:
            raise WeightModelError("The requested projection is outside the model's valid range.")
    return _weight_kg(state)


def _derivative(
    state: _BodyState, baseline: _Baseline, calorie_target_kcal: float
) -> _BodyState:
    """Calculate daily changes in fat, lean tissue, glycogen, water, and thermogenesis."""
    partition = _BODY_PARTITION_CONSTANT / (_BODY_PARTITION_CONSTANT + state.fat_kg)
    carbohydrate_intake = calorie_target_kcal * _CARBOHYDRATE_FRACTION
    baseline_glycogen = baseline.initial_state.glycogen_kg
    carb_flux = carbohydrate_intake - (
        baseline.baseline_carbohydrate_kcal / baseline_glycogen**2
    ) * state.glycogen_kg**2
    sodium_intake = _BASELINE_SODIUM_MG * calorie_target_kcal / baseline.maintenance_kcal
    sodium_imbalance = (
        sodium_intake
        - _BASELINE_SODIUM_MG
        - 3000.0 * state.extracellular_water_kg
        - 4000.0 * (1.0 - carbohydrate_intake / baseline.baseline_carbohydrate_kcal)
    )
    weight = _weight_kg(state)
    expenditure = (
        baseline.energy_constant
        + 22.0 * state.lean_kg
        + 3.2 * state.fat_kg
        + baseline.activity_parameter * weight
        + state.thermogenesis_kcal
        + 0.1 * calorie_target_kcal
    )
    energy_fraction = (
        (1.0 - partition) * 180.0 / _FAT_ENERGY_DENSITY
        + partition * 230.0 / _LEAN_ENERGY_DENSITY
    )
    total_expenditure = (
        expenditure + (calorie_target_kcal - carb_flux) * energy_fraction
    ) / (1.0 + energy_fraction)
    energy_imbalance = calorie_target_kcal - total_expenditure - carb_flux
    return _BodyState(
        fat_kg=(1.0 - partition) * energy_imbalance / _FAT_ENERGY_DENSITY,
        lean_kg=partition * energy_imbalance / _LEAN_ENERGY_DENSITY,
        glycogen_kg=carb_flux / _GLYCOGEN_ENERGY_DENSITY,
        extracellular_water_kg=sodium_imbalance / 3220.0,
        thermogenesis_kcal=(0.14 * calorie_target_kcal - state.thermogenesis_kcal) / 14.0,
    )


def _weight_kg(state: _BodyState) -> float:
    """Include glycogen-bound water in total body weight."""
    return (
        state.fat_kg
        + state.lean_kg
        + _GLYCOGEN_WATER_RATIO * (state.glycogen_kg - _INITIAL_GLYCOGEN_KG)
        + state.extracellular_water_kg
    )


def _add_change(state: _BodyState, change: _BodyState, days: float) -> _BodyState:
    """Apply a derivative for an intermediate Runge-Kutta state."""
    return _BodyState(
        fat_kg=state.fat_kg + days * change.fat_kg,
        lean_kg=state.lean_kg + days * change.lean_kg,
        glycogen_kg=state.glycogen_kg + days * change.glycogen_kg,
        extracellular_water_kg=(
            state.extracellular_water_kg + days * change.extracellular_water_kg
        ),
        thermogenesis_kcal=state.thermogenesis_kcal + days * change.thermogenesis_kcal,
    )


def _weighted_change(
    state: _BodyState,
    first: _BodyState,
    second: _BodyState,
    third: _BodyState,
    fourth: _BodyState,
) -> _BodyState:
    """Complete one RK4 day using the four weighted derivative estimates."""
    return _BodyState(
        fat_kg=state.fat_kg
        + (first.fat_kg + 2.0 * second.fat_kg + 2.0 * third.fat_kg + fourth.fat_kg) / 6.0,
        lean_kg=state.lean_kg
        + (first.lean_kg + 2.0 * second.lean_kg + 2.0 * third.lean_kg + fourth.lean_kg)
        / 6.0,
        glycogen_kg=state.glycogen_kg
        + (
            first.glycogen_kg
            + 2.0 * second.glycogen_kg
            + 2.0 * third.glycogen_kg
            + fourth.glycogen_kg
        )
        / 6.0,
        extracellular_water_kg=state.extracellular_water_kg
        + (
            first.extracellular_water_kg
            + 2.0 * second.extracellular_water_kg
            + 2.0 * third.extracellular_water_kg
            + fourth.extracellular_water_kg
        )
        / 6.0,
        thermogenesis_kcal=state.thermogenesis_kcal
        + (
            first.thermogenesis_kcal
            + 2.0 * second.thermogenesis_kcal
            + 2.0 * third.thermogenesis_kcal
            + fourth.thermogenesis_kcal
        )
        / 6.0,
    )
