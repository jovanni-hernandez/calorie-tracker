"""Calorie Tracker Home Assistant integration."""

from __future__ import annotations

from pathlib import Path
from typing import Any

import aiohttp
from aiohttp import web
from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import HomeAssistantView, StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from yarl import URL

from .const import CONF_API_TOKEN, CONF_BACKEND_URL, DOMAIN, PLATFORMS

PANEL_PATH = "calorie-tracker"
ASSET_PATH = "/calorie-tracker-assets"


async def async_setup(hass: HomeAssistant, config: dict[str, Any]) -> bool:
    """Register the persistent authenticated API view and static panel assets."""
    del config
    hass.data.setdefault(DOMAIN, {})
    hass.http.register_view(CalorieTrackerView(hass))

    frontend_path = Path(__file__).parent / "www"
    panel_file = frontend_path / "calorie-tracker-panel.js"
    if panel_file.exists():
        await hass.http.async_register_static_paths(
            [
                StaticPathConfig(
                    url_path=ASSET_PATH,
                    path=str(frontend_path),
                    cache_headers=False,
                )
            ]
        )
    return True


class CalorieTrackerView(HomeAssistantView):
    """Authenticated API proxy scoped to the signed-in Home Assistant user."""

    url = "/api/calorie_tracker/{path:.*}"
    name = "api:calorie_tracker"
    requires_auth = True

    def __init__(self, hass: HomeAssistant) -> None:
        """Store Home Assistant for per-request integration configuration."""
        self._hass = hass
        self._session = async_get_clientsession(hass)

    async def _proxy(self, request: web.Request) -> web.Response:
        """Forward authenticated requests to the private add-on API."""
        connection = self._hass.data[DOMAIN].get("connection")
        if not connection:
            return web.json_response(
                {"detail": "Calorie Tracker integration is not configured"}, status=503
            )
        user = request.get("hass_user")
        if user is None:
            return web.json_response(
                {"detail": "Home Assistant user required"}, status=401
            )
        path = request.match_info["path"]
        if path.startswith("api/v1/profiles"):
            return web.json_response({"detail": "Not found"}, status=404)
        backend_url = str(connection[CONF_BACKEND_URL]).rstrip("/")
        target = URL(f"{backend_url}/{path}").with_query(request.query_string)
        token = str(connection.get(CONF_API_TOKEN, ""))
        headers = {
            "X-HA-User-ID": user.id,
            "X-HA-User-Name": str(user.name or "Home Assistant user"),
            "X-HA-Timezone": self._hass.config.time_zone,
            "Content-Type": request.headers.get("Content-Type", "application/json"),
        }
        if token:
            headers["X-API-Token"] = token
        body = await request.read()
        try:
            async with self._session.request(
                request.method,
                target,
                headers=headers,
                data=body if body else None,
                timeout=aiohttp.ClientTimeout(total=20),
            ) as response:
                return web.Response(
                    body=await response.read(),
                    status=response.status,
                    content_type=response.headers.get(
                        "Content-Type", "application/json"
                    ),
                )
        except aiohttp.ClientError:
            return web.json_response(
                {"detail": "Calorie Tracker service unavailable"}, status=502
            )

    async def get(self, request: web.Request, path: str) -> web.Response:
        """Proxy a GET request."""
        return await self._proxy(request)

    async def post(self, request: web.Request, path: str) -> web.Response:
        """Proxy a POST request."""
        return await self._proxy(request)

    async def put(self, request: web.Request, path: str) -> web.Response:
        """Proxy a PUT request."""
        return await self._proxy(request)

    async def patch(self, request: web.Request, path: str) -> web.Response:
        """Proxy a PATCH request."""
        return await self._proxy(request)

    async def delete(self, request: web.Request, path: str) -> web.Response:
        """Proxy a DELETE request."""
        return await self._proxy(request)


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry[Any]) -> bool:
    """Set up the phone panel and daily-total sensors."""
    hass.data[DOMAIN]["connection"] = {
        CONF_BACKEND_URL: entry.data[CONF_BACKEND_URL],
        CONF_API_TOKEN: entry.data[CONF_API_TOKEN],
    }
    frontend_path = Path(__file__).parent / "www"
    panel_file = frontend_path / "calorie-tracker-panel.js"
    if panel_file.exists() and not frontend.async_panel_exists(hass, PANEL_PATH):
        await panel_custom.async_register_panel(
            hass,
            frontend_url_path=PANEL_PATH,
            webcomponent_name="ha-calorie-tracker-panel",
            sidebar_title="Calorie Tracker",
            sidebar_icon="mdi:food-apple",
            module_url=f"{ASSET_PATH}/calorie-tracker-panel.js",
            require_admin=False,
            handle_safe_area=True,
        )
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry[Any]) -> bool:
    """Unload sensors and clear the active connection secret."""
    unloaded = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if unloaded:
        hass.data[DOMAIN].pop("connection", None)
        frontend.async_remove_panel(hass, PANEL_PATH, warn_if_unknown=False)
    return unloaded
