import {ApolloServer} from '@apollo/server';
import {startServerAndCreateNextHandler} from '@as-integrations/next';

import {GraphQLScalarType} from 'graphql';
import {connectionFromArray, type ConnectionArguments} from 'graphql-relay';
// @ts-ignore Cannot find module or its corresponding type declarations
import typeDefs from '../../lib/schema/schema.graphql';
import {PROJECT_DIRECTORY_CONFIG} from '../../lib/mocks/projectsSearchData';
import {ISSUE_DIRECTORY_CONFIG} from '../../lib/mocks/issueSearchData';
import {type Issue} from '../../lib/mocks/types';
import {getSortInfoFromJql} from '../../lib/utils';
import {projectFilter, issueSorter} from '../../lib/schema/utils';

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

const seenDataDrivenDependencies = new Set();
const dataDrivenDependencies = {
  reset() {
    seenDataDrivenDependencies.clear();
  },
  getModules() {
    return Array.from(seenDataDrivenDependencies);
  },
};

const JSFieldResolver = (args: {module: string}) => {
  seenDataDrivenDependencies.add(args.module);
  return args.module;
};
interface Criteria {
  id: string;
  type: 'KEYWORD' | 'MULTISELECT' | 'SELECT' | 'JQL_BUILDER_ADVANCED';
  value: string;
  values: string[];
}

const getFilterCriteria = (criteria: Criteria[]) => {
  let searchText = '';
  let jql = '';
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
      case 'JQL_BUILDER_ADVANCED':
        jql =
          criterion.id === 'JiraDirectoryJqlBuilderAdvancedCriteria'
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
  return {searchText, selectedProjectTypes, selectedCategory, jql};
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
                pageActions: (args: ConnectionArguments) => {
                  return {
                    ...connectionFromArray(
                      directoryConfig.pageActions.map((action) => ({
                        renderer: {
                          js: JSFieldResolver,
                          __typename: action.type,
                          id: action.name,
                          canPerform: true,
                        },
                      })),
                      args,
                    ),
                    __typename: 'JiraActionRendererConnection',
                    totalCount: directoryConfig.pageActions.length,
                  };
                },
                filterCriteria: (args: ConnectionArguments) => {
                  const filters = directoryConfig.filters.map((filter) => {
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
                      __typename: 'JiraGenericDirectoryFilterCriteriaRenderer',
                      renderer: {
                        __typename: filter.type,
                        type: filter.type,
                        searchText,
                        selectedItems: data,
                        js: JSFieldResolver,
                      },
                    };
                  });
                  return {
                    ...connectionFromArray(filters, args),
                    totalCount: filters.length,
                  };
                },
                result: {
                  __typename: 'JiraGenericDirectoryResult',
                  js: JSFieldResolver,
                  headers: () => {
                    const headerData = directoryConfig.headers.map(
                      ({title, isSortable, sortDirection, sortKey}) => ({
                        __typename: 'JiraDirectoryGenericResultHeader',
                        renderer: {
                          __typename: 'JiraDirectoryDefaultResultHeader',
                          title,
                          isSortable,
                          sortDirection,
                          sortKey,
                          js: JSFieldResolver,
                        },
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
                                  icon: {},
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
                                  defaultGenericFieldReturn.renderer['icon'] = {
                                    altText: project?.lead?.displayName,
                                    image: {
                                      medium: project?.lead?.avatar,
                                    },
                                    style: 'CIRCLE',
                                  };
                                  return defaultGenericFieldReturn;
                                case 'JiraProjectLastIssueUpdateCell':
                                  defaultGenericFieldReturn.renderer.label.stringValue =
                                    project?.lastIssueUpdateDate;
                                  return defaultGenericFieldReturn;
                                case 'JiraGenericFavouriteField':
                                  return {
                                    __typename:
                                      'JiraGenericDirectoryResultCell',
                                    renderer: {
                                      favoriteInfo: {
                                        __typename: 'JiraGenericFavoriteInfo',
                                        id: project.id + '/favorite',
                                        isFavorite: project.favourite,
                                      },
                                      __typename: 'JiraGenericFavouriteField',
                                      js: JSFieldResolver,
                                    },
                                  };
                                case 'JiraGenericActionsField':
                                  return {
                                    __typename:
                                      'JiraGenericDirectoryResultCell',
                                    renderer: {
                                      __typename: renderer,
                                      js: JSFieldResolver,
                                      ...(project.isPrivate
                                        ? {}
                                        : {
                                            actions: [
                                              ...(project.isPrivate
                                                ? []
                                                : [
                                                    {
                                                      __typename:
                                                        'JiraGenericAction',
                                                      id:
                                                        project.id +
                                                        '/createAction',
                                                      name: 'Project Settings',
                                                    },
                                                  ]),
                                            ],
                                          }),
                                    },
                                  };
                                default:
                                  throw new Error('Unhandled cell type');
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
              const {criteria = [], page = 1} = args.filter;
              const page_size = 10;
              const {jql} = getFilterCriteria(criteria);
              return {
                __typename: 'JiraIssueDirectory',
                js: JSFieldResolver,
                title: `${directoryConfig.title}`,
                description: `${directoryConfig.description}`,
                pageActions: (args: ConnectionArguments) => {
                  return {
                    ...connectionFromArray(
                      directoryConfig.pageActions.map(
                        (action: {type: string; name: string}) => ({
                          renderer: {
                            js: JSFieldResolver,
                            __typename: action.type,
                            id: action.name,
                            canPerform: true,
                          },
                        }),
                      ),
                      args,
                    ),
                    __typename: 'JiraActionRendererConnection',
                    totalCount: directoryConfig.pageActions.length,
                  };
                },
                filterCriteria: (args: ConnectionArguments) => {
                  const filters = directoryConfig.filters.map((filter) => {
                    return {
                      __typename: 'JiraGenericDirectoryFilterCriteriaRenderer',
                      renderer: {
                        __typename: filter.type,
                        type: filter.type,
                        jql,
                        js: JSFieldResolver,
                      },
                    };
                  });
                  return {
                    ...connectionFromArray(filters, args),
                    totalCount: filters.length,
                  };
                },
                result: {
                  __typename: 'JiraGenericDirectoryResult',
                  js: JSFieldResolver,
                  headers: () => {
                    const headerData = directoryConfig.headers.map(
                      ({
                        title,
                        isSortable,
                        sortDirection,
                        sortBy = 'created',
                      }) => ({
                        __typename: 'JiraDirectoryGenericResultHeader',
                        renderer: {
                          __typename: 'JiraDirectoryIssueResultHeader',
                          title,
                          isSortable,
                          sortDirection,
                          sortKey: sortBy,
                          js: JSFieldResolver,
                        },
                      }),
                    );
                    return {
                      ...connectionFromArray(headerData, {first: 100}), // FIX-ME: use connectionArgs
                      totalCount: headerData.length,
                    };
                  },
                  rows: () => {
                    const sortParams = getSortInfoFromJql(
                      jql ?? 'ORDER BY created ASC',
                    );
                    const sortField = sortParams[0] ?? 'created';
                    const sortDirection = sortParams[1] ?? 'ASC';
                    const matchedIssues = directoryConfig.data.issues
                      .sort((a, b) =>
                        issueSorter(a, b, sortField, sortDirection),
                      )
                      .map((issue: Issue) => ({
                        __typename: 'JiraGenericDirectoryResultValues',
                        columns: () => {
                          const columnsData = directoryConfig.headers.map(
                            ({mapper, __typename}) => {
                              if (__typename === 'JiraGenericFieldConnection') {
                                const labelMapArr = mapper(issue);
                                return {
                                  __typename: 'JiraGenericDirectoryResultCell',
                                  renderer: {
                                    js: JSFieldResolver,
                                    delimiter: ',',
                                    __typename: 'JiraGenericFieldCollection',
                                    fields: (
                                      args: {
                                        searchText: string;
                                        cloudId: string;
                                      } & ConnectionArguments,
                                    ) => {
                                      return {
                                        ...connectionFromArray(
                                          (labelMapArr instanceof Array
                                            ? labelMapArr
                                            : []
                                          ).map((label) => ({
                                            js: JSFieldResolver,
                                            __typename: 'JiraGenericField',
                                            ...label,
                                          })),
                                          {
                                            first: args.first,
                                            after: Buffer.from(
                                              `arrayconnection:${
                                                (page - 1) * page_size - 1
                                              }`,
                                            ).toString('base64'),
                                            // FIX-ME: fix edge case when page > max-page-size
                                          },
                                        ),
                                        __typename:
                                          'JiraGenericFieldConnection',
                                        totalCount:
                                          labelMapArr instanceof Array
                                            ? labelMapArr.length
                                            : null,
                                      };
                                    },
                                  },
                                };
                              } else if (
                                __typename === 'JiraGenericActionsField'
                              ) {
                                const actionMapArr = mapper(issue);
                                return {
                                  __typename: 'JiraGenericDirectoryResultCell',
                                  renderer: {
                                    js: JSFieldResolver,
                                    __typename: 'JiraGenericActionsField',
                                    actions: (args: ConnectionArguments) => {
                                      return {
                                        ...connectionFromArray(
                                          (actionMapArr instanceof Array
                                            ? actionMapArr
                                            : []
                                          ).map((action) => ({
                                            renderer: {
                                              js: JSFieldResolver,
                                              ...action,
                                            },
                                          })),
                                          {
                                            first: args.first,
                                            after: Buffer.from(
                                              `arrayconnection:${
                                                (page - 1) * page_size - 1
                                              }`,
                                            ).toString('base64'),
                                            // FIX-ME: fix edge case when page > max-page-size
                                          },
                                        ),
                                        __typename:
                                          'JiraActionRendererConnection',
                                        totalCount:
                                          actionMapArr instanceof Array
                                            ? actionMapArr.length
                                            : null,
                                      };
                                    },
                                  },
                                };
                              }
                              return {
                                __typename: 'JiraGenericDirectoryResultCell',
                                renderer: {
                                  js: JSFieldResolver,
                                  __typename,
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
                      }));
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
