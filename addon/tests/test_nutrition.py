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


def test_usda_nutrients_are_scaled_to_manufacturer_serving(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    """A USDA per-100-g record becomes facts for its 296 mL bottle serving."""
    request = httpx.Request(
        "POST", "https://api.nal.usda.gov/fdc/v1/foods/search"
    )
    response = httpx.Response(
        200,
        request=request,
        json={
            "foods": [
                {
                    "gtinUpc": "818290017710",
                    "description": "Strawberry yogurt drink",
                    "brandOwner": "Chobani",
                    "servingSize": 296,
                    "servingSizeUnit": "MLT",
                    "householdServingFullText": "1 Bottle",
                    "foodNutrients": [
                        {
                            "nutrientName": "Energy",
                            "unitName": "kcal",
                            "value": 57.4324324324324,
                        },
                        {
                            "nutrientName": "Protein",
                            "unitName": "G",
                            "value": 6.75675675675676,
                        },
                        {
                            "nutrientName": "Carbohydrate, by difference",
                            "unitName": "G",
                            "value": 4.72972972972973,
                        },
                        {
                            "nutrientName": "Total lipid (fat)",
                            "unitName": "G",
                            "value": 1.01351351351351,
                        },
                    ],
                }
            ]
        },
    )
    monkeypatch.setattr(nutrition.httpx, "post", lambda *args, **kwargs: response)
    monkeypatch.setattr(
        nutrition,
        "get_settings",
        lambda: SimpleNamespace(usda_api_key=SecretStr("test-key")),
    )

    result = nutrition._from_usda("818290017710")

    assert result is not None
    assert result["serving_size"] == "1 Bottle"
    assert result["serving_weight_g"] is None
    assert result["calories"] == pytest.approx(170)
    assert result["protein_g"] == pytest.approx(20)
    assert result["carbs_g"] == pytest.approx(14)
    assert result["fat_g"] == pytest.approx(3)


def test_lookup_prefers_complete_open_food_facts_serving_values(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    """Explicit manufacturer-serving facts take priority over normalized USDA data."""
    monkeypatch.setattr(
        nutrition,
        "get_settings",
        lambda: SimpleNamespace(usda_api_key=SecretStr("test-key")),
    )
    monkeypatch.setattr(
        nutrition,
        "_from_usda",
        lambda _barcode: {
            "name": "USDA product",
            "brand": "Example",
            "source": "usda",
            "serving_size": "1 Bottle",
            "serving_weight_g": None,
            "calories": 168,
            "protein_g": 19,
            "carbs_g": 14,
            "fat_g": 3,
        },
    )
    monkeypatch.setattr(
        nutrition,
        "_from_open_food_facts",
        lambda _barcode: {
            "name": "OFF product",
            "brand": "Example",
            "source": "open_food_facts",
            "serving_size": "1 bottle (296 mL)",
            "serving_weight_g": 296,
            "calories": 170,
            "protein_g": 20,
            "carbs_g": 14,
            "fat_g": 3,
        },
    )

    result = nutrition.lookup_barcode("818290017710")

    assert result.facts is not None
    assert result.facts["source"] == "open_food_facts"
    assert result.facts["calories"] == 170
    assert result.providers == {"usda": "found", "open_food_facts": "found"}


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
