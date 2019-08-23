import {
  customElement,
  html,
  CSSResult,
  css,
  property,
  LitElement
} from "lit-element";
import memoizeOne from "memoize-one";
import { Alert, fetchAlerts } from "../data/alert";

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

  protected render() {
    return html`
      <a href="https://alerts.home-assistant.io" target="_blank">
        ⚠️ There is an active alert for this integration.
      </a>
    `;
  }

  protected firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    fetchAlerts().then(alerts => {
      this._alerts = alerts;
    });
  }

  protected updated(changedProps) {
    super.updated(changedProps);
    this.visible =
      this._alerts && this.integration
        ? this._hasAlerts(this._alerts, this.integration)
        : false;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        visibility: hidden;
        font-weight: 500;
      }

      :host([visible]) {
        visibility: initial;
      }

      a {
        color: var(--kb-link-color, #03a9f4);
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-alert-link": KbAlertLink;
  }
}
