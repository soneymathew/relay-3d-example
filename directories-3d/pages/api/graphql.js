import fs from 'fs';
import getConfig from 'next/config';
import { ApolloServer } from 'apollo-server-micro';
import path from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { GraphQLScalarType } from 'graphql';
import projectData from '../../lib/mocks/projectData.mjs';
import {
  PROJECT_DIRECTORY_CONFIG,
} from '../../lib/mocks/projectsSearchData';

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
        if (args.id == 'projects' || args.id == 'projectsAdmin') {
          // console.log('directory', args, rest);
          const directoryConfig =
            args.id == 'projectsAdmin'
              ? PROJECT_DIRECTORY_CONFIG(true)
              : PROJECT_DIRECTORY_CONFIG(false);
          return {
            title: `${directoryConfig.title}`,
            createDirectoryItem: (args, ...rest) => {
              return {
                canCreate: true,
                js: JSFieldResolver,
              };
            },
            filterCriteria: (args, ...rest) => {
              return args.supported.map((type) => { // Drive this based on request params and directoryConfig
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
              headers: directoryConfig.headers.map(
                ({ title, isSortable, sortDirection }) => ({
                  __typename: 'JiraProjectDirectoryResultHeader',
                  title,
                  isSortable,
                  sortDirection,
                }),
              ),
              rows: directoryConfig.data.values.map((project) => ({
                __typename: 'JiraProjectDirectoryResultValues',
                columns: (args, ...rest) => {
                  return directoryConfig.headers.map(({ renderer }) => ({
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
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    {
      async requestDidStart(_requestContext) {
        dataDrivenDependencies.reset();
        return {
          async willSendResponse({ response }) {
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
