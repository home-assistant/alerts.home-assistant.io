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
  // Add domain because used inside custom element which can be used anywhere
  fetch("https://alerts.home-assistant.io/alerts.json").then(r => r.json());
