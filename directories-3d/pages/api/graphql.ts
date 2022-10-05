import {ApolloServer} from 'apollo-server-micro';
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core';
import {GraphQLScalarType} from 'graphql';
// @ts-ignore Cannot find module or its corresponding type declarations
import typeDefs from '../../lib/schema/schema.graphql';
import type {NextApiRequest, NextApiResponse} from 'next';
import {
  PROJECT_DIRECTORY_CONFIG,
  projectTypeDetails,
  projectCategories,
} from '../../lib/mocks/projectsSearchData';

const JSDependencyScalar = new GraphQLScalarType({
  name: 'JSDependency',
  description: 'JSDependency custom scalar type',
  serialize(value) {
    return value; // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return value; // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    return null; // Invalid hard-coded value (not an integer)
  },
});

const JSFieldResolver = (args: {module: string}) => {
  seenDataDrivenDependencies.add(args.module);
  return args.module;
};

const resolvers = {
  JSDependency: JSDependencyScalar,
  JiraDirectory: {
    __resolveType(obj: any) {
      if (obj) {
        // TODO - check if this is a JiraProjectDirectory
        return 'JiraProjectDirectory';
      }
      return null; // GraphQLError is thrown
    },
  },
  JiraDirectoryCreateItem: {
    __resolveType(obj: any) {
      if (obj) {
        // TODO - check if this is a JiraProjectDirectoryCreateItem
        return 'JiraProjectDirectoryCreateItem';
      }
      return null; // GraphQLError is thrown
    },
  },
  JiraDirectoryResult: {
    __resolveType(obj: any) {
      if (obj) {
        // TODO - check if this is a JiraProjectDirectoryResult
        return 'JiraProjectDirectoryResult';
      }
      return null; // GraphQLError is thrown
    },
  },
  JiraDirectoryFilterCriteria: {
    __resolveType(obj: any) {
      if (obj.__typename) {
        return obj.__typename;
      }
      return null; // GraphQLError is thrown
    },
  },
  JiraDirectoryResultCellDataUnion: {
    __resolveType(obj: any) {
      if (obj.__typename) {
        return obj.__typename;
      }
      return null; // GraphQLError is thrown
    },
  },
  Query: {
    jira: () => ({
      directory: (args: {id: 'projects' | 'projectsAdmin'}) => {
        if (args.id == 'projects' || args.id == 'projectsAdmin') {
          // console.log('directory', args, rest);
          const directoryConfig =
            args.id == 'projectsAdmin'
              ? PROJECT_DIRECTORY_CONFIG(true)
              : PROJECT_DIRECTORY_CONFIG(false);
          return {
            title: `${directoryConfig.title}`,
            createDirectoryItem: () => {
              return directoryConfig.hasCreatePermission
                ? {
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
                    projectTypeDetails.values.slice(0, 2),
                  JiraProjectDirectoryProjectCategoriesFilterCriteria:
                    projectCategories.values.slice(0, 2),
                }[type];

                return {
                  __typename: type,
                  type,
                  selectedItems: data,
                  js: JSFieldResolver,
                };
              });
            },
            result: {
              js: JSFieldResolver,
              headers: directoryConfig.headers.map(
                ({title, isSortable, sortDirection}) => ({
                  __typename: 'JiraProjectDirectoryResultHeader',
                  title,
                  isSortable,
                  sortDirection,
                }),
              ),
              rows: directoryConfig.data.values.map((project) => ({
                __typename: 'JiraProjectDirectoryResultValues',
                columns: () => {
                  return directoryConfig.headers.map(({renderer}) => ({
                    __typename: 'JiraProjectDirectoryResultCell',
                    renderer: {
                      __typename: renderer,
                      js: JSFieldResolver,
                      project,
                    },
                  }));
                },
              })),
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
              // console.log('willSendResponse!', dddModules.length, dddModules);
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
