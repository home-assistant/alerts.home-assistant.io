import {
  LitElement,
  customElement,
  html,
  property,
  CSSResult,
  css
} from "lit-element";
import { Alert, fetchAlerts } from "../data/alert";
import "./kb-overview";
import "./kb-detail";

@customElement("kb-main")
class KbMain extends LitElement {
  @property() public item = "";
  @property() private alerts?: Alert[];

  protected render() {
    return this.item
      ? html`
          <kb-detail
            .alert=${this.alerts
              ? this.alerts.find(item => item.filename === this.item)
              : null}
          ></kb-detail>
        `
      : html`
          <kb-overview .alerts=${this.alerts}></kb-overview>
        `;
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    ((window as any).dataProm || fetchAlerts()).then((alerts: Alert[]) => {
      alerts.forEach(item => {
        item.created = new Date(item.created);
        if (item.updated) {
          item.updated = new Date(item.updated);
        }
      });
      this.alerts = alerts.sort(
        (a1, a2) =>
          // Compare reverse so newest is on top.
          (a2.updated || a2.created).getTime() -
          (a1.updated || a1.created).getTime()
      );
    });
    this.item = location.hash.substr(1);
    window.addEventListener("hashchange", () => {
      this.item = location.hash.substr(1);
    });
  }

  static get styles(): CSSResult {
    return css`
      :host {
        --primary-color: #03a9f4;
        --dark-primary-color: #0288d1;

        --primary-text-color: #212121;

        --label-integration-background: #e91e63;
        --label-package-background: #009688;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-main": KbMain;
  }
}
