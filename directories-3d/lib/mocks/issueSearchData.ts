import issueData from './issues/results';
import {type Issue} from './types';

export const ISSUE_DIRECTORY_CONFIG = (cloudId: string) => {
  switch (cloudId) {
    case 'normal-user':
      return {
        title: 'Issues',
        description: 'Issue search',
        hasCreatePermission: false,
        headers: issueDirectoryHeaders,
        filters: [{type: 'JiraDirectoryJqlBuilderAdvancedCriteria'}],
        data: issueData,
      };
  }
};

const colorMap = {
  'blue-gray': '#2684FF',
  yellow: '#FFC400',
  green: '#36B37E',
};

export const issueDirectoryHeaders = [
  {
    title: 'Type',
    isSortable: true,
    sortDirection: 'ASC',
    sortBy: 'issuetype',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) =>
      issue.fields.issuetype
        ? {
            icon: {
              altText: issue.fields.issuetype.name,
              image: {medium: issue.fields.issuetype.iconUrl},
            },
          }
        : {},
  },
  {
    title: 'Key',
    isSortable: true,
    sortDirection: 'ASC',
    sortBy: 'key',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => ({
      label: {
        stringValue: issue.key,
        linkUrl: `https://jira.atlassian.com/browse/${issue.key}`,
      },
    }),
  },
  {
    title: 'Summary',
    isSortable: true,
    sortDirection: 'ASC',
    sortBy: 'summary',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => ({
      label: {
        stringValue: issue.fields.summary,
        linkUrl: `https://jira.atlassian.com/browse/${issue.key}`,
      },
    }),
  },
  {
    title: 'Assignee',
    isSortable: true,
    sortDirection: 'ASC',
    sortBy: 'assignee',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => {
      return issue.fields.assignee
        ? {
            icon: {
              altText: issue.fields.assignee.displayName,
              image: {
                medium: issue.fields.assignee.avatarUrls['24x24'],
              },
              style: 'CIRCLE',
            },
            label: {
              stringValue: issue.fields.assignee.displayName,
            },
          }
        : {
            icon: {
              image: {
                medium:
                  'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default/128',
              },
              style: 'CIRCLE',
            },
            label: {
              stringValue: 'Unassigned',
            },
          };
    },
  },
  {
    title: 'Reporter',
    isSortable: true,
    sortDirection: 'ASC',
    sortBy: 'reporter',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => ({
      icon: {
        altText: issue.fields.reporter?.displayName,
        image: {
          medium: issue.fields.reporter?.avatarUrls['24x24'],
        },
        style: 'CIRCLE',
      },
      label: {
        stringValue: issue.fields.reporter?.displayName,
      },
    }),
  },
  {
    title: 'P',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) =>
      issue.fields.priority
        ? {
            icon: {
              altText: issue.fields.priority.name,
              image: {medium: issue.fields.priority.iconUrl},
            },
          }
        : {},
  },
  {
    title: 'Status',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => {
      return issue.fields.status
        ? {
            label: {
              stringValue: issue.fields.status.name,
              textTransform: 'UPPER',
            },
            color:
              colorMap[
                issue.fields.status.statusCategory.colorName as
                  | 'blue-gray'
                  | 'yellow'
                  | 'green'
              ] ?? undefined,
          }
        : {};
    },
  },
  {
    title: 'Resolution',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => {
      return issue.fields.resolution
        ? {
            label: {
              stringValue:
                issue.fields.resolution == null
                  ? 'Unresolved'
                  : issue.fields.resolution.name,
            },
          }
        : {
            label: {
              stringValue: 'Unresolved',
            },
          };
    },
  },
  {
    title: 'Created',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => {
      return issue.fields.created
        ? {
            label: {
              stringValue: new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(issue.fields.created)),
            },
          }
        : {};
    },
  },
  {
    title: 'Updated',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => {
      return issue.fields.updated
        ? {
            label: {
              stringValue: new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(issue.fields.updated)),
            },
          }
        : {};
    },
  },
  {
    title: 'Due date',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => {
      return issue.fields.duedate
        ? {
            label: {
              stringValue: new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(issue.fields.duedate)),
            },
          }
        : {};
    },
  },
  {
    title: 'Affects versions',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericFieldConnection',
    mapper: (issue: Issue) => {
      return issue.fields.versions
        ? issue.fields.versions.map((version) => ({
            label: {
              stringValue: version.name,
              altText: `Find issues where the affected version is ‘${version.name}‘`,
              linkUrl: `https://xxx.atlassian.net/issues/?jql=affectedVersion%20%3D%20%22${version.name}%22`,
            },
          }))
        : [];
    },
  },
  {
    title: 'Components',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericFieldConnection',
    mapper: (issue: Issue) => {
      return issue.fields.components
        ? issue.fields.components.map((component) => ({
            label: {
              stringValue: component.name,
              altText: `Find issues where the component is ‘${component.name}‘`,
              linkUrl: `https://xxx.atlassian.net/issues/?jql=component%20%3D%20%22${component.name}%22`,
            },
          }))
        : [];
    },
  },
  {
    title: 'Creator',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => ({
      icon: {
        altText: issue.fields.creator?.displayName,
        image: {
          medium: issue.fields.creator?.avatarUrls['24x24'],
        },
        style: 'CIRCLE',
      },
      label: {
        stringValue: issue.fields.creator?.displayName,
      },
    }),
  },
  {
    title: 'Fix versions',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericFieldConnection',
    mapper: (issue: Issue) => {
      return issue.fields.fixVersions
        ? issue.fields.fixVersions.map((version) => ({
            label: {
              stringValue: version.name,
              altText: `Find issues where the fix version is ‘${version.name}‘`,
              linkUrl: `https://xxx.atlassian.net/issues/?jql=fixVersion%20%3D%20%22${version.name}%22`,
            },
          }))
        : [
            {
              label: {
                stringValue: 'version.name',
                altText: `Find issues where the affected version is ‘${'version.name'}‘`,
                linkUrl: `https://xxx.atlassian.net/issues/?jql=affectedVersion%20%3D%20%22${'version.name'}%22`,
              },
            },
          ];
    },
  },
  {
    title: 'Labels',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericFieldConnection',
    mapper: (issue: Issue) => {
      return issue.fields.labels
        ? issue.fields.labels.map((label) => ({
            label: {
              stringValue: label,
              altText: `Find issues where the label is ‘${label}‘`,
              linkUrl: `https://xxx.atlassian.net/issues/?jql=labels%20%3D%20%22${label}%22`,
            },
          }))
        : [];
    },
  },

  {
    title: 'Project',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) =>
      issue.fields.project
        ? {
            icon: {
              image: {
                medium: issue.fields.project?.avatarUrls['24x24'],
              },
              style: 'SQUARE',
            },
            label: {
              stringValue: issue.fields.project?.name,
              linkUrl: `https://xxx.atlassian.net/projects/${issue.fields.project?.key}`,
            },
          }
        : {},
  },
  {
    title: 'Resolved',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => {
      return issue.fields.resolutiondate
        ? {
            label: {
              stringValue: new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(issue.fields.resolutiondate)),
            },
          }
        : {};
    },
  },
  {
    title: 'Parent',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) =>
      issue !== null && issue.fields?.parent
        ? {
            icon: {
              altText: issue.fields.parent.fields?.issuetype?.name,
              image: {medium: issue.fields.parent.fields?.issuetype?.iconUrl},
            },
            label: {
              stringValue: issue.fields.parent.fields?.summary ?? '',
              linkUrl: `https://jira.atlassian.com/browse/${issue.fields.parent.key}`,
            },
          }
        : {},
  },
  {
    title: 'Epic link',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) =>
      issue?.fields?.parent?.fields?.issuetype?.name == 'Epic'
        ? {
            label: {
              stringValue: issue.fields?.parent.fields?.summary ?? '',
              linkUrl: `https://jira.atlassian.com/browse/${issue.fields?.parent.key}`,
            },
            color: '#FFEB3B',
          }
        : {},
  },
  {
    title: 'Status Category',
    isSortable: true,
    sortDirection: 'ASC',
    __typename: 'JiraGenericField',
    mapper: (issue: Issue) => {
      return issue.fields?.status?.statusCategory
        ? {
            label: {
              stringValue: issue.fields.status.statusCategory.name,
              textTransform: 'UPPER',
            },
            color:
              colorMap[
                issue.fields.status.statusCategory.colorName as
                  | 'blue-gray'
                  | 'yellow'
                  | 'green'
              ] ?? undefined,
          }
        : {};
    },
  },
  {
    title: '', // Actions
    isSortable: false,
    __typename: 'JiraGenericActionsField',
    mapper: (issue: Issue) => {
      return {
        actions: [
          'View Issue',
          'Comment',
          'Log work',
          'Connect Slack channel',
          'Agile board',
          'Rank to top',
          'Rank to bottom',
          'Attach files',
          'Add vote',
          'Voters',
          'Watch issue',
          'Watchers',
          'Create sub-task',
          'Convert to sub-task',
          'Move',
          'Clone',
          'Labels',
          'Delete',
          'Add web link',
        ].map((actionText) => ({
          __typename: 'JiraGenericAction',
          id: `${issue.id}/${actionText}`,
          name: actionText,
        })),
      };
    },
  },
];
