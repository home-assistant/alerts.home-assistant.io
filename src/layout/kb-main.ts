import { LitElement, customElement, html, property } from "lit-element";
import { KnowledgeItem } from "../data/knowledge";
import { compare } from "../util/compare";
import "./kb-overview";
import "./kb-detail";

@customElement("kb-main")
class KbMain extends LitElement {
  @property() private data?: KnowledgeItem[];
  @property() private _item = "";

  protected render() {
    return this._item
      ? html`
          <kb-detail
            .item=${this.data
              ? this.data.find(item => item.filename === this._item)
              : null}
          ></kb-detail>
        `
      : html`
          <kb-overview .data=${this.data}></kb-overview>
        `;
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    (window as any).dataProm.then((data: KnowledgeItem[]) => {
      this.data = data.sort((k1, k2) => compare(k1.title, k2.title));
      this.data.forEach(item => {
        item.created = new Date(item.created);
        if (item.updated) {
          item.updated = new Date(item.updated);
        }
      });
    });
    this._item = location.hash.substr(1);
    window.addEventListener("hashchange", () => {
      this._item = location.hash.substr(1);
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kb-main": KbMain;
  }
}
