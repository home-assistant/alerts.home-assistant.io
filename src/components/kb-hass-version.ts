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
    const { introduced_in, resolved_in } = this.version;

    return html`
      ${introduced_in && resolved_in
        ? `${introduced_in}…<${resolved_in}`
        : introduced_in
        ? `>=${introduced_in}`
        : resolved_in
        ? `<${resolved_in}`
        : "all versions"}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-hass-version": KbHassVersion;
  }
}
