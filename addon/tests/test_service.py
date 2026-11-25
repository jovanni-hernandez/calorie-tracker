"""Unit tests for nutrition calculations and date boundaries."""

from datetime import UTC, datetime

import pytest

from calorie_tracker.models import Product
from calorie_tracker.service import local_day_range, nutrition_for_amount


def sample_product(**overrides: object) -> Product:
    """Create a transient product for calculation tests."""
    fields: dict[str, object] = {
        "name": "Test food",
        "source": "manual",
        "lookup_status": "found",
        "serving_weight_g": 40.0,
        "calories": 180.0,
        "protein_g": 8.0,
        "carbs_g": 24.0,
        "fat_g": 6.0,
        "updated_at": datetime.now(UTC),
    }
    fields.update(overrides)
    return Product(**fields)  # type: ignore[arg-type]


def test_serving_amount_scales_all_nutrition() -> None:
    """Serving-based quantity scales each stored macro consistently."""
    result = nutrition_for_amount(sample_product(), "servings", 1.5)
    assert result == {
        "calories": 270,
        "protein_g": 12,
        "carbs_g": 36,
        "fat_g": 9,
    }


def test_grams_amount_uses_known_serving_weight() -> None:
    """Weight entry converts by the product's known serving mass."""
    result = nutrition_for_amount(sample_product(), "grams", 20)
    assert result == {
        "calories": 90,
        "protein_g": 4,
        "carbs_g": 12,
        "fat_g": 3,
    }


def test_grams_rejected_when_serving_mass_is_unknown() -> None:
    """A missing serving weight must not produce a misleading conversion."""
    with pytest.raises(ValueError, match="serving weight is unavailable"):
        nutrition_for_amount(sample_product(serving_weight_g=None), "grams", 20)


def test_missing_macro_data_must_be_corrected_before_logging() -> None:
    """Unknown nutrition is not silently interpreted as zero."""
    with pytest.raises(ValueError, match="Complete these product facts"):
        nutrition_for_amount(sample_product(protein_g=None), "servings", 1)


def test_local_day_uses_configured_timezone(monkeypatch: pytest.MonkeyPatch) -> None:
    """The day interval is calculated across the New York daylight-saving shift."""
    monkeypatch.setenv("CALORIE_TIMEZONE", "America/New_York")
    from calorie_tracker.config import get_settings

    get_settings.cache_clear()
    start, end = local_day_range("2026-03-08")
    assert start == datetime(2026, 3, 8, 5, tzinfo=UTC)
    assert end == datetime(2026, 3, 9, 4, tzinfo=UTC)
    get_settings.cache_clear()
