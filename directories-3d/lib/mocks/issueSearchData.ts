import issueData from './issues/results';

export const ISSUE_DIRECTORY_CONFIG = (cloudId: string) => {
  switch (cloudId) {
    case 'normal-user':
      return {
        title: 'Issues',
        description: 'Issue search',
        hasCreatePermission: false,
        headers: issueDirectoryHeaders.filter((project) => project.showInAdmin),
        filters: [],
        data: issueData,
      };
  }
};

type IssueField = {
  issuetype: {iconUrl: string; name: string};
  priority: {iconUrl: string; id: string};
  key: string;
  summary: string;
  reporter: {displayName: string; avatarUrls: {'24x24': string}};
  assignee?: {displayName: string; avatarUrls: {'24x24': string}};
  status: {
    name: string;
    statusCategory: {colorName: 'blue-gray' | 'yellow' | 'green'};
  };
};

type Issue = {
  key: string;
  fields: IssueField;
};

const colorMap = {'blue-gray': '#2684FF', yellow: '#FFC400', green: '#36B37E'};

export const issueDirectoryHeaders = [
  {
    title: 'Type',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraIssueTypeCell',
    mapper: (issue: Issue) => ({
      icon: {
        altText: issue.fields.issuetype.name,
        image: {medium: issue.fields.issuetype.iconUrl},
      },
    }),
    showInAdmin: true,
    showInMain: true,
    sortKey: null,
  },
  {
    title: 'P',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraIssueTypeCell',
    mapper: (issue: Issue) => ({
      icon: {
        altText: issue.fields.priority.id,
        image: {medium: issue.fields.priority.iconUrl},
      },
    }),
    showInAdmin: true,
    showInMain: true,
    sortKey: null,
  },
  {
    title: 'Key',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraIssueTypeCell',
    mapper: (issue: Issue) => ({
      label: {
        stringValue: issue.key,
        linkUrl: `https://jira.atlassian.com/browse/${issue.key}`,
      },
    }),
    showInAdmin: true,
    showInMain: true,
    sortKey: null,
  },
  {
    title: 'Summary',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraIssueTypeCell',
    mapper: (issue: Issue) => ({
      label: {
        stringValue: issue.fields.summary,
        linkUrl: `https://jira.atlassian.com/browse/${issue.key}`,
      },
    }),
    showInAdmin: true,
    showInMain: true,
    sortKey: null,
  },
  {
    title: 'Reporter',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraIssueTypeCell',
    mapper: (issue: Issue) => ({
      icon: {
        altText: issue.fields.reporter.displayName,
        image: {medium: issue.fields.reporter.avatarUrls['24x24']},
      },
      label: {
        stringValue: issue.fields.reporter.displayName,
      },
    }),
    showInAdmin: true,
    showInMain: true,
    sortKey: null,
  },
  {
    title: 'Assignee',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraIssueTypeCell',
    mapper: (issue: Issue) => {
      return issue.fields.assignee
        ? {
            icon: {
              altText: issue.fields.assignee.displayName,
              image: {medium: issue.fields.assignee.avatarUrls['24x24']},
            },
            label: {
              stringValue: issue.fields.assignee.displayName,
            },
          }
        : {};
    },
    showInAdmin: true,
    showInMain: true,
    sortKey: null,
  },
  {
    title: 'Status',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraIssueTypeCell',
    mapper: (issue: Issue) => {
      return issue.fields.status
        ? {
            label: {
              stringValue: issue.fields.status.name,
              textTransform: 'UPPER',
            },
            color:
              colorMap[issue.fields.status.statusCategory.colorName] ??
              undefined,
          }
        : {};
    },
    showInAdmin: true,
    showInMain: true,
    sortKey: null,
  },
];
