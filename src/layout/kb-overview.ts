import {
  customElement,
  LitElement,
  html,
  property,
  css,
  CSSResult
} from "lit-element";
import { Alert } from "../data/alert";
import "./kb-layout";
import "../components/ha-card";

@customElement("kb-overview")
class KbOverview extends LitElement {
  @property() public alerts?: Alert[];

  protected render() {
    return html`
      <kb-layout>
        <div slot="header">
          <span class="integration">Integration</span><br />
          <span class="package">Python package</span>
        </div>
        ${this.alerts
          ? html`
              ${this.alerts.map(
                kb => html`
                  <a href=${`#${kb.filename}`}>
                    <ha-card .header=${kb.title}>
                      <div class="card-content">
                        <span class="date">
                          ${(kb.updated || kb.created).toLocaleDateString()}
                        </span>
                        ${kb.integrations
                          ? kb.integrations.map(
                              int =>
                                html`
                                  <span class="integration"
                                    >${int.package.toUpperCase()}</span
                                  >
                                `
                            )
                          : ""}
                        ${kb.packages
                          ? kb.packages.map(
                              pkg =>
                                html`
                                  <span class="package"
                                    >${pkg.package.toUpperCase()}</span
                                  >
                                `
                            )
                          : ""}
                      </div>
                    </ha-card>
                  </a>
                `
              )}
            `
          : "Loading…"}
      </kb-layout>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        margin: 12px auto;
        max-width: 800px;
      }

      ha-card {
        margin: 8px 0;
      }

      a {
        color: var(--primary-text-color);
        text-decoration: none;
      }

      .date {
        display: inline-block;
        margin: 0 10px 0 0;
        font-size: 0.8em;
      }

      .integration,
      .package {
        text-transform: uppercase;
        border-radius: 5px;
        padding: 3px;
        font-size: 12px;
        font-weight: 500;
        margin: 0 2px;
      }

      .integration {
        background-color: var(--label-integration-background);
        color: white;
      }

      .package {
        background-color: var(--label-package-background);
        color: white;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-overview": KbOverview;
  }
}
