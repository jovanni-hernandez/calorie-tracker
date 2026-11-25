"""Config flow for the Calorie Tracker integration."""

from __future__ import annotations

from typing import Any
from urllib.parse import urljoin

import aiohttp
import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import HomeAssistant
from homeassistant.helpers import selector
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .const import CONF_API_TOKEN, CONF_BACKEND_URL, DOMAIN

STEP_SCHEMA = vol.Schema(
    {
        vol.Required(CONF_BACKEND_URL, default="http://ha_calorie_tracker:8099"): str,
        vol.Required(CONF_API_TOKEN): selector.TextSelector(
            selector.TextSelectorConfig(type=selector.TextSelectorType.PASSWORD)
        ),
    }
)


async def validate_connection(
    hass: HomeAssistant, backend_url: str, api_token: str
) -> None:
    """Check that the backend and configured token are reachable."""
    session = async_get_clientsession(hass)
    url = urljoin(f"{backend_url.rstrip('/')}/", "api/v1/profiles")
    async with session.get(
        url,
        headers={"X-API-Token": api_token},
        timeout=aiohttp.ClientTimeout(total=10),
    ) as response:
        if response.status != 200:
            raise ValueError("cannot_connect")


class CalorieTrackerConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Configure the add-on connection."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> config_entries.ConfigFlowResult:
        """Collect the private add-on endpoint and API token."""
        errors: dict[str, str] = {}
        if user_input is not None:
            backend_url = str(user_input[CONF_BACKEND_URL]).rstrip("/")
            try:
                await validate_connection(
                    self.hass, backend_url, str(user_input[CONF_API_TOKEN])
                )
            except (aiohttp.ClientError, TimeoutError, ValueError):
                errors["base"] = "cannot_connect"
            else:
                await self.async_set_unique_id("calorie_tracker_backend")
                self._abort_if_unique_id_configured()
                return self.async_create_entry(
                    title="Calorie Tracker",
                    data={
                        CONF_BACKEND_URL: backend_url,
                        CONF_API_TOKEN: user_input[CONF_API_TOKEN],
                    },
                )
        return self.async_show_form(
            step_id="user", data_schema=STEP_SCHEMA, errors=errors
        )
