import { createRoot, Root } from "react-dom/client";
import { CalorieTrackerApp, HomeAssistant } from "./tracker";
import "./style.css";

const stylePath = "/calorie-tracker-assets/ha-calorie-tracker-frontend.css?v=0.1.4";

class CalorieTrackerPanel extends HTMLElement {
  private root?: Root;
  private appRoot?: HTMLElement;
  private currentHass?: HomeAssistant;

  set hassObject(value: HomeAssistant) {
    this.currentHass = value;
    this.renderApp();
  }

  set hass(value: HomeAssistant) {
    this.hassObject = value;
  }

  connectedCallback(): void {
    const shadow = this.shadowRoot ?? this.attachShadow({ mode: "open" });
    if (!shadow.querySelector("link[data-calorie-tracker-styles]")) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = stylePath;
      stylesheet.dataset.calorieTrackerStyles = "true";
      shadow.append(stylesheet);
    }
    this.appRoot = shadow.querySelector<HTMLElement>("[data-calorie-tracker-root]") ?? undefined;
    if (!this.appRoot) {
      this.appRoot = document.createElement("div");
      this.appRoot.dataset.calorieTrackerRoot = "true";
      shadow.append(this.appRoot);
    }
    this.renderApp();
  }

  private renderApp(): void {
    if (!this.currentHass || !this.isConnected || !this.appRoot) return;
    this.root ??= createRoot(this.appRoot);
    this.root.render(<CalorieTrackerApp hass={this.currentHass} />);
  }
}

if (!customElements.get("ha-calorie-tracker-panel")) {
  customElements.define("ha-calorie-tracker-panel", CalorieTrackerPanel);
}
