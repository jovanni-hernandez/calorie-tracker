import { createRoot, Root } from "react-dom/client";
import { CalorieTrackerApp, HomeAssistant } from "./tracker";
import "./style.css";

const stylePath = "/calorie-tracker-assets/ha-calorie-tracker-frontend.css";
if (!document.querySelector(`link[href="${stylePath}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = stylePath;
  document.head.append(stylesheet);
}

class CalorieTrackerPanel extends HTMLElement {
  private root?: Root;
  private currentHass?: HomeAssistant;

  set hassObject(value: HomeAssistant) {
    this.currentHass = value;
    this.renderApp();
  }

  set hass(value: HomeAssistant) {
    this.hassObject = value;
  }

  connectedCallback(): void {
    this.renderApp();
  }

  private renderApp(): void {
    if (!this.currentHass || !this.isConnected) return;
    this.root ??= createRoot(this);
    this.root.render(<CalorieTrackerApp hass={this.currentHass} />);
  }
}

if (!customElements.get("ha-calorie-tracker-panel")) {
  customElements.define("ha-calorie-tracker-panel", CalorieTrackerPanel);
}
