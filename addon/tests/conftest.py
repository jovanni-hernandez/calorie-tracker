"""Test configuration that keeps database state inside the test process."""

import os

os.environ.setdefault("CALORIE_DATABASE_URL", "sqlite://")
os.environ.setdefault("CALORIE_API_TOKEN", "unit-test-token")
