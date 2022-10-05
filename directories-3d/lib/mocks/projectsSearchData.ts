import Chance from 'chance';

const chance = new Chance(12345678);

export const projectCategories = {
  maxResults: 25,
  startAt: 0,
  total: 50,
  isLast: false,
  values: Array(15)
    .fill(0)
    .map((_v, i) => {
      // const leadEmail = chance.email({ domain: "example.com" });
      return {
        id: chance.guid() + i,
        name: `Cat-${i}`,
        description: `Cat-${i}`,
      };
    }),
};

const projectTypes = [
  {
    type: 'SOFTWARE',
    displayName: 'Jira Software',
    teamManagedDisplayName: 'Team managed software',
    companyManagedDisplayName: 'Company managed software',
  },
  {
    type: 'SERVICE_DESK',
    displayName: 'Jira Service Management',
    teamManagedDisplayName: 'Team-managed service management',
    companyManagedDisplayName: 'Service management',
  },
  {
    type: 'BUSINESS',
    displayName: 'Jira Work Management',
    teamManagedDisplayName: 'Team-managed business',
    companyManagedDisplayName: 'Company-managed business',
  },
  {
    type: 'PRODUCT_DISCOVERY',
    displayName: 'Jira Product Discovery',
    teamManagedDisplayName: 'Product Discovery',
    companyManagedDisplayName: 'Product Discovery',
  },
];

export const projectTypeDetails = {
  maxResults: 25,
  startAt: 0,
  total: 50,
  isLast: false,
  values: Array(15)
    .fill(0)
    .map((_v, _i) => {
      const projectType = chance.pickone(projectTypes);
      return {
        id: chance.guid() + projectType,
        type: projectType.type,
        key: projectType.type,
        displayName: projectType.displayName,
        description: projectType.displayName,
        teamManagedDisplayName: projectType.teamManagedDisplayName,
        companyManagedDisplayName: projectType.companyManagedDisplayName,
        // icon: String!
        // color: String!
      };
    }),
};
export const DEFAULT_MOCK_DATA = {
  maxResults: 25,
  startAt: 0,
  total: 2337,
  isLast: false,
  values: Array(25)
    .fill(0)
    .map((_v, i) => {
      const leadEmail = chance.email({domain: 'example.com'});
      const projectType = chance.pickone(projectTypeDetails.values);
      const isSimplified = chance.bool({likelihood: 10});
      return {
        id: chance.guid() + i,
        key: chance.unique(chance.state, 25)[i],
        lead: {
          displayName: leadEmail,
          avatar: `https://i.pravatar.cc/150?u=${leadEmail}`,
        },
        name: chance.company(),
        projectTypeKey: projectType.key,
        projectType,
        simplified: isSimplified,
        favourite: chance.bool({likelihood: 20}),
        isPrivate: chance.bool({likelihood: 5}),
        entityId: `entity-${chance.guid()}`,
        uuid: chance.guid(),
        lastIssueUpdateDate: new Date(chance.date({year: 2021})).toLocaleString(
          'en-US',
        ),
        url: chance.bool({likelihood: 20}) ? chance.url() : undefined,
        category: chance.bool({likelihood: 30})
          ? chance.pickone(projectCategories.values)
          : undefined,
      };
    }),
};

export const projectDirectoryHeaders = [
  {
    title: '',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraProjectFavouriteCell',
    showInAdmin: true,
    showInMain: true,
  },
  {
    title: 'Name',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraProjectNameCell',
    showInAdmin: true,
    showInMain: true,
  },
  {
    title: 'Key',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraProjectKeyCell',
    showInAdmin: true,
    showInMain: true,
  },
  {
    title: 'Type',
    isSortable: false,
    renderer: 'JiraProjectTypeCell',
    showInAdmin: true,
    showInMain: true,
  },
  {
    title: 'Lead',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraProjectLeadCell',
    showInAdmin: true,
    showInMain: true,
  },
  {
    title: 'Category',
    isSortable: true,
    sortDirection: 'DESC',
    renderer: 'JiraProjectCategoryCell',
    showInAdmin: true,
    showInMain: true,
  },
  {
    title: 'Last issue update',
    isSortable: true,
    sortDirection: 'DESC',
    renderer: 'JiraProjectLastIssueUpdateCell',
    showInAdmin: true,
    showInMain: false,
  },
  {
    title: '', // project link
    isSortable: false,
    renderer: 'JiraProjectLinkCell',
    showInAdmin: false,
    showInMain: true,
  },
  {
    title: '', // Actions
    isSortable: false,
    renderer: 'JiraProjectActionsCell',
    showInAdmin: true,
    showInMain: true,
  },
];

export const PROJECT_DIRECTORY_CONFIG = (isAdmin: boolean, canCreate = false) =>
  isAdmin
    ? {
        title: 'Manage Projects',
        hasCreatePermission: true,
        headers: projectDirectoryHeaders.filter(
          (project) => project.showInAdmin,
        ),
        data: DEFAULT_MOCK_DATA,
      }
    : {
        title: 'Projects',
        hasCreatePermission: false,
        headers: projectDirectoryHeaders.filter(
          (project) => project.showInMain,
        ),
        data: DEFAULT_MOCK_DATA,
      };
