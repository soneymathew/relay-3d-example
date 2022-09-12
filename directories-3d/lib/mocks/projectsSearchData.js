import Chance from "chance";

const chance = new Chance(12345678);

export const DEFAULT_MOCK_DATA = {
  maxResults: 25,
  startAt: 0,
  total: 2337,
  isLast: false,
  values: Array(25).fill().map((_v, i) => {
    const leadEmail = chance.email({ domain: "example.com" });
    return ({
      id: chance.guid() + i,
      key: chance.unique(chance.state, 25)[i],
      lead: {
        displayName: leadEmail,
        avatar: `https://i.pravatar.cc/150?u=${leadEmail}`,
      },
      name: chance.company(),
      projectTypeKey: chance.pickone(['Software', 'Service Desk', 'Core']),
      simplified: chance.bool({ likelihood: 10 }),
      favourite: chance.bool({ likelihood: 20 }),
      isPrivate: chance.bool({ likelihood: 5 }),
      entityId: `entity-${chance.guid()}`,
      uuid: chance.guid(),
      todo: 'todo',
      lastIssueUpdateDate: (new Date(chance.date({ year: 2021 }))).toLocaleString('en-US'),
    })
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


export const PROJECT_DIRECTORY_CONFIG = (isAdmin) => isAdmin ?
  {
    title: 'Manage Projects',
    headers: projectDirectoryHeaders.filter(project => project.showInAdmin),
    data: DEFAULT_MOCK_DATA
  } :
  {
    title: 'Projects',
    headers: projectDirectoryHeaders.filter(project => project.showInMain),
    data: DEFAULT_MOCK_DATA
  }
