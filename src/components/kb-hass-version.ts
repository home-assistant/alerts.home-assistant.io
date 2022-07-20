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
    const { min_version, resolved_in_version } = this.version;

    return html`
      ${min_version && resolved_in_version
        ? `${min_version}…<${resolved_in_version}`
        : min_version
        ? `>=${min_version}`
        : resolved_in_version
        ? `<${resolved_in_version}`
        : "all versions"}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-hass-version": KbHassVersion;
  }
}
