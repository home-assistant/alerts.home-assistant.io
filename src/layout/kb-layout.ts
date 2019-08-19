import { customElement, LitElement, html, CSSResult, css } from "lit-element";

@customElement("kb-layout")
class KbLayout extends LitElement {
  protected render() {
    return html`
      <div class="header">
        <img src="/images/logo.svg" alt="Home Assistant logo" class="logo" />
        <span class="title">Home Assistant Alerts</span>
        <div class="spacer"></div>
        <slot name="header"></slot>
      </div>
      <slot></slot>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        width: 800px;
        margin: 0 auto;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }

      .logo {
        width: 64px;
        height: 64px;
        border-radius: 5px;
      }

      .title {
        margin-left: 8px;
        font-size: 2em;
        font-weight: 500;
      }

      .spacer {
        flex: 1;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-layout": KbLayout;
  }
}
