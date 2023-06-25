import {ApolloServer} from '@apollo/server';
import {startServerAndCreateNextHandler} from '@as-integrations/next';

import {GraphQLScalarType} from 'graphql';
import {connectionFromArray, type ConnectionArguments} from 'graphql-relay';
// @ts-ignore Cannot find module or its corresponding type declarations
import typeDefs from '../../lib/schema/schema.graphql';
import {PROJECT_DIRECTORY_CONFIG} from '../../lib/mocks/projectsSearchData';
import {ISSUE_DIRECTORY_CONFIG} from '../../lib/mocks/issueSearchData';

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
        if (criterion.id === 'JiraGenericDirectoryProjectTypesFilterCriteria') {
          selectedProjectTypes = criterion.values ? [...criterion.values] : [];
        }
        break;
      case 'SELECT':
        selectedCategory =
          criterion.id === 'JiraGenericDirectoryProjectCategoriesFilterCriteria'
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
      projectCategories: (
        args: {searchText: string; cloudId: string} & ConnectionArguments,
      ) => {
        const filteredProjectCategories = PROJECT_DIRECTORY_CONFIG(
          args.cloudId,
        ).projectCategories.values.filter((projectCategory) =>
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
      projectTypes: (
        args: {searchText: string; cloudId: string} & ConnectionArguments,
      ) => {
        const filteredProjectTypeDetails = PROJECT_DIRECTORY_CONFIG(
          args.cloudId,
        ).projectTypeDetails.values.filter((projectTypeDetail) =>
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
        cloudId: string;
        id: 'projects' | 'issues';
        filter: {
          criteria: Criteria[];
          sortField: string;
          sortDirection: 'ASC' | 'DESC';
          page: number;
        };
      }) => {
        switch (args.id) {
          case 'projects': {
            const directoryConfig =
              args.id === 'projects'
                ? PROJECT_DIRECTORY_CONFIG(args.cloudId)
                : null;
            if (directoryConfig) {
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
                __typename: 'JiraGenericDirectory',
                title: `${directoryConfig.title}`,
                description: `${directoryConfig.description}`,
                createDirectoryItem: () => {
                  return directoryConfig.hasCreatePermission
                    ? {
                        __typename: 'JiraGenericDirectoryCreateItem',
                        canCreate: directoryConfig.hasCreatePermission,
                        js: JSFieldResolver,
                      }
                    : null;
                },
                filterCriteria: (args: {supported: string[]}) => {
                  return directoryConfig.filters.map((filter) => {
                    // Drive this based on request params and directoryConfig
                    const data = {
                      JiraGenericDirectoryProjectTypesFilterCriteria:
                        directoryConfig.projectTypeDetails.values.filter(
                          (projectTypeDetail) =>
                            selectedProjectTypes?.length > 0
                              ? selectedProjectTypes.includes(
                                  projectTypeDetail.type.toLowerCase(),
                                )
                              : false,
                        ),
                      JiraGenericDirectoryProjectCategoriesFilterCriteria:
                        directoryConfig.projectCategories.values.filter(
                          (category) =>
                            category.categoryId === selectedCategory,
                        ),
                    }[filter.type];

                    return {
                      __typename: filter.type,
                      type: filter.type,
                      searchText,
                      selectedItems: data,
                      js: JSFieldResolver,
                    };
                  });
                },
                result: {
                  __typename: 'JiraGenericDirectoryResult',
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
                      ...connectionFromArray(headerData, {first: 100}), // FIX-ME: use connectionArgs
                      totalCount: headerData.length,
                    };
                  },
                  rows: () => {
                    const matchedProjects = directoryConfig.data.values
                      .filter((project) => {
                        const hasSearchText = searchText?.length > 0;
                        const hasSelectedCategory =
                          selectedCategory?.length > 0;
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
                        const matchesSelectedProjectTypes =
                          hasSelectedProjectTypes
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
                      .map((project) => ({
                        __typename: 'JiraGenericDirectoryResultValues',
                        columns: () => {
                          const columnsData = directoryConfig.headers.map(
                            ({renderer}) => {
                              const defaultGenericFieldReturn = {
                                __typename: 'JiraGenericDirectoryResultCell',
                                renderer: {
                                  __typename: 'JiraGenericField',
                                  js: JSFieldResolver,
                                  label: {
                                    stringValue: '',
                                    linkUrl: '',
                                  },
                                },
                              };
                              switch (renderer) {
                                case 'JiraProjectCategoryCell':
                                  if (project.category) {
                                    defaultGenericFieldReturn.renderer.label.stringValue =
                                      project.category.name;
                                    return defaultGenericFieldReturn;
                                  }
                                  return null;
                                case 'JiraProjectLinkCell':
                                  if (project.url) {
                                    defaultGenericFieldReturn.renderer.label.linkUrl =
                                      project.url;
                                    return defaultGenericFieldReturn;
                                  }
                                  return null;
                                case 'JiraProjectNameCell':
                                  defaultGenericFieldReturn.renderer.label.stringValue =
                                    project.name;
                                  return defaultGenericFieldReturn;
                                case 'JiraProjectKeyCell':
                                  defaultGenericFieldReturn.renderer.label.stringValue =
                                    project.key;
                                  return defaultGenericFieldReturn;
                                case 'JiraProjectTypeCell':
                                  defaultGenericFieldReturn.renderer.label.stringValue =
                                    project.simplified
                                      ? project?.projectType
                                          ?.teamManagedDisplayName
                                      : project?.projectType
                                          ?.companyManagedDisplayName;
                                  return defaultGenericFieldReturn;
                                case 'JiraProjectLeadCell':
                                  defaultGenericFieldReturn.renderer.label.stringValue =
                                    project?.lead?.displayName;
                                  return defaultGenericFieldReturn;
                                case 'JiraProjectLastIssueUpdateCell':
                                  defaultGenericFieldReturn.renderer.label.stringValue =
                                    project?.lastIssueUpdateDate;
                                  return defaultGenericFieldReturn;
                                case 'JiraProjectActionsCell':
                                case 'JiraProjectFavouriteCell':
                                default:
                                  return {
                                    __typename:
                                      'JiraGenericDirectoryResultCell',
                                    renderer: {
                                      __typename: renderer,
                                      js: JSFieldResolver,
                                      project,
                                    },
                                  };
                              }
                            },
                          );
                          return {
                            ...connectionFromArray(columnsData, {
                              first: directoryConfig.headers.length,
                            }), // FIX-ME: use connectionArgs
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
                        // FIX-ME: fix edge case when page > max-page-size
                      }),
                      totalCount: matchedProjects.length,
                    };
                  },
                },
                js: JSFieldResolver,
              };
            }
          }
          case 'issues': {
            const directoryConfig = ISSUE_DIRECTORY_CONFIG(args.cloudId);
            if (directoryConfig) {
              return {
                __typename: 'JiraIssueDirectory',
                js: JSFieldResolver,
                title: `${directoryConfig.title}`,
                description: `${directoryConfig.description}`,
                createDirectoryItem: null,
                filterCriteria: [],
                result: {
                  __typename: 'JiraGenericDirectoryResult',
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
                      ...connectionFromArray(headerData, {first: 100}), // FIX-ME: use connectionArgs
                      totalCount: headerData.length,
                    };
                  },
                  rows: () => {
                    const matchedIssues = directoryConfig.data.issues.map(
                      (issue) => ({
                        __typename: 'JiraGenericDirectoryResultValues',
                        columns: () => {
                          const columnsData = directoryConfig.headers.map(
                            ({mapper}) => {
                              return {
                                __typename: 'JiraGenericDirectoryResultCell',
                                renderer: {
                                  __typename: 'JiraGenericField',
                                  js: JSFieldResolver,
                                  ...mapper(issue),
                                },
                              };
                            },
                          );
                          return {
                            ...connectionFromArray(columnsData, {
                              first: directoryConfig.headers.length,
                            }), // FIX-ME: use connectionArgs
                            totalCount: columnsData.length,
                          };
                        },
                      }),
                    );
                    const page_size = 20;
                    const page = 1;
                    return {
                      ...connectionFromArray(matchedIssues, {
                        first: page_size,
                        after: Buffer.from(
                          `arrayconnection:${(page - 1) * page_size - 1}`,
                        ).toString('base64'),
                        // FIX-ME: fix edge case when page > max-page-size
                      }),
                      totalCount: matchedIssues.length,
                    };
                  },
                },
              };
            }
          }
          default:
            return null;
        }
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
  introspection: true,
  plugins: [
    {
      async requestDidStart() {
        return {
          async willSendResponse(requestContext) {
            const {response} = requestContext;
            const dddModules = dataDrivenDependencies.getModules();
            if (
              dddModules.length > 0 &&
              response.body.kind === 'single' &&
              'data' in response.body.singleResult
            ) {
              response.body.singleResult.extensions = {
                ...response.body.singleResult.extensions,
                modules: dddModules,
              };
            }
          },
        };
      },
    },
  ],
});

export default startServerAndCreateNextHandler(apolloServer);
