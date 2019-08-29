import { customElement, LitElement, html, CSSResult, css } from "lit-element";
import { haLogo } from "../components/ha-logo";

@customElement("kb-layout")
class KbLayout extends LitElement {
  protected render() {
    return html`
      <div class="header">
        <div class="logo">
          ${haLogo()}
          <span class="title">Home Assistant Alerts</span>
        </div>
        <div class="header-inner">
          <slot name="header"></slot>
        </div>
      </div>
      <slot></slot>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        margin: 0 auto;
      }

      .header {
        margin-bottom: 16px;
      }

      .logo {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 16px;
        padding: 0 16px;
      }

      svg {
        align-self: center;
        width: 64px;
        height: 64px;
        border-radius: 5px;
      }

      .title {
        font-size: 2em;
        font-weight: 500;
        padding-top: 8px;
      }

      .header-inner {
        text-align: center;
      }

      @media (min-width: 480px) {
        .logo {
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .title {
          margin-left: 15px;
          padding-top: 0;
        }
      }

      @media (min-width: 768px) {
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-inner {
          text-align: left;
        }
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-layout": KbLayout;
  }
}
