import {
  html,
  LitElement,
  property,
  TemplateResult,
  customElement
} from "lit-element";
import { VersionSpec } from "../data/alert";

@customElement("kb-hass-version")
class KbHassVersion extends LitElement {
  @property() public version!: VersionSpec;

  // Allow styling to be done by parent
  createRenderRoot() {
    return this;
  }

  protected render(): TemplateResult {
    const { min, max } = this.version;

    return html`
      ${min && max
        ? html`
            ${min}…${max}
          `
        : min
        ? html`
            >=${min}
          `
        : max
        ? html`
            <${max}
          `
        : "all versions"}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-hass-version": KbHassVersion;
  }
}
