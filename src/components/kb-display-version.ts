import {
  html,
  LitElement,
  property,
  TemplateResult,
  customElement,
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
    const {
      package: pkg,
      affected_from_version,
      resolved_in_version,
    } = this.version;

    return html`
      ${this.href ? html` <a href=${this.href}>${pkg}</a> ` : pkg}
      ${affected_from_version && resolved_in_version
        ? `(${affected_from_version}…<${resolved_in_version})`
        : affected_from_version
        ? `(>=${resolved_in_version})`
        : resolved_in_version
        ? `(<${resolved_in_version})`
        : ""}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-display-version": KbDisplayVersion;
  }
}
