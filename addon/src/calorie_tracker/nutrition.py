"""External nutrition database clients."""

from dataclasses import dataclass
from typing import Any, Literal

import httpx

from calorie_tracker.config import get_settings

ProviderStatus = Literal[
    "found",
    "not_found",
    "unavailable",
    "not_configured",
    "not_checked",
]


@dataclass(frozen=True)
class BarcodeLookupResult:
    """Nutrition facts and the outcome from each provider."""

    facts: dict[str, Any] | None
    providers: dict[str, ProviderStatus]


def _number(value: object) -> float | None:
    """Return a non-negative numeric value when parseable."""
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return None
    return float(value) if value >= 0 else None


def _nutrient_value(nutrients: list[dict[str, Any]], *names: str) -> float | None:
    """Find the first requested nutrient, preferring kcal for energy."""
    for name in names:
        matching = [item for item in nutrients if name in str(item.get("nutrientName", "")).lower()]
        if name == "energy":
            matching.sort(key=lambda item: item.get("unitName") != "kcal")
        for nutrient in matching:
            value = _number(nutrient.get("value"))
            if value is not None:
                return value
    return None


def _has_complete_nutrition(facts: dict[str, Any]) -> bool:
    """Return whether a provider supplied all macros needed for meal logging."""
    return all(
        facts.get(key) is not None for key in ("calories", "protein_g", "carbs_g", "fat_g")
    )


def _from_usda(barcode: str) -> dict[str, Any] | None:
    key = get_settings().usda_api_key.get_secret_value()
    if not key:
        return None
    response = httpx.post(
        "https://api.nal.usda.gov/fdc/v1/foods/search",
        params={"api_key": key},
        json={"query": barcode, "dataType": ["Branded"], "pageSize": 25},
        timeout=12,
    )
    response.raise_for_status()
    foods = response.json().get("foods", [])
    for food in foods:
        if str(food.get("gtinUpc", "")).lstrip("0") != barcode.lstrip("0"):
            continue
        nutrients = food.get("foodNutrients", [])

        return {
            "name": food.get("description") or f"UPC {barcode}",
            "brand": food.get("brandOwner"),
            "source": "usda",
            "serving_size": food.get("householdServingFullText"),
            "serving_weight_g": _number(food.get("servingSize"))
            if food.get("servingSizeUnit") == "g"
            else None,
            "calories": _nutrient_value(nutrients, "energy"),
            "protein_g": _nutrient_value(nutrients, "protein"),
            "carbs_g": _nutrient_value(nutrients, "carbohydrate"),
            "fat_g": _nutrient_value(nutrients, "total lipid"),
        }
    return None


def _from_open_food_facts(barcode: str) -> dict[str, Any] | None:
    response = httpx.get(
        f"https://world.openfoodfacts.org/api/v3/product/{barcode}.json",
        headers={"User-Agent": "HA-Calorie-Tracker/0.1 (self-hosted Home Assistant app)"},
        timeout=12,
    )
    response.raise_for_status()
    payload = response.json()
    if payload.get("status") not in (1, "success", "success_with_warnings"):
        if payload.get("status") in (0, "failure"):
            return None
        raise ValueError("Open Food Facts returned an unrecognized status")
    product = payload.get("product", {})
    if str(product.get("code", "")).lstrip("0") != barcode.lstrip("0"):
        return None
    nutriments = product.get("nutriments", {})
    serving_weight = _number(nutriments.get("serving_quantity"))
    return {
        "name": product.get("product_name") or f"UPC {barcode}",
        "brand": product.get("brands"),
        "source": "open_food_facts",
        "serving_size": product.get("serving_size"),
        "serving_weight_g": serving_weight,
        "calories": _number(nutriments.get("energy-kcal_serving")),
        "protein_g": _number(nutriments.get("proteins_serving")),
        "carbs_g": _number(nutriments.get("carbohydrates_serving")),
        "fat_g": _number(nutriments.get("fat_serving")),
    }


def lookup_barcode(barcode: str) -> BarcodeLookupResult:
    """Try USDA, then Open Food Facts, and retain each provider's outcome."""
    settings = get_settings()
    has_usda_key = bool(settings.usda_api_key.get_secret_value())
    providers: dict[str, ProviderStatus] = {
        "usda": "not_checked" if has_usda_key else "not_configured",
        "open_food_facts": "not_checked",
    }
    candidates: list[dict[str, Any]] = []

    if has_usda_key:
        try:
            result = _from_usda(barcode)
        except (httpx.HTTPError, ValueError):
            providers["usda"] = "unavailable"
        else:
            providers["usda"] = "found" if result else "not_found"
            if result:
                candidates.append(result)
                if _has_complete_nutrition(result):
                    return BarcodeLookupResult(facts=result, providers=providers)

    try:
        result = _from_open_food_facts(barcode)
    except httpx.HTTPStatusError as error:
        providers["open_food_facts"] = (
            "not_found" if error.response.status_code == 404 else "unavailable"
        )
    except (httpx.HTTPError, ValueError):
        providers["open_food_facts"] = "unavailable"
    else:
        providers["open_food_facts"] = "found" if result else "not_found"
        if result:
            candidates.append(result)
            if _has_complete_nutrition(result):
                return BarcodeLookupResult(facts=result, providers=providers)

    if not candidates:
        return BarcodeLookupResult(facts=None, providers=providers)
    return BarcodeLookupResult(
        facts=max(
            candidates,
            key=lambda item: sum(
                item.get(key) is not None
                for key in ("calories", "protein_g", "carbs_g", "fat_g")
            ),
        ),
        providers=providers,
    )
