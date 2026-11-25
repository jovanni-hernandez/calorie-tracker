# HA Calorie Tracker

Mobile-first Home Assistant calorie tracking app.

## Components

- `addon/`: FastAPI service, SQLAlchemy models, SQLite storage, and Alembic migrations.
- `custom_components/calorie_tracker/`: Home Assistant panel, authenticated API proxy, and sensors.
- `frontend/`: React + strict TypeScript mobile UI. Barcode/OCR processing runs on the phone.

The companion integration proxies browser requests through Home Assistant authentication, then forwards the signed-in HA user ID to the add-on. An API token is optional; when configured, it must match in both the add-on and integration. Without a token, any caller that can reach the add-on's internal API can submit requests and spoof the forwarded HA user ID. Use tokenless mode only on a trusted local add-on network, and do not expose port 8099 to the host or internet.

## Home Assistant setup

1. Build the frontend bundle: `cd frontend && npm install && npm run build`.
2. Add `addon/` as a local add-on in Home Assistant, optionally set an API token, set your USDA data.gov API key if desired, and set the Home Assistant timezone; then install and start it.
3. Copy `custom_components/calorie_tracker/` into `custom_components/` in the Home Assistant configuration and restart Home Assistant.
4. Add the **Calorie Tracker** integration. Use `http://ha_calorie_tracker:8099` as the backend URL (adjust to the add-on's network hostname if needed). Enter the same API token if one was configured; otherwise leave it blank.
5. Open **Calorie Tracker** from the HA sidebar in the Companion app and allow camera access.

The local add-on manifest currently targets `amd64`, matching the installation hardware. The label photo stays on the phone; OCR runs in the Companion app's embedded web view. Tesseract may download its OCR worker/model assets, but does not upload the photo or recognized text. Barcode lookup sends only the UPC to the selected nutrition database.

## Development status
Run the backend and frontend independently while developing:

```sh
cd addon
uv sync --extra dev
uv run alembic upgrade head
uv run uvicorn calorie_tracker.main:app --reload
```

```sh
cd frontend
npm install
npm run dev
```

The backend tests run with `uv run pytest`; lint and strict Python typing use `uv run ruff check .` and `uv run mypy`. The frontend has `npm run typecheck` and `npm run build`.
