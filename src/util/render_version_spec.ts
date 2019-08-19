import { VersionSpec } from "../data/knowledge";

export const renderVersionSpec = (spec: VersionSpec) => {
  if (spec.min && spec.max) {
    return `${spec.package} (${spec.min}…${spec.max})`;
  }
  if (spec.min) {
    return `${spec.package} (>=${spec.min})`;
  }
  if (spec.max) {
    return `${spec.package} (<${spec.max})`;
  }

  return spec.package;
};
