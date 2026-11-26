#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
ARTIFACT_DIR="${CALORIE_TEST_ARTIFACT_DIR:-/data/v2/cache/opencode}"
VENV_DIR="${CALORIE_TEST_VENV:-$ARTIFACT_DIR/calorie-tracker-selenium-venv}"
ENV_FILE="${CALORIE_ENV_FILE:-/data/.env_vars}"

if [[ ! -r "$ENV_FILE" ]]; then
  echo "Home Assistant environment file is not readable: $ENV_FILE" >&2
  exit 1
fi
set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
export HA_TOKEN="${HA_ACCESS_TOKEN:-${HA_TOKEN:-}}"
# The OpenCode add-on's HA_URL points at Supervisor's proxy, which returns 401
# for browser navigation. Use HA Core's internal network address for Selenium.
export HA_URL="${CALORIE_HA_URL:-http://homeassistant:8123}"
set +a

if [[ -z "${HA_URL:-}" || -z "${HA_TOKEN:-}" ]]; then
  echo "HA_URL and HA_ACCESS_TOKEN (or HA_TOKEN) are required." >&2
  exit 1
fi

mkdir -p "$ARTIFACT_DIR"
if [[ ! -x "$VENV_DIR/bin/python" ]]; then
  python3 -m venv "$VENV_DIR"
fi
if ! "$VENV_DIR/bin/python" -c 'import selenium' >/dev/null 2>&1; then
  "$VENV_DIR/bin/pip" install selenium >/dev/null
fi
exec "$VENV_DIR/bin/python" "$ROOT_DIR/hacks/validate-ui-real.py"
