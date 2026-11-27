#!/usr/bin/env python3
"""Smoke-test the live Home Assistant Calorie Tracker panel in Chromium."""
from __future__ import annotations

import os
import tempfile
import time
from pathlib import Path
from urllib.parse import urlparse

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
    options.add_argument("--use-fake-device-for-media-stream")
    options.add_argument("--use-fake-ui-for-media-stream")
    parsed_ha_url = urlparse(HA_URL)
    if parsed_ha_url.scheme == "http":
        options.add_argument(
            f"--unsafely-treat-insecure-origin-as-secure={parsed_ha_url.scheme}://{parsed_ha_url.netloc}"
        )
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
            visual_check = driver.execute_script(
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
                const panel = findPanel(document);
                const app = panel?.querySelector('.tracker');
                const summary = panel?.querySelector('.summary-card');
                if (!app || !summary) return { ready: false };
                const root = panel.getRootNode();
                const stylesheet = root.querySelector('link[data-calorie-tracker-styles]');
                return {
                  ready: true,
                  background: getComputedStyle(app).backgroundColor,
                  cardRadius: getComputedStyle(summary).borderRadius,
                  stylesheet: stylesheet?.href || null,
                  stylesheetLoaded: stylesheet?.sheet !== null,
                  rootKind: root.nodeType,
                  trackerColor: getComputedStyle(app).color,
                  viewport: window.innerWidth,
                  documentWidth: document.documentElement.scrollWidth,
                };
                """
            )
            if not visual_check.get("ready") or visual_check.get("background") == "rgba(0, 0, 0, 0)":
                raise RuntimeError(f"Panel stylesheet did not apply: {visual_check}")
            if visual_check["documentWidth"] > visual_check["viewport"] + 2:
                raise RuntimeError(f"Mobile layout overflows horizontally: {visual_check}")

            for button_text in ("Scan a barcode", "Add from nutrition label"):
                opened = driver.execute_script(
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
                    const panel = findPanel(document);
                    const button = Array.from(panel.querySelectorAll('button'))
                      .find((candidate) => candidate.innerText.trim() === arguments[0]);
                    button?.click();
                    return Boolean(button);
                    """,
                    button_text,
                )
                if not opened:
                    raise RuntimeError(f"Could not open camera flow: {button_text}")
                camera_state = WebDriverWait(driver, 15).until(
                    lambda browser: browser.execute_script(
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
                        const modal = findPanel(document)?.querySelector('.camera-modal');
                        if (!modal) return false;
                        const video = modal.querySelector('video');
                        const error = modal.querySelector('[role="alert"]')?.innerText || '';
                        return video?.readyState >= 2 && video.videoWidth > 0
                          ? { ready: true }
                          : error ? { error } : false;
                        """
                    )
                )
                if not camera_state.get("ready"):
                    raise RuntimeError(f"Camera flow failed for {button_text}: {camera_state}")
                driver.execute_script(
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
                    findPanel(document)?.querySelector('.camera-modal .close-button')?.click();
                    """
                )
                WebDriverWait(driver, 5).until(
                    lambda browser: browser.execute_script(
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
                        return !findPanel(document)?.querySelector('.camera-modal');
                        """
                    )
                )
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
