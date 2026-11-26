#!/usr/bin/env python3
"""Smoke-test the live Home Assistant Calorie Tracker panel in Chromium."""
from __future__ import annotations

import os
import tempfile
import time
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait


HA_URL = os.environ["HA_URL"].rstrip("/")
HA_TOKEN = os.environ["HA_TOKEN"]
ARTIFACT_DIR = Path(os.environ.get("CALORIE_TEST_ARTIFACT_DIR", "/data/v2/cache/opencode"))
ARTIFACT_DIR.mkdir(parents=True, exist_ok=True)


def main() -> None:
    token_data = {
        "access_token": HA_TOKEN,
        "token_type": "Bearer",
        "expires_in": 31536000,
        "refresh_token": None,
        "hassUrl": HA_URL,
        "clientId": HA_URL + "/",
        "expires": int(time.time() * 1000) + 365 * 24 * 60 * 60 * 1000,
    }
    import json
    token_literal = json.dumps(json.dumps(token_data, separators=(",", ":")))
    options = Options()
    options.binary_location = "/usr/bin/chromium"
    options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.set_capability("goog:loggingPrefs", {"browser": "ALL"})
    with tempfile.TemporaryDirectory(prefix="calorie-tracker-chrome-", dir=ARTIFACT_DIR) as profile:
        options.add_argument(f"--user-data-dir={profile}")
        driver = webdriver.Chrome(options=options)
        try:
            driver.set_window_size(390, 844)
            driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
                "source": f"window.localStorage.setItem('hassTokens', {token_literal});",
            })
            driver.get(f"{HA_URL}/calorie-tracker")
            find_panel = """
                    const findPanel = (root) => {
                      for (const node of root.querySelectorAll('*')) {
                        if (node.localName === 'ha-calorie-tracker-panel') return node;
                        if (node.shadowRoot) {
                          const nested = findPanel(node.shadowRoot);
                          if (nested) return nested;
                        }
                      }
                      return null;
                    };
                    return !!findPanel(document);
                    """
            has_panel_text = """
                    const findPanel = (root) => {
                      for (const node of root.querySelectorAll('*')) {
                        if (node.localName === 'ha-calorie-tracker-panel') return node;
                        if (node.shadowRoot) {
                          const nested = findPanel(node.shadowRoot);
                          if (nested) return nested;
                        }
                      }
                      return null;
                    };
                    const panel = findPanel(document);
                    return !!panel && panel.innerText.trim().length > 0;
                    """
            try:
                WebDriverWait(driver, 45).until(
                    lambda browser: browser.execute_script(find_panel)
                )
                WebDriverWait(driver, 45).until(
                    lambda browser: browser.execute_script(has_panel_text)
                )
            except Exception as exc:
                diagnostic = driver.execute_script(
                    """
                    return {
                      title: document.title,
                      url: location.pathname,
                      body: (document.body?.innerText || '').slice(0, 500),
                      tokenSeeded: Boolean(localStorage.getItem('hassTokens')),
                      customElementDefined: Boolean(customElements.get('ha-calorie-tracker-panel')),
                    };
                    """
                )
                errors = [entry["message"] for entry in driver.get_log("browser") if entry["level"] == "SEVERE"]
                raise RuntimeError(f"Panel did not render: {diagnostic}; browser errors: {errors}") from exc
            screenshot = ARTIFACT_DIR / "calorie-tracker-selenium-iphone.png"
            driver.save_screenshot(str(screenshot))
            errors = [
                entry["message"] for entry in driver.get_log("browser")
                if entry["level"] == "SEVERE"
            ]
            if errors:
                raise RuntimeError("Browser console errors: " + " | ".join(errors))
            text = driver.execute_script(
                """
                const findPanel = (root) => {
                  for (const node of root.querySelectorAll('*')) {
                    if (node.localName === 'ha-calorie-tracker-panel') return node;
                    if (node.shadowRoot) {
                      const nested = findPanel(node.shadowRoot);
                      if (nested) return nested;
                    }
                  }
                  return null;
                };
                return findPanel(document).innerText;
                """
            )
            print(f"PASS: live panel rendered at 390x844; screenshot={screenshot}")
            print("Visible panel text:", " ".join(text.split())[:240])
        finally:
            driver.quit()


if __name__ == "__main__":
    main()
