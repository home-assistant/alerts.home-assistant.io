import {
  customElement,
  LitElement,
  html,
  property,
  css,
  CSSResult
} from "lit-element";
import { KnowledgeItem } from "../data/knowledge";

@customElement("kb-overview")
class KbOverview extends LitElement {
  @property() public data?: KnowledgeItem[];

  protected render() {
    return html`
      <div class="row-spacer"></div>
      <h1>Home Assistant Alerts</h1>
      ${this.data
        ? html`
            <ul>
              ${this.data.map(
                kb => html`
                  <li>
                    <a class="title" href=${`#${kb.filename}`}>${kb.title}</a>
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
                  </li>
                `
              )}
            </ul>
          `
        : "Loading…"}
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        margin: 12px auto;
        max-width: 800px;
      }

      .row-spacer {
        height: 56px;
      }

      li {
        line-height: 3em;
      }

      a.title {
        display: inline-block;
        color: black;
        margin-right: 10px;
      }

      li span {
        text-transform: uppercase;
        border-radius: 10px;
        padding: 3px;
        font-size: 12px;
        font-weight: 500;
      }

      .integration {
        background-color: #e91e63;
        color: white;
      }

      .package {
        background-color: #009688;
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
