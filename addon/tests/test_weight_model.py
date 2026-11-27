"""Regression tests for the published dynamic weight-change model."""

import pytest

from calorie_tracker.weight_model import (
    WeightModelError,
    WeightModelInputs,
    calculate_weight_loss_plan,
    project_weight_kg,
)


def sample_inputs(
    *,
    weight_kg: float = 90,
    sex_parameter: str = "male",
) -> WeightModelInputs:
    """Return a repeatable adult profile for model tests."""
    return WeightModelInputs(
        weight_kg=weight_kg,
        height_cm=175,
        age_years=40,
        sex_parameter=sex_parameter,  # type: ignore[arg-type]
        activity_level=1.6,
    )


def test_maintenance_intake_preserves_starting_weight() -> None:
    """The baseline estimate is an equilibrium in the dynamic model."""
    inputs = sample_inputs()
    resting_energy = (
        9.99 * inputs.weight_kg
        + 6.25 * inputs.height_cm
        - 4.92 * inputs.age_years
        + 5
    )

    projected = project_weight_kg(inputs, resting_energy * inputs.activity_level, 180)

    assert projected == pytest.approx(inputs.weight_kg, abs=0.01)


def test_inverse_calculation_reaches_target_within_tolerance() -> None:
    """The root solve uses the forward trajectory rather than a fixed kcal rule."""
    inputs = sample_inputs()
    plan = calculate_weight_loss_plan(inputs, target_weight_kg=80, pace_kg_per_week=0.5)
    projected = project_weight_kg(inputs, plan.calorie_target_kcal, plan.duration_days)

    assert plan.duration_days == 140
    assert plan.calorie_target_kcal >= 1000
    assert projected == pytest.approx(80, abs=0.1)


def test_faster_pace_requires_lower_calorie_target() -> None:
    """A shorter timeline produces a more aggressive calculated intake."""
    inputs = sample_inputs()
    slower = calculate_weight_loss_plan(inputs, target_weight_kg=80, pace_kg_per_week=0.25)
    faster = calculate_weight_loss_plan(inputs, target_weight_kg=80, pace_kg_per_week=0.75)

    assert faster.calorie_target_kcal < slower.calorie_target_kcal


def test_unachievable_pace_below_model_floor_is_rejected() -> None:
    """The model refuses rather than returning an intake below its supported floor."""
    with pytest.raises(WeightModelError, match="less than 1,000 kcal/day"):
        calculate_weight_loss_plan(
            sample_inputs(weight_kg=120),
            target_weight_kg=80,
            pace_kg_per_week=10,
        )


def test_target_below_bmi_18_5_is_rejected() -> None:
    """The planner does not provide a calculated loss target below BMI 18.5."""
    with pytest.raises(WeightModelError, match="below BMI 18.5"):
        calculate_weight_loss_plan(
            sample_inputs(weight_kg=60),
            target_weight_kg=55,
            pace_kg_per_week=0.25,
        )


def test_adult_age_is_required() -> None:
    """The model scope excludes users younger than 18."""
    inputs = WeightModelInputs(
        weight_kg=90,
        height_cm=175,
        age_years=17,
        sex_parameter="male",
        activity_level=1.6,
    )

    with pytest.raises(WeightModelError, match="intended for adults"):
        calculate_weight_loss_plan(inputs, target_weight_kg=80, pace_kg_per_week=0.5)


def test_manual_projection_rejects_out_of_range_duration() -> None:
    """Projection bounds prevent unbounded simulation work."""
    with pytest.raises(WeightModelError, match="between 1 day and 10 years"):
        project_weight_kg(sample_inputs(), 2000, 0)
