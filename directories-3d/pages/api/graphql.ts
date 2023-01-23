import {ApolloServer} from 'apollo-server-micro';
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core';
import {GraphQLScalarType} from 'graphql';
import {connectionFromArray, type ConnectionArguments} from 'graphql-relay';
// @ts-ignore Cannot find module or its corresponding type declarations
import typeDefs from '../../lib/schema/schema.graphql';
import type {NextApiRequest, NextApiResponse} from 'next';
import {
  PROJECT_DIRECTORY_CONFIG,
  projectTypeDetails,
  projectCategories,
} from '../../lib/mocks/projectsSearchData';

import {projectFilter} from '../../lib/schema/utils';

const JSDependencyScalar = new GraphQLScalarType({
  name: 'JSDependency',
  description: 'JSDependency custom scalar type',
  serialize(value) {
    return value;
  },
  parseValue(value) {
    return value;
  },
  parseLiteral(_ast) {
    return null;
  },
});

const JSFieldResolver = (args: {module: string}) => {
  seenDataDrivenDependencies.add(args.module);
  return args.module;
};
interface Criteria {
  id: string;
  type: 'KEYWORD' | 'MULTISELECT' | 'SELECT';
  value: string;
  values: string[];
}

const getFilterCriteria = (criteria: Criteria[]) => {
  let searchText = '';
  let selectedCategory = '';
  let selectedProjectTypes: String[] = [];
  for (let index = 0; index < criteria.length; index++) {
    const criterion = criteria[index];
    switch (criterion.type) {
      case 'KEYWORD':
        searchText =
          criterion.id === 'JiraDirectorySearchTextFilterCriteria'
            ? criterion.value
            : '';
        break;
      case 'MULTISELECT':
        if (criterion.id === 'JiraProjectDirectoryProjectTypesFilterCriteria') {
          selectedProjectTypes = criterion.values ? [...criterion.values] : [];
        }
        break;
      case 'SELECT':
        selectedCategory =
          criterion.id === 'JiraProjectDirectoryProjectCategoriesFilterCriteria'
            ? criterion.value
            : '';
        break;
      default:
        break;
    }
  }
  return {searchText, selectedProjectTypes, selectedCategory};
};

const resolvers = {
  JSDependency: JSDependencyScalar,
  Query: {
    jira: () => ({
      projectCategories: (args: {searchText: string} & ConnectionArguments) => {
        const filteredProjectCategories = projectCategories.values.filter(
          (projectCategory) =>
            args?.searchText?.length > 0
              ? projectCategory.name
                  .toLowerCase()
                  .search(args?.searchText.toLowerCase()) !== -1
              : true,
        );
        return {
          ...connectionFromArray(filteredProjectCategories, args),
          totalCount: filteredProjectCategories.length,
        };
      },
      projectTypes: (args: {searchText: string} & ConnectionArguments) => {
        const filteredProjectTypeDetails = projectTypeDetails.values.filter(
          (projectTypeDetail) =>
            args?.searchText?.length > 0
              ? projectTypeDetail.displayName
                  .toLowerCase()
                  .search(args?.searchText.toLowerCase()) !== -1
              : true,
        );
        return {
          ...connectionFromArray(filteredProjectTypeDetails, args),
          totalCount: filteredProjectTypeDetails.length,
        };
      },
      directory: (args: {
        id: 'projects' | 'projectsAdmin';
        filter: {
          criteria: Criteria[];
          sortField: string;
          sortDirection: 'ASC' | 'DESC';
          page: number;
        };
      }) => {
        if (args.id == 'projects' || args.id == 'projectsAdmin') {
          const directoryConfig =
            args.id == 'projectsAdmin'
              ? PROJECT_DIRECTORY_CONFIG(true)
              : PROJECT_DIRECTORY_CONFIG(false);

          const {
            criteria = [],
            sortField = 'name',
            sortDirection = 'ASC',
            page = 1,
          } = args.filter;
          const page_size = 10;
          const {searchText, selectedCategory, selectedProjectTypes} =
            getFilterCriteria(criteria);
          return {
            __typename: 'JiraProjectDirectory',
            title: `${directoryConfig.title}`,
            description: `${directoryConfig.description}`,
            createDirectoryItem: () => {
              return directoryConfig.hasCreatePermission
                ? {
                    __typename: 'JiraProjectDirectoryCreateItem',
                    canCreate: directoryConfig.hasCreatePermission,
                    js: JSFieldResolver,
                  }
                : null;
            },
            filterCriteria: (args: {supported: string[]}) => {
              return args.supported.map((type) => {
                // Drive this based on request params and directoryConfig
                const data = {
                  JiraProjectDirectoryProjectTypesFilterCriteria:
                    projectTypeDetails.values.filter((projectTypeDetail) =>
                      selectedProjectTypes?.length > 0
                        ? selectedProjectTypes.includes(
                            projectTypeDetail.type.toLowerCase(),
                          )
                        : false,
                    ),
                  JiraProjectDirectoryProjectCategoriesFilterCriteria:
                    projectCategories.values.filter(
                      (category) => category.categoryId === selectedCategory,
                    ),
                }[type];

                return {
                  __typename: type,
                  type,
                  searchText,
                  selectedItems: data,
                  js: JSFieldResolver,
                };
              });
            },
            result: {
              __typename: 'JiraProjectDirectoryResult',
              js: JSFieldResolver,
              headers: () => {
                const headerData = directoryConfig.headers.map(
                  ({title, isSortable, sortDirection, sortKey}) => ({
                    __typename: 'JiraDirectoryDefaultResultHeader',
                    title,
                    isSortable,
                    sortDirection,
                    sortKey,
                  }),
                );
                return {
                  ...connectionFromArray(headerData, {first: 100}), // TODO: use connectionArgs
                  totalCount: headerData.length,
                };
              },
              rows: () => {
                const matchedProjects = directoryConfig.data.values
                  .filter((project) => {
                    const hasSearchText = searchText?.length > 0;
                    const hasSelectedCategory = selectedCategory?.length > 0;
                    const hasSelectedProjectTypes =
                      selectedProjectTypes?.join('').length > 0;
                    const matchesSearchText = hasSearchText
                      ? project.name
                          .toLowerCase()
                          .search(searchText.toLowerCase()) !== -1
                      : false;
                    const matchesSelectedCategory = hasSelectedCategory
                      ? project.category?.categoryId === selectedCategory
                      : false;
                    const matchesSelectedProjectTypes = hasSelectedProjectTypes
                      ? selectedProjectTypes.includes(
                          project.projectType.type.toLowerCase(),
                        )
                      : false;
                    return projectFilter(
                      hasSearchText,
                      hasSelectedCategory,
                      hasSelectedProjectTypes,
                      matchesSearchText,
                      matchesSelectedCategory,
                      matchesSelectedProjectTypes,
                    );
                  })
                  .sort((a, b) => {
                    let firstValue: string = '';
                    let secondValue: string = '';
                    switch (sortField.toLowerCase()) {
                      case 'key':
                        firstValue = a.key.toUpperCase();
                        secondValue = b.key.toUpperCase();
                        break;
                      case 'owner':
                        firstValue = a.lead.displayName.toUpperCase();
                        secondValue = b.lead.displayName.toUpperCase();
                        break;
                      case 'category':
                        firstValue = a.category
                          ? a.category?.name.toUpperCase()
                          : '';
                        secondValue = b.category
                          ? b.category?.name.toUpperCase()
                          : '';
                        break;
                      case 'lastissueupdatedtime':
                        firstValue = a.lastIssueUpdateDate;
                        secondValue = b.lastIssueUpdateDate;
                        break;
                      case 'name': // fallthru to default
                      default:
                        firstValue = a.name.toUpperCase();
                        secondValue = b.name.toUpperCase();
                    }
                    return firstValue === secondValue
                      ? 0
                      : sortDirection === 'DESC'
                      ? firstValue > secondValue
                        ? -1
                        : 1
                      : firstValue < secondValue
                      ? -1
                      : 1;
                  })
                  //.slice((page - 1) * page_size, page * page_size)
                  .map((project) => ({
                    __typename: 'JiraProjectDirectoryResultValues',
                    columns: () => {
                      const columnsData = directoryConfig.headers.map(
                        ({renderer}) => ({
                          __typename: 'JiraProjectDirectoryResultCell',
                          renderer: {
                            __typename: renderer,
                            js: JSFieldResolver,
                            project,
                          },
                        }),
                      );
                      return {
                        ...connectionFromArray(columnsData, {first: 10}), // TODO: use connectionArgs
                        totalCount: columnsData.length,
                      };
                    },
                  }));
                return {
                  ...connectionFromArray(matchedProjects, {
                    first: page_size,
                    after: Buffer.from(
                      `arrayconnection:${(page - 1) * page_size - 1}`,
                    ).toString('base64'),
                    // TODO: fix edge case when page > max-page-size
                  }),
                  totalCount: matchedProjects.length,
                };
              },
            },
            js: JSFieldResolver,
          };
        }
        return null;
      },
    }),
  },
};

const seenDataDrivenDependencies = new Set();
const dataDrivenDependencies = {
  reset() {
    seenDataDrivenDependencies.clear();
  },
  getModules() {
    return Array.from(seenDataDrivenDependencies);
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // mocks: true,
  // mockEntireSchema: false,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({embed: true}),
    {
      async requestDidStart(_requestContext) {
        dataDrivenDependencies.reset();
        return {
          async willSendResponse({response}) {
            const dddModules = dataDrivenDependencies.getModules();
            if (dddModules.length > 0) {
              const extensions =
                response.extensions ||
                (response.extensions = Object.create(null));
              if (typeof extensions.modules !== 'undefined') {
                throw new Error('The `modules` extension was already present.');
              }
              extensions.modules = dddModules;
            }
          },
        };
      },
    },
  ],
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
