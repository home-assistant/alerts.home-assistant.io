import {
  html,
  LitElement,
  property,
  TemplateResult,
  customElement
} from "lit-element";
import { VersionSpec } from "../data/alert";

@customElement("kb-display-version")
class KbDisplayVersion extends LitElement {
  @property() public version!: VersionSpec;
  @property() public href?: string;

  // Allow styling to be done by parent
  createRenderRoot() {
    return this;
  }

  protected render(): TemplateResult {
    const { package: pkg, min, max } = this.version;

    return html`
      ${this.href
        ? html`
            <a href=${this.href}>${pkg}</a>
          `
        : pkg}
      ${min && max
        ? `(${min}…${max})`
        : min
        ? `(>=${min})`
        : max
        ? `(<${max})`
        : ""}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-display-version": KbDisplayVersion;
  }
}
