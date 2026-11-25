#!/usr/bin/with-contenv bashio
set -e

export CALORIE_DATABASE_URL="sqlite:////data/calorie_tracker.db"
export CALORIE_API_TOKEN="$(bashio::config 'api_token')"
export CALORIE_USDA_API_KEY="$(bashio::config 'usda_api_key')"
export CALORIE_TIMEZONE="$(bashio::config 'timezone')"
if [ "$CALORIE_API_TOKEN" = "null" ]; then
  export CALORIE_API_TOKEN=""
fi
if [ "$CALORIE_USDA_API_KEY" = "null" ]; then
  export CALORIE_USDA_API_KEY=""
fi

cd /app
alembic upgrade head
exec uvicorn calorie_tracker.main:app --host 0.0.0.0 --port 8099
