import fs from 'fs';
import getConfig from 'next/config';
import {ApolloServer} from 'apollo-server-micro';
import path from 'path';
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core';
import {GraphQLScalarType} from 'graphql';
import projectData, {
  projectDirectoryHeaders,
  adminProjectDirectoryHeaders,
} from '../../lib/mocks/projectData.mjs';
import {DEFAULT_MOCK_DATA} from '../../lib/mocks/projectsSearchData';

const MOCKED_PROJECT_DATA = DEFAULT_MOCK_DATA.values;
// .sort(() => Math.random() - 0.5)
// .slice(0, 30);

const SCHEMA_FILE = path.resolve(
  getConfig().serverRuntimeConfig.projectRoot,
  './schema/schema.graphql',
);
const typeDefs = fs.readFileSync(SCHEMA_FILE, 'utf8');

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

const JSFieldResolver = (args, ..._rest) => {
  seenDataDrivenDependencies.add(args.module);
  return args.module;
};

const resolvers = {
  JSDependency: JSDependencyScalar,
  JiraDirectory: {
    __resolveType(obj, context, info) {
      if (obj) {
        // TODO - check if this is a JiraProjectDirectory
        return 'JiraProjectDirectory';
      }
      return null; // GraphQLError is thrown
    },
  },
  JiraDirectoryCreateItem: {
    __resolveType(obj, context, info) {
      if (obj) {
        // TODO - check if this is a JiraProjectDirectoryCreateItem
        return 'JiraProjectDirectoryCreateItem';
      }
      return null; // GraphQLError is thrown
    },
  },
  JiraDirectoryResult: {
    __resolveType(obj, context, info) {
      if (obj) {
        // TODO - check if this is a JiraProjectDirectoryResult
        return 'JiraProjectDirectoryResult';
      }
      return null; // GraphQLError is thrown
    },
  },
  JiraDirectoryFilterCriteria: {
    __resolveType(obj, context, info) {
      if (obj.__typename) {
        return obj.__typename;
      }
      return null; // GraphQLError is thrown
    },
  },
  JiraDirectoryResultCellDataUnion: {
    __resolveType(obj, context, info) {
      if (obj.__typename) {
        return obj.__typename;
      }
      return null; // GraphQLError is thrown
    },
  },
  Query: {
    jira: () => ({
      directory: (args, ...rest) => {
        // console.log('directory', args, rest);
        const tableHeaders =
          args.id == 'projects'
            ? projectDirectoryHeaders
            : adminProjectDirectoryHeaders;

        if (args.id == 'projects' || args.id == 'projectsAdmin') {
          return {
            title: `${args.id.toUpperCase()}`,
            createDirectoryItem: (args, ...rest) => {
              return {
                canCreate: true,
                js: JSFieldResolver,
              };
            },
            filterCriteria: (args, ...rest) => {
              // console.log({args});

              return args.supported.map((type) => {
                const data = {
                  JiraProjectDirectoryProjectTypesFilterCriteria:
                    projectData.availableProjectTypes.slice(0, 2),
                  JiraProjectDirectoryProjectCategoriesFilterCriteria:
                    projectData.categories.slice(0, 2),
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
              headers: tableHeaders.map(
                ({title, isSortable, sortDirection}) => ({
                  __typename: 'JiraProjectDirectoryResultHeader',
                  title,
                  isSortable,
                  sortDirection,
                }),
              ),
              rows: MOCKED_PROJECT_DATA.map((project) => ({
                __typename: 'JiraProjectDirectoryResultValues',
                columns: (args, ...rest) => {
                  return tableHeaders.map(({renderer}) => ({
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

export default async function handler(req, res) {
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
