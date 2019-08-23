import { customElement, html, property, LitElement } from "lit-element";
import memoizeOne from "memoize-one";
import { Alert, fetchAlerts } from "../data/alert";

// Only fetch it once per page.
let alertsProm: Promise<Alert[]> | undefined;

@customElement("kb-alert-link")
class KbAlertLink extends LitElement {
  @property() public integration?: string;
  @property({ type: Boolean, reflect: true }) visible = false;
  @property() _alerts?: Alert[];

  private _hasAlerts = memoizeOne((alerts: Alert[], integration: string) =>
    alerts.some(
      alert =>
        alert.integrations &&
        alert.integrations.some(spec => spec.package === integration)
    )
  );

  public createRenderRoot() {
    return this;
  }

  protected render() {
    return this._alerts &&
      this.integration &&
      this._hasAlerts(this._alerts, this.integration)
      ? html`
          <a href="https://alerts.home-assistant.io" target="_blank">
            ⚠️ There is an active alert for this integration.
          </a>
        `
      : html``;
  }

  protected firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (!alertsProm) {
      alertsProm = fetchAlerts();
    }
    alertsProm.then(alerts => {
      this._alerts = alerts;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-alert-link": KbAlertLink;
  }
}
