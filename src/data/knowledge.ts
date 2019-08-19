export interface VersionSpec {
  package: string;
  min?: string;
  max?: string;
}
export interface KnowledgeItem {
  title: string;
  filename: string;
  created: Date;
  updated?: Date;
  integrations?: VersionSpec[];
  packages?: VersionSpec[];
}
