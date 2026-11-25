"""Daily totals sensors for every configured tracker profile."""

from __future__ import annotations

import logging
from dataclasses import dataclass
from datetime import timedelta
from typing import Any, TypedDict

import aiohttp
from homeassistant.components.sensor import SensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import UnitOfEnergy, UnitOfMass
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.entity import DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import (
    CoordinatorEntity,
    DataUpdateCoordinator,
)
from homeassistant.util import dt as dt_util

from .const import CONF_API_TOKEN, CONF_BACKEND_URL, DOMAIN, UPDATE_INTERVAL_SECONDS

METRICS: dict[str, tuple[str, str | None, str]] = {
    "calories": ("Calories", UnitOfEnergy.KILO_CALORIE, "calories"),
    "protein_g": ("Protein", UnitOfMass.GRAMS, "protein_g"),
    "carbs_g": ("Carbohydrates", UnitOfMass.GRAMS, "carbs_g"),
    "fat_g": ("Fat", UnitOfMass.GRAMS, "fat_g"),
}
_LOGGER = logging.getLogger(__name__)


class CoordinatorData(TypedDict):
    """All available profiles and their current-day totals."""

    profiles: list[dict[str, Any]]
    totals: dict[str, dict[str, float]]


@dataclass(frozen=True)
class ProfileInfo:
    """Minimal profile data needed by the sensor platform."""

    profile_id: int
    user_id: str
    name: str


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry[Any],
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Create total sensors for all profiles and refresh periodically."""
    session = async_get_clientsession(hass)
    backend_url = str(entry.data[CONF_BACKEND_URL]).rstrip("/")
    headers = {"X-API-Token": str(entry.data[CONF_API_TOKEN])}

    async def async_update_data() -> CoordinatorData:
        async with session.get(
            f"{backend_url}/api/v1/profiles",
            headers=headers,
            timeout=aiohttp.ClientTimeout(total=15),
        ) as response:
            response.raise_for_status()
            raw_profiles = await response.json()
        today = dt_util.now().date().isoformat()
        results: dict[str, dict[str, float]] = {}
        for profile in raw_profiles:
            profile_id = int(profile["id"])
            async with session.get(
                f"{backend_url}/api/v1/profiles/{profile_id}/totals",
                params={"date": today},
                headers=headers,
                timeout=aiohttp.ClientTimeout(total=15),
            ) as response:
                response.raise_for_status()
                results[str(profile_id)] = await response.json()
        return {"profiles": raw_profiles, "totals": results}

    coordinator: DataUpdateCoordinator[CoordinatorData] = DataUpdateCoordinator(
        hass,
        logger=_LOGGER,
        name="calorie_tracker_totals",
        update_method=async_update_data,
        update_interval=timedelta(seconds=UPDATE_INTERVAL_SECONDS),
    )
    await coordinator.async_config_entry_first_refresh()
    added_profile_ids: set[int] = set()

    def add_new_profiles() -> None:
        """Add sensors when a user first opens the tracker and creates a profile."""
        new_profiles: list[ProfileInfo] = []
        for raw in coordinator.data["profiles"]:
            profile_id = int(raw["id"])
            if profile_id in added_profile_ids:
                continue
            added_profile_ids.add(profile_id)
            new_profiles.append(
                ProfileInfo(
                    profile_id, str(raw["ha_user_id"]), str(raw["display_name"])
                )
            )
        if new_profiles:
            async_add_entities(
                CalorieTotalSensor(coordinator, entry, profile, metric, metric_data)
                for profile in new_profiles
                for metric, metric_data in METRICS.items()
            )

    add_new_profiles()
    entry.async_on_unload(coordinator.async_add_listener(add_new_profiles))


class CalorieTotalSensor(
    CoordinatorEntity[DataUpdateCoordinator[CoordinatorData]], SensorEntity
):
    """A current local-day nutrition total for one profile."""

    _attr_has_entity_name = True

    def __init__(
        self,
        coordinator: DataUpdateCoordinator[CoordinatorData],
        entry: ConfigEntry[Any],
        profile: ProfileInfo,
        metric: str,
        metric_data: tuple[str, str | None, str],
    ) -> None:
        """Initialize one profile/metric entity."""
        super().__init__(coordinator)
        label, unit, value_key = metric_data
        self._profile_id = str(profile.profile_id)
        self._value_key = value_key
        self._attr_name = label
        self._attr_unique_id = f"{entry.entry_id}_{profile.profile_id}_{metric}"
        self._attr_native_unit_of_measurement = unit
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, f"profile_{profile.profile_id}")},
            name=f"Calorie Tracker - {profile.name}",
            manufacturer="Home Assistant",
            model="Nutrition profile",
        )

    @property
    def native_value(self) -> float:
        """Return today's value for this metric."""
        values = self.coordinator.data["totals"].get(self._profile_id, {})
        return float(values.get(self._value_key, 0))
