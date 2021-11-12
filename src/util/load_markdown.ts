import { marked as marked_ } from "marked";
import { filterXSS as filterXSS_ } from "xss";

export const marked = marked_;
export const filterXSS = filterXSS_;

marked.setOptions({
  breaks: true,
  gfm: true,
});
