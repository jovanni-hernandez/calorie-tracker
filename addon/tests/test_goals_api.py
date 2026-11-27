"""Goal planning, profile isolation, and check-in API tests."""

from collections.abc import Generator
from datetime import date

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy.pool import StaticPool

from calorie_tracker.database import Base, get_session
from calorie_tracker.main import app

TEST_ENGINE = create_engine(
    "sqlite://",
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestSession = sessionmaker(bind=TEST_ENGINE, expire_on_commit=False)


@pytest.fixture(autouse=True)
def database() -> Generator[None, None, None]:
    """Create and clean an isolated schema for every test."""
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


def weight_goal(
    *,
    method: str = "calculated",
    current_weight_kg: float = 90,
    target_weight_kg: float = 80,
    **overrides: object,
) -> dict[str, object]:
    """Build a valid weight goal request."""
    data: dict[str, object] = {
        "current_weight_kg": current_weight_kg,
        "target_weight_kg": target_weight_kg,
        "pace_kg_per_week": 0.5,
        "method": method,
        "manual_calorie_target_kcal": 1750 if method == "manual" else None,
        "age_years": 40 if method == "calculated" else None,
        "height_cm": 175 if method == "calculated" else None,
        "sex_parameter": "male" if method == "calculated" else None,
        "activity_level": 1.6 if method == "calculated" else None,
        "adult_confirmed": True,
        "not_pregnant_or_breastfeeding": True,
    }
    data.update(overrides)
    return data


def test_calculated_preview_does_not_save_goal_or_change_targets(client: TestClient) -> None:
    """A calculation is a read-only preview and uses the dynamic model."""
    response = client.post(
        "/api/v1/goals/preview",
        headers=auth(),
        json=weight_goal(),
    )

    assert response.status_code == 200
    assert response.json()["calorie_target_kcal"] == 2160
    assert response.json()["duration_days"] == 140
    assert response.json()["source"].startswith("Hall KD et al.")
    assert client.get("/api/v1/goals/current", headers=auth()).json()["goal"] is None
    assert client.get("/api/v1/me", headers=auth()).json()["calorie_target"] == 2000


def test_manual_preview_preserves_user_selected_target(client: TestClient) -> None:
    """Manual calorie entry remains a non-model path."""
    response = client.post(
        "/api/v1/goals/preview",
        headers=auth(),
        json=weight_goal(method="manual"),
    )

    assert response.status_code == 200
    assert response.json()["method"] == "manual"
    assert response.json()["calorie_target_kcal"] == 1750
    assert response.json()["projected_weight_kg"] is None
    assert "not a model prediction" in response.json()["model_note"]
    assert response.json()["source"] is None


def test_only_one_active_goal_per_profile(client: TestClient) -> None:
    """A profile must cancel its current goal before starting another."""
    first = client.post("/api/v1/goals", headers=auth(), json=weight_goal())
    duplicate = client.post("/api/v1/goals", headers=auth(), json=weight_goal(method="manual"))
    other_user = client.post(
        "/api/v1/goals",
        headers=auth("user-2"),
        json=weight_goal(method="manual"),
    )

    assert first.status_code == 201
    assert duplicate.status_code == 409
    assert other_user.status_code == 201


def test_checkins_upsert_and_recalculate_for_owner(client: TestClient) -> None:
    """A new check-in updates only its profile and refreshes the plan proposal."""
    created = client.post("/api/v1/goals", headers=auth(), json=weight_goal())
    assert created.status_code == 201
    measured_on = date.today().isoformat()
    endpoint = "/api/v1/goals/current/check-ins"
    first = client.put(
        endpoint,
        headers=auth(),
        json={"measured_on": measured_on, "weight_kg": 89},
    )
    corrected = client.put(
        endpoint,
        headers=auth(),
        json={"measured_on": measured_on, "weight_kg": 88.8},
    )
    current = client.get("/api/v1/goals/current", headers=auth()).json()
    another_user = client.get("/api/v1/goals/current", headers=auth("user-2")).json()

    assert first.status_code == 200
    assert corrected.status_code == 200
    assert corrected.json()["weight_kg"] == 88.8
    assert len(current["check_ins"]) == 1
    assert current["latest_plan"]["calorie_target_kcal"] is not None
    assert another_user["goal"] is None
    assert another_user["check_ins"] == []


def test_goal_can_be_cancelled_before_replacement(client: TestClient) -> None:
    """Cancellation preserves history and frees the single active-goal slot."""
    first = client.post("/api/v1/goals", headers=auth(), json=weight_goal())
    cancelled = client.delete("/api/v1/goals/current", headers=auth())
    replacement = client.post("/api/v1/goals", headers=auth(), json=weight_goal(method="manual"))

    assert first.status_code == 201
    assert cancelled.status_code == 200
    assert cancelled.json()["status"] == "cancelled"
    assert replacement.status_code == 201


def test_goal_can_be_completed_before_replacement(client: TestClient) -> None:
    """Completion releases the active-goal slot without deleting the record."""
    first = client.post("/api/v1/goals", headers=auth(), json=weight_goal())
    completed = client.post("/api/v1/goals/current/complete", headers=auth())
    replacement = client.post("/api/v1/goals", headers=auth(), json=weight_goal(method="manual"))

    assert first.status_code == 201
    assert completed.status_code == 200
    assert completed.json()["status"] == "completed"
    assert replacement.status_code == 201


def test_pregnancy_or_breastfeeding_is_outside_v1_weight_loss_scope(
    client: TestClient,
) -> None:
    """A self-reported ineligible state cannot create even a manual weight-loss goal."""
    response = client.post(
        "/api/v1/goals",
        headers=auth(),
        json=weight_goal(method="manual", not_pregnant_or_breastfeeding=False),
    )

    assert response.status_code == 422
    assert "not available during pregnancy or breastfeeding" in response.json()["detail"][0]["msg"]


def test_model_rejects_underweight_target(client: TestClient) -> None:
    """The calculated path follows the reference planner's BMI scope warning."""
    response = client.post(
        "/api/v1/goals/preview",
        headers=auth(),
        json=weight_goal(current_weight_kg=60, target_weight_kg=55),
    )

    assert response.status_code == 422
    assert "below BMI 18.5" in response.json()["detail"]
