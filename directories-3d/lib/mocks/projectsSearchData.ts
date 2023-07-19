import Chance from 'chance';

const chance = new Chance(12345678);

export const projectCategories = {
  values: Array(15)
    .fill(0)
    .map((_v, i) => {
      const paddedIndex = `${i > 9 ? '' : '0'}${i}`;
      return {
        id: chance.guid() + i,
        categoryId: `c${i}`,
        name: `Cat-${paddedIndex}`,
        description: `Cat-${paddedIndex}`,
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
];

export const projectTypeDetails = {
  values: projectTypes.map((projectType, _i) => {
    return {
      id: `${chance.guid()}-${projectType.type}`,
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

const DEFAULT_MOCK_DATA = {
  values: Array(98)
    .fill(0)
    .map((_v, i) => {
      const leadEmail = chance.email({domain: 'example.com'});
      const projectType = chance.pickone(projectTypeDetails.values);
      const isSimplified = chance.bool({likelihood: 10});
      return {
        id: chance.guid() + i,
        key: chance.unique(
          () => chance.string({length: 3, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}),
          98,
        )[i],
        lead: {
          displayName: leadEmail,
          avatar: `https://i.pravatar.cc/150?u=${leadEmail}`,
        },
        name: `${i + 1 > 9 ? '' : '0'}${i + 1} - ${chance.company()}`,
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
        isPublic: chance.bool({likelihood: 20}),
        category: chance.bool({likelihood: 30})
          ? chance.pickone(projectCategories.values)
          : undefined,
      };
    }),
};

const projectDirectoryFilters = [
  {type: 'JiraDirectorySearchTextFilterCriteria'},
  {type: 'JiraGenericDirectoryProjectTypesFilterCriteria'},
  {type: 'JiraGenericDirectoryProjectCategoriesFilterCriteria'},
];
export const projectDirectoryHeaders = [
  {
    title: '★',
    isSortable: false,
    sortDirection: 'ASC',
    renderer: 'JiraGenericFavouriteField',
    showInAdmin: true,
    showInMain: true,
    sortKey: null,
  },
  {
    title: 'Name',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraProjectNameCell',
    showInAdmin: true,
    showInMain: true,
    sortKey: 'name',
  },
  {
    title: 'Key',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraProjectKeyCell',
    showInAdmin: true,
    showInMain: true,
    sortKey: 'key',
  },
  {
    title: 'Type',
    isSortable: false,
    renderer: 'JiraProjectTypeCell',
    showInAdmin: true,
    showInMain: true,
    sortKey: null,
  },
  {
    title: 'Lead',
    isSortable: true,
    sortDirection: 'ASC',
    renderer: 'JiraProjectLeadCell',
    showInAdmin: true,
    showInMain: true,
    sortKey: 'owner',
  },
  {
    title: 'Category',
    isSortable: true,
    sortDirection: 'DESC',
    renderer: 'JiraProjectCategoryCell',
    showInAdmin: true,
    showInMain: true,
    sortKey: 'category',
  },
  {
    title: 'Last issue update',
    isSortable: true,
    sortDirection: 'DESC',
    renderer: 'JiraProjectLastIssueUpdateCell',
    showInAdmin: true,
    showInMain: false,
    sortKey: 'lastissueupdatedtime',
  },
  {
    title: '', // project link
    isSortable: false,
    renderer: 'JiraProjectLinkCell',
    showInAdmin: false,
    showInMain: true,
    sortKey: null,
  },
  {
    title: '', // Actions
    isSortable: false,
    renderer: 'JiraGenericActionsField',
    showInAdmin: true,
    showInMain: true,
    sortKey: null,
  },
];

export const PROJECT_DIRECTORY_CONFIG = (cloudId: string) => {
  switch (cloudId) {
    case 'admin-user':
      return {
        title: 'Manage Projects',
        description:
          'This is the view for a user that is an admin. Notice that the columns are different and the user can create a project',
        pageActions: [
          {
            type: 'JiraCreateEntityAction',
            name: 'Create Project',
            parameters: {entityType: 'project'},
          },
        ],
        headers: projectDirectoryHeaders.filter(
          (project) => project.showInAdmin,
        ),
        projectTypeDetails,
        projectCategories,
        filters: projectDirectoryFilters,
        data: DEFAULT_MOCK_DATA,
      };
    case 'no-categories':
      return {
        title: 'Projects with no categories',
        description:
          'In this instance there are no project categories. Note that categories picker and categories column are not loaded.',
        pageActions: [],
        headers: projectDirectoryHeaders.filter(
          (project) =>
            project.showInMain &&
            project.renderer !== 'JiraProjectCategoryCell',
        ),
        projectTypeDetails,
        projectCategories: {values: []},
        filters: projectDirectoryFilters.slice(0, 2),
        data: DEFAULT_MOCK_DATA,
      };
    case 'only-software':
      return {
        title: 'Only software project license',
        description:
          'In this instance there are only software projects. All Jira Products picker need not be shown',
        pageActions: [],
        headers: projectDirectoryHeaders.filter(
          (project) =>
            project.showInMain &&
            project.renderer !== 'JiraProjectCategoryCell',
        ),
        projectTypeDetails: {
          values: projectTypeDetails.values.filter(
            (projectType) => projectType.type === 'SOFTWARE',
          ),
        },
        projectCategories,
        filters: [projectDirectoryFilters[0], projectDirectoryFilters[2]],
        data: {
          values: DEFAULT_MOCK_DATA.values.filter(
            (project) => project.projectType.type === 'SOFTWARE',
          ),
        },
      };
    case 'anonymous-user':
      return {
        title: 'Projects for anonymous user',
        description:
          'In this case project categories should not be shown as user is not logged in. Note that categories picker and categories column are not loaded. There is also less number of projects that are available to be seen',
        pageActions: [],
        headers: projectDirectoryHeaders.filter(
          (project) =>
            project.showInMain &&
            project.renderer !== 'JiraProjectCategoryCell',
        ),
        projectTypeDetails,
        projectCategories: {values: []},
        filters: projectDirectoryFilters.slice(0, 2),
        data: {
          values: DEFAULT_MOCK_DATA.values.filter(
            (project) => project.isPublic,
          ),
        },
      };
    case 'normal-user': // fall thru
    default:
      return {
        title: 'Projects',
        description:
          'This is the view for a user that is not an admin. This user also do not have permission to create a project',
        pageActions: [],
        headers: projectDirectoryHeaders.filter(
          (project) => project.showInMain,
        ),
        projectTypeDetails,
        projectCategories,
        filters: projectDirectoryFilters,
        data: DEFAULT_MOCK_DATA,
      };
  }
};
