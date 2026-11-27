import { createRoot, Root } from "react-dom/client";
import { CalorieTrackerApp, HomeAssistant } from "./tracker";
import "./style.css";

const stylePath = "/calorie-tracker-assets/ha-calorie-tracker-frontend.css";

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
    const root = this.getRootNode();
    const styleTarget = root.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? root as ShadowRoot : document.head;
    if (!styleTarget.querySelector('link[data-calorie-tracker-styles]')) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = stylePath;
      stylesheet.dataset.calorieTrackerStyles = "true";
      styleTarget.append(stylesheet);
    }
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
