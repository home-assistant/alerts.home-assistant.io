import {
  customElement,
  LitElement,
  property,
  html,
  CSSResult,
  css
} from "lit-element";
import { Alert } from "../data/alert";
import "./kb-layout";
import "../components/ha-card";
import "../components/kb-display-version";
import "../components/kb-hass-version";

@customElement("kb-detail")
class KbDetail extends LitElement {
  // null means data is still being loaded.
  @property() public alert?: Alert | null;
  @property() private _content?: HTMLElement;
  @property() private _error?: string;

  protected render() {
    return html`
      <kb-layout>
        <a class="back-link" slot="header" href="#">⬅ Back to the overview</a>
        ${this.renderBody()}
      </kb-layout>
    `;
  }

  private renderBody() {
    if (this.alert === null) {
      return html`
        <ha-card>
          Loading…
        </ha-card>
      `;
    }

    if (!this.alert) {
      return html`
        <ha-card>
          Invalid item specified: ${this.alert}.
        </ha-card>
      `;
    }

    return html`
      <div class="body">
        <div class="content">
          <ha-card .header=${this.alert.title}>
            <div class="card-content">
              ${this._error
                ? this._error
                : this._content
                ? this._content
                : "Loading…"}
            </div>
          </ha-card>
        </div>
        <div class="sidebar">
          Created: ${this.alert.created.toLocaleDateString()}<br />
          ${this.alert.updated
            ? html`
                Updated: ${this.alert.updated.toLocaleDateString()}<br />
              `
            : ""}
          <br />
          <b>Home Assistant:</b>
          <kb-hass-version
            .version=${this.alert.homeassistant}
          ></kb-hass-version>
          <br /><br />
          ${this.alert.github_issue
            ? html`
                <a href=${this.alert.github_issue}>GitHub Issue</a><br /><br />
              `
            : ""}
          ${this.alert.integrations
            ? html`
                <b>Integrations</b>
                <ul>
                  ${this.alert.integrations.map(
                    int =>
                      html`
                        <li>
                          <kb-display-version
                            .version=${int}
                            .href=${`https://www.home-assistant.io/components/${int.package}/`}
                          ></kb-display-version>
                        </li>
                      `
                  )}
                </ul>
              `
            : ""}
          ${this.alert.packages
            ? html`
                <b>Python Packages</b>
                <ul>
                  ${this.alert.packages.map(
                    pkg =>
                      html`
                        <li>
                          <kb-display-version
                            .version=${pkg}
                            .href=${`https://pypi.org/project/${pkg.package}/`}
                          ></kb-display-version>
                        </li>
                      `
                  )}
                </ul>
              `
            : ""}
          <a
            href=${`https://github.com/home-assistant/alerts.home-assistant.io/tree/master/alerts/${this.alert.filename}`}
            target="_blank"
          >
            Edit alert on GitHub
          </a>
        </div>
      </div>
    `;
  }

  protected updated(changedProps) {
    super.updated(changedProps);

    if (!changedProps.has("alert")) {
      return;
    }

    this._content = undefined;
    this._error = undefined;

    if (!this.alert) {
      return;
    }

    Promise.all([
      fetch(`/alerts/${this.alert!.filename}`).then(resp => resp.text()),
      import("../util/load_markdown")
    ])
      .then(([text, { marked, filterXSS }]) => {
        const content = document.createElement("div");
        content.innerHTML = filterXSS(
          marked(
            // Strip out the metadata
            text.substr(text.indexOf("---", 1) + 4),
            {
              breaks: true,
              gfm: true,
              tables: true
            }
          )
        );
        this._content = content;
      })
      .catch(err => {
        console.error(err);
        this._error = `Error loading content: ${err.message}`;
      });
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        margin: 30px auto;
        max-width: 800px;
      }

      a.back-link {
        color: black;
      }

      .sidebar {
        padding: 16px;
      }

      .sidebar a {
        color: var(--dark-primary-color);
      }

      @media (min-width: 768px) {
        .body {
          display: flex;
        }

        .content {
          flex: 1;
        }

        .sidebar {
          width: 200px;
          margin-left: 16px;
          padding: 0;
        }
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-detail": KbDetail;
  }
}
