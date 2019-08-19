import {
  customElement,
  LitElement,
  property,
  html,
  CSSResult,
  css
} from "lit-element";
import { KnowledgeItem } from "../data/knowledge";
import { renderVersionSpec } from "../util/render_version_spec";

@customElement("kb-detail")
class KbDetail extends LitElement {
  // null means data is still being loaded.
  @property() public item?: KnowledgeItem | null;
  @property() private _content?: HTMLElement;
  @property() private _error?: string;

  protected render() {
    if (this.item === null) {
      return html`
        Loading…
      `;
    }

    if (!this.item) {
      return html`
        <div class="back-row"><a href="#">⬅ Back to the overview</a></div>
        <p>Invalid item specified: ${this.item}.</p>
      `;
    }

    return html`
      <div class="back-row"><a href="#">⬅ Back to the overview</a></div>
      <h1>${this.item.title}</h1>
      <div class="body">
        <div class="content">
          ${this._error
            ? this._error
            : this._content
            ? this._content
            : "Loading…"}
        </div>
        <div class="sidebar">
          Created: ${this.item.created.toLocaleDateString()}<br />
          ${this.item.updated
            ? html`
                Updated: ${this.item.updated.toLocaleDateString()}<br />
              `
            : ""}
          <br />
          ${this.item.github_issue
            ? html`
                <a href=${this.item.github_issue}>GitHub Issue</a><br /><br />
              `
            : ""}
          ${this.item.integrations
            ? html`
                <b>Integrations</b>
                <ul>
                  ${this.item.integrations.map(
                    int =>
                      html`
                        <li>${renderVersionSpec(int)}</li>
                      `
                  )}
                </ul>
              `
            : ""}
          ${this.item.packages
            ? html`
                <b>Python Packages</b>
                <ul>
                  ${this.item.packages.map(
                    pkg =>
                      html`
                        <li>${renderVersionSpec(pkg)}</li>
                      `
                  )}
                </ul>
              `
            : ""}
        </div>
      </div>
    `;
  }

  protected updated(changedProps) {
    super.updated(changedProps);

    if (!changedProps.has("item")) {
      return;
    }

    this._content = undefined;
    this._error = undefined;

    if (!this.item) {
      return;
    }

    Promise.all([
      fetch(`/knowledge/${this.item!.filename}`).then(resp => resp.text()),
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
        margin: 12px auto;
        max-width: 800px;
      }

      .back-row {
        padding: 8px 0 24px;
      }
      .back-row a {
        color: black;
      }

      .body {
        display: flex;
      }
      .content {
        flex: 1;
      }
      .sidebar {
        width: 200px;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-detail": KbDetail;
  }
}
