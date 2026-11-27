"""API authorization, profile isolation, and barcode-cache tests."""

from collections.abc import Generator
from datetime import UTC, datetime

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy.pool import StaticPool

from calorie_tracker.database import Base, get_session
from calorie_tracker.main import app
from calorie_tracker.models import BarcodeCache
from calorie_tracker.nutrition import BarcodeLookupResult
from calorie_tracker.service import lookup_or_cache

TEST_ENGINE = create_engine(
    "sqlite://",
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestSession = sessionmaker(bind=TEST_ENGINE, expire_on_commit=False)


@pytest.fixture(autouse=True)
def database() -> Generator[None, None, None]:
    """Create and clean the isolated schema for every test."""
    Base.metadata.create_all(TEST_ENGINE)
    yield
    Base.metadata.drop_all(TEST_ENGINE)


@pytest.fixture
def client() -> Generator[TestClient, None, None]:
    """Create an isolated API client and database for each test."""

    def override_session() -> Generator[Session, None, None]:
        with TestSession() as session:
            yield session

    app.dependency_overrides[get_session] = override_session
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()


def auth(user_id: str = "user-1") -> dict[str, str]:
    """Return the trusted integration headers used by test requests."""
    return {
        "X-API-Token": "unit-test-token",
        "X-HA-User-ID": user_id,
        "X-HA-User-Name": user_id,
    }


def test_authenticated_user_scoped_meals(client: TestClient) -> None:
    """A user's meal list never returns another profile's entries."""
    product_response = client.post(
        "/api/v1/products",
        headers=auth(),
        json={
            "upc": "012345678905",
            "name": "Test bar",
            "source": "label",
            "serving_size": "1 bar",
            "serving_weight_g": 40,
            "calories": 180,
            "protein_g": 8,
            "carbs_g": 24,
            "fat_g": 6,
        },
    )
    assert product_response.status_code == 201
    product_id = product_response.json()["id"]
    meal_response = client.post(
        "/api/v1/meals",
        headers=auth("user-1"),
        json={
            "product_id": product_id,
            "consumed_at": datetime.now(UTC).isoformat(),
            "amount_mode": "servings",
            "amount": 1,
        },
    )
    assert meal_response.status_code == 201
    date = datetime.now(UTC).date().isoformat()
    other_user_meals = client.get(f"/api/v1/meals?date={date}", headers=auth("user-2"))
    assert other_user_meals.status_code == 200
    assert other_user_meals.json() == []


def test_missing_api_token_is_rejected_when_configured(client: TestClient) -> None:
    """A configured token remains mandatory on authenticated API routes."""
    response = client.get(
        "/api/v1/me",
        headers={"X-HA-User-ID": "user-1"},
    )
    assert response.status_code == 401


def test_tokenless_mode_accepts_local_requests(
    client: TestClient, monkeypatch: pytest.MonkeyPatch
) -> None:
    """With token auth disabled, local callers can use API routes without a token."""
    from calorie_tracker.config import get_settings

    monkeypatch.setenv("CALORIE_API_TOKEN", "")
    get_settings.cache_clear()
    try:
        response = client.get(
            "/api/v1/me",
            headers={"X-HA-User-ID": "tokenless-user"},
        )
        sensor_response = client.get("/api/v1/profiles")
        assert response.status_code == 200
        assert sensor_response.status_code == 200
    finally:
        get_settings.cache_clear()


def test_barcode_cache_avoids_repeated_provider_calls(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    """Repeated UPC scans reuse a stored mapping instead of calling providers."""
    from calorie_tracker import service

    calls = 0

    def fake_lookup(barcode: str) -> BarcodeLookupResult:
        nonlocal calls
        calls += 1
        return BarcodeLookupResult(
            facts={
                "name": "Cached snack",
                "brand": "Example",
                "source": "usda",
                "serving_size": "1 pack",
                "serving_weight_g": 30,
                "calories": 120,
                "protein_g": 3,
                "carbs_g": 20,
                "fat_g": 4,
            },
            providers={"usda": "found", "open_food_facts": "not_checked"},
        )

    monkeypatch.setattr(service, "lookup_barcode", fake_lookup)
    with TestSession() as session:
        first = lookup_or_cache(session, "012345678905")
        second = lookup_or_cache(session, "012345678905")
        assert first.product is not None and second.product is not None
        assert first.product.id == second.product.id
        assert second.providers == {"usda": "found", "open_food_facts": "not_checked"}
        assert calls == 1


def test_not_found_barcode_is_cached(monkeypatch: pytest.MonkeyPatch) -> None:
    """A UPC with no provider match is also cached to prevent repeat requests."""
    from calorie_tracker import service

    calls = 0

    def fake_lookup(_barcode: str) -> BarcodeLookupResult:
        nonlocal calls
        calls += 1
        return BarcodeLookupResult(
            facts=None,
            providers={"usda": "not_configured", "open_food_facts": "not_found"},
        )

    monkeypatch.setattr(service, "lookup_barcode", fake_lookup)
    with TestSession() as session:
        first = lookup_or_cache(session, "000000000000")
        second = lookup_or_cache(session, "000000000000")
        assert first.product is None and second.product is None
        assert second.providers == {"usda": "not_configured", "open_food_facts": "not_found"}
        assert calls == 1
        assert session.query(BarcodeCache).count() == 1


def test_lookup_api_returns_provider_diagnostics(
    client: TestClient, monkeypatch: pytest.MonkeyPatch
) -> None:
    """The frontend can explain which nutrition providers did not find a UPC."""
    from calorie_tracker import service

    monkeypatch.setattr(
        service,
        "lookup_barcode",
        lambda _barcode: BarcodeLookupResult(
            facts=None,
            providers={"usda": "not_configured", "open_food_facts": "not_found"},
        ),
    )
    response = client.get(
        "/api/v1/products/lookup/details?upc=051000281081",
        headers=auth(),
    )
    assert response.status_code == 200
    assert response.json() == {
        "product": None,
        "providers": {"usda": "not_configured", "open_food_facts": "not_found"},
    }


def test_legacy_lookup_response_remains_compatible(
    client: TestClient, monkeypatch: pytest.MonkeyPatch
) -> None:
    """Existing frontends can continue consuming the original product-or-null shape."""
    from calorie_tracker import service

    monkeypatch.setattr(
        service,
        "lookup_barcode",
        lambda _barcode: BarcodeLookupResult(
            facts=None,
            providers={"usda": "not_configured", "open_food_facts": "not_found"},
        ),
    )
    response = client.get(
        "/api/v1/products/lookup?upc=051000281081",
        headers=auth(),
    )
    assert response.status_code == 200
    assert response.json() is None
