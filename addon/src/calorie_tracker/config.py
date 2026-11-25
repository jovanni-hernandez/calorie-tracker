"""Application settings."""

from functools import lru_cache
from pathlib import Path

from pydantic import SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Environment-backed settings for the add-on service."""

    model_config = SettingsConfigDict(env_prefix="CALORIE_", extra="ignore")

    database_url: str = "sqlite:////data/calorie_tracker.db"
    api_token: SecretStr = SecretStr("development-only-change-me")
    usda_api_key: SecretStr = SecretStr("")
    timezone: str = "UTC"

    @classmethod
    def from_environment(cls) -> "Settings":
        """Load settings, ensuring the persistent database directory exists."""
        settings = cls()
        if settings.database_url.startswith("sqlite:///"):
            database_path = settings.database_url.removeprefix("sqlite:///")
            if database_path.startswith("/"):
                Path(database_path).parent.mkdir(parents=True, exist_ok=True)
        return settings


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    """Return cached settings."""
    return Settings.from_environment()
