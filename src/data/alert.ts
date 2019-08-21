export interface VersionSpec {
  package: string;
  min?: string;
  max?: string;
}
export interface Alert {
  title: string;
  filename: string;
  created: Date;
  updated?: Date;
  homeassistant?: VersionSpec;
  github_issue?: string;
  integrations?: VersionSpec[];
  packages?: VersionSpec[];
}

export const fetchAlerts = (): Promise<Alert[]> =>
  fetch("/alerts.json").then(r => r.json());
