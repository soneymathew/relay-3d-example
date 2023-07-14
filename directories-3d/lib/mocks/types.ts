export type UserInfo = {
  displayName: string;
  avatarUrls: {'24x24': string; [other: string]: unknown};
  [other: string]: unknown;
};
export type Version = {name: string; [other: string]: unknown};
export type Component = {name: string; [other: string]: unknown};
export type IssueField = {
  issuetype?: {iconUrl: string; name: string; [other: string]: unknown} | null;
  priority?: {
    iconUrl: string;
    id: string;
    name: string;
    [other: string]: unknown;
  } | null;
  summary?: string | null;
  reporter?: UserInfo | null;
  assignee?: UserInfo | null;
  creator?: UserInfo | null;
  status?: {
    name: string;
    statusCategory: {colorName: string; name: string; [other: string]: unknown};
    [other: string]: unknown;
  } | null;
  resolution?: {name: string; [other: string]: unknown} | null;
  created?: string | null;
  updated?: string | null;
  duedate?: string | null;
  resolutiondate?: string | null;
  labels?: Array<string> | null;
  project?: {
    name: string;
    avatarUrls: {'24x24': string; [other: string]: unknown};
    key: string;
    [other: string]: unknown;
  } | null;
  fixVersions?: Array<Version> | null;
  versions?: Array<Version> | null;
  components?: Array<Component> | null;
  parent?: Issue | null;
  [key: string]: object | string | null | number | undefined;
};

export type Issue = {
  id: string;
  key: string;
  fields: IssueField;
  [other: string]: unknown;
};

export type IssueSearchResult = {
  expand: string;
  startAt: number;
  maxResults: number;
  total: number;
  issues: Array<Issue>;
  [other: string]: unknown;
};
