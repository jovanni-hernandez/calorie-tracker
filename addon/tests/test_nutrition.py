"""Nutrition-provider response compatibility and diagnostics."""

from types import SimpleNamespace

import httpx
import pytest
from pydantic import SecretStr

from calorie_tracker import nutrition


def test_open_food_facts_accepts_current_success_with_warnings(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    """The current v3 API status and zero-prefixed GTIN resolve a UPC."""
    request = httpx.Request(
        "GET", "https://world.openfoodfacts.org/api/v3/product/051000281081.json"
    )
    response = httpx.Response(
        200,
        request=request,
        json={
            "status": "success_with_warnings",
            "product": {
                "code": "0051000281081",
                "product_name": "Condensed Soup, Chicken Noodle",
                "brands": "Campbell's",
                "serving_size": "1/2 cup condensed",
                "nutriments": {
                    "serving_quantity": 120,
                    "energy-kcal_serving": 60,
                    "proteins_serving": 3,
                    "carbohydrates_serving": 8,
                    "fat_serving": 2,
                },
            },
        },
    )
    monkeypatch.setattr(nutrition.httpx, "get", lambda *args, **kwargs: response)
    monkeypatch.setattr(
        nutrition,
        "get_settings",
        lambda: SimpleNamespace(usda_api_key=SecretStr("")),
    )

    result = nutrition.lookup_barcode("051000281081")

    assert result.facts is not None
    assert result.facts["name"] == "Condensed Soup, Chicken Noodle"
    assert result.facts["brand"] == "Campbell's"
    assert result.facts["calories"] == 60
    assert result.facts["protein_g"] == 3
    assert result.facts["carbs_g"] == 8
    assert result.facts["fat_g"] == 2
    assert result.providers == {
        "usda": "not_configured",
        "open_food_facts": "found",
    }


def test_provider_statuses_distinguish_no_key_from_open_food_facts_404(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    """A missing USDA key and a genuine OFF miss are reported separately."""
    request = httpx.Request(
        "GET", "https://world.openfoodfacts.org/api/v3/product/000000000000.json"
    )
    response = httpx.Response(404, request=request)
    monkeypatch.setattr(nutrition.httpx, "get", lambda *args, **kwargs: response)
    monkeypatch.setattr(
        nutrition,
        "get_settings",
        lambda: SimpleNamespace(usda_api_key=SecretStr("")),
    )

    result = nutrition.lookup_barcode("000000000000")

    assert result.facts is None
    assert result.providers == {
        "usda": "not_configured",
        "open_food_facts": "not_found",
    }
