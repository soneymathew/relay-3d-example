import issueData from './issues/results';
import {type Issue} from './types';
import Chance from 'chance';
import {PROJECT_DIRECTORY_CONFIG} from './projectsSearchData';
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
        decoration:
          issue.fields?.status?.statusCategory.name == 'Done'
            ? 'STRIKE_THRU'
            : 'NORMAL',
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
    sortBy: 'priority',
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
    sortBy: 'status',
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
    sortBy: 'resolution',
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
    sortBy: 'created',
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
    sortBy: 'updated',
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
    sortBy: 'due',
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
    sortBy: 'affectedVersion',
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
    title: 'Fix versions',
    isSortable: true,
    sortDirection: 'ASC',
    sortBy: 'fixVersion',
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
        : [,];
    },
  },
  {
    title: 'Components',
    isSortable: true,
    sortDirection: 'ASC',
    sortBy: 'component',
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
    sortBy: 'creator',
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
    title: 'Labels',
    isSortable: true,
    sortDirection: 'ASC',
    sortBy: 'labels',
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
    sortBy: 'project',
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
    sortBy: 'resolved',
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
    sortBy: 'parent',
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
    sortBy: 'statusCategory',
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
      return [
        {actionText: 'View Issue'},
        {actionText: 'Comment'},
        {actionText: 'Log work'},
        {actionText: 'Connect Slack channel'},
        {actionText: 'Agile board'},
        {actionText: 'Rank to top'},
        {actionText: 'Rank to bottom'},
        {actionText: 'Attach files'},
        {actionText: 'Add vote'},
        {actionText: 'Voters'},
        {actionText: 'Watch issue'},
        {actionText: 'Watchers'},
        {actionText: 'Create sub-task'},
        {actionText: 'Convert to sub-task'},
        {actionText: 'Move'},
        {actionText: 'Clone'},
        {actionText: 'Labels'},
        {actionText: 'Delete'},
        {actionText: 'Add web link'},
      ].map(({actionText}) => ({
        __typename: 'JiraGenericAction',
        id: `${issue.id}/${actionText}`,
        name: actionText,
        canPerform: true,
      }));
    },
  },
];

const chance = new Chance(12345678);
const Users = [...Array(100)].map(() => {
  const userName = chance.name();
  const userEmail = userName.replace(' ', '.').toLowerCase() + '@example.com';
  return {
    displayName: userName,
    avatarUrls: {'24x24': `https://i.pravatar.cc/150?u=${userEmail}`},
  };
});

const MOCK_ISSUE_DATA = {
  issues: [...Array(105)].map((_v, index) => {
    const project = chance.pickone(
      PROJECT_DIRECTORY_CONFIG('normal-user').data.values,
    );
    return {
      id: index.toString(),
      key: project.key + '-' + index.toString(),
      fields: {
        summary: chance.sentence({words: 5}),
        issuetype: chance.pickone([
          {
            name: 'Bug',
            iconUrl:
              'https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51493&avatarType=issuetype',
          },
          {
            name: 'Epic',
            iconUrl:
              'https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51497&avatarType=issuetype',
          },
          {
            name: 'Innovation',
            iconUrl:
              'https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=98191&avatarType=issuetype',
          },
          {
            name: 'New Feature',
            iconUrl:
              'https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51501&avatarType=issuetype',
          },
          {
            name: 'Story',
            iconUrl:
              'https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51504&avatarType=issuetype',
          },
          {
            name: 'Task',
            iconUrl:
              'https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51508&avatarType=issuetype',
          },
          {
            name: 'Sub-task',
            iconUrl:
              'https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51506&avatarType=issuetype',
          },
          {
            name: 'Technical task',
            iconUrl:
              'https://jira.atlassian.com/download/resources/com.pyxis.greenhopper.jira:greenhopper-webactions/images/ico_task.png',
          },
          {
            name: 'Test',
            iconUrl:
              'https://jira.atlassian.com/images/icons/issuetypes/task_agile.png',
          },
        ]),
        status: chance.pickone([
          {
            name: chance.pickone(['Completed', 'Finished', 'All Done', 'Done']),
            statusCategory: {name: 'Done', colorName: 'green'},
          },
          {
            name: chance.pickone([
              'In Progress',
              'Still going on',
              'Not yet done',
              'Little bit more left',
            ]),
            statusCategory: {name: 'In Progress', colorName: 'blue-gray'},
          },
          {
            name: chance.pickone([
              'To Do',
              'Some day',
              'Next blue moon',
              'To Delete',
            ]),
            statusCategory: {name: 'To Do', colorName: 'yellow'},
          },
        ]),
        priority: {
          ...chance.pickone([
            {
              id: '1',
              name: 'Blocker',
              iconUrl:
                'https://jira.atlassian.com/images/icons/priorities/blocker.svg',
            },
            {
              id: '2',
              name: 'Critical',
              iconUrl:
                'https://jira.atlassian.com/images/icons/priorities/critical.svg',
            },
            {
              id: '3',
              name: 'Major',
              iconUrl:
                'https://jira.atlassian.com/images/icons/priorities/major.svg',
            },
            {
              id: '4',
              name: 'Highest',
              iconUrl:
                'https://jira.atlassian.com/images/icons/priorities/highest.svg',
            },
            {
              id: '5',
              name: 'High',
              iconUrl:
                'https://jira.atlassian.com/images/icons/priorities/high.svg',
            },
            {
              id: '6',
              name: 'Medium',
              iconUrl:
                'https://jira.atlassian.com/images/icons/priorities/medium.svg',
            },
            {
              id: '7',
              name: 'Low',
              iconUrl:
                'https://jira.atlassian.com/images/icons/priorities/low.svg',
            },
            {
              id: '8',
              name: 'Lowest',
              iconUrl:
                'https://jira.atlassian.com/images/icons/priorities/lowest.svg',
            },
            {
              id: '9',
              name: 'Minor',
              iconUrl:
                'https://jira.atlassian.com/images/icons/priorities/minor.svg',
            },
            {
              id: '10',
              name: 'Trivial',
              iconUrl:
                'https://jira.atlassian.com/images/icons/priorities/trivial.svg',
            },
          ]),
        },
        created: new Date(chance.birthday({type: 'senior'}))
          .toISOString()
          .replace('Z', '+1000'),
        updated: new Date(chance.birthday({type: 'adult'}))
          .toISOString()
          .replace('Z', '+1000'),
        duedate: chance.bool({likelihood: 20})
          ? new Date(chance.birthday({type: 'teen'}))
              .toISOString()
              .replace('Z', '+1000')
          : null,
        resolutiondate: chance.bool({likelihood: 20})
          ? new Date(chance.birthday({type: 'child'}))
              .toISOString()
              .replace('Z', '+1000')
          : null,
        assignee: chance.pickone(Users),
        reporter: chance.pickone(Users),
        creator: chance.pickone(Users),
        project: {
          name: project.name,
          avatarUrls: {'24x24': `https://i.pravatar.cc/150?u=${project.key}`},
          key: project.key,
        },
        resolution: {
          name: chance.pickone([
            'Fixed',
            'Done',
            "Won't Fix",
            'Duplicate',
            'Incomplete',
            'Cannot Reproduce',
          ]),
        },
        labels: chance.bool({likelihood: 50})
          ? chance.pickset(
              [
                'bug',
                'feature',
                'enhancement',
                'documentation',
                'help',
                'good first issue',
                'invalid',
                'wontfix',
                'question',
                'duplicate',
                'design',
                'performance',
                'security',
              ],
              chance.integer({min: 0, max: 13}),
            )
          : null,
        fixVersions: chance.bool({likelihood: 30})
          ? chance.pickset(
              [
                {
                  name: 'v1.0.0',
                },
                {
                  name: 'v2.0.0',
                },
                {
                  name: 'v3.0.0',
                },
                {
                  name: 'v4.0.0',
                },
              ],
              chance.integer({min: 0, max: 4}),
            )
          : null,
        versions: chance.bool({likelihood: 30})
          ? chance.pickset(
              [
                {
                  name: 'v1.0.0',
                },
                {
                  name: 'v2.0.0',
                },
                {
                  name: 'v3.0.0',
                },
                {
                  name: 'v4.0.0',
                },
              ],
              chance.integer({min: 0, max: 4}),
            )
          : null,
        components: chance.bool({likelihood: 30})
          ? chance.pickset(
              [
                {
                  name: 'c1',
                },
                {
                  name: 'c2',
                },
                {
                  name: 'c3',
                },
                {
                  name: 'c4',
                },
              ],
              chance.integer({min: 0, max: 4}),
            )
          : null,
      },
    };
  }),
};

const MOCK_ISSUE_DATA_WITH_PARENT = {
  issues: MOCK_ISSUE_DATA.issues.map((issue) => {
    if (chance.bool({likelihood: 40}) && issue?.fields) {
      return {
        ...issue,
        fields: {
          ...issue.fields,
          parent: chance.pickone(MOCK_ISSUE_DATA.issues),
        },
      };
    }
    return issue;
  }),
};
export const ISSUE_DIRECTORY_CONFIG = (cloudId: string) => {
  switch (cloudId) {
    case 'mock-user':
      return {
        title: 'Issues',
        description: 'Issue search',
        pageActions: [],
        headers: issueDirectoryHeaders,
        filters: [{type: 'JiraDirectoryJqlBuilderAdvancedCriteria'}],
        data: issueData,
      };
    case 'normal-user':
      return {
        title: 'Issues',
        description: 'Issue search',
        pageActions: [],
        headers: issueDirectoryHeaders,
        filters: [{type: 'JiraDirectoryJqlBuilderAdvancedCriteria'}],
        data: MOCK_ISSUE_DATA_WITH_PARENT,
      };
  }
};
