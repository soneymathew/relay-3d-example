import fs from 'fs';
import getConfig from 'next/config';
import {ApolloServer} from 'apollo-server-micro';
import path from 'path';
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core';
import {GraphQLScalarType} from 'graphql';

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

const JSFieldResolver = (parent, args, _context, _info) => {
  seenDataDrivenDependencies.add(args.module);
  return 'module';
};

const resolvers = {
  JSDependency: JSDependencyScalar,
  JiraProjectDirectoryResult: {
    js: JSFieldResolver,
  },
  JiraProjectDirectory: {
    js: JSFieldResolver,
  },
  JiraProjectDirectoryCreateItem: {
    js: JSFieldResolver,
  },
  JiraDirectorySearchTextFilterCriteria: {
    js: JSFieldResolver,
  },
  JiraProjectDirectoryProjectTypesFilterCriteria: {
    js: JSFieldResolver,
  },
  JiraProjectDirectoryProjectCategoriesFilterCriteria: {
    js: JSFieldResolver,
  },

  JiraProjectFavouriteCell: {
    js: JSFieldResolver,
  },
  JiraProjectKeyCell: {
    js: JSFieldResolver,
  },
  JiraProjectNameCell: {
    js: JSFieldResolver,
  },
  JiraProjectTypeCell: {
    js: JSFieldResolver,
  },
  JiraProjectLeadCell: {
    js: JSFieldResolver,
  },
  JiraProjectLastIssueUpdateCell: {
    js: JSFieldResolver,
  },
  JiraProjectCategoryCell: {
    js: JSFieldResolver,
  },
  JiraProjectLinkCell: {
    js: JSFieldResolver,
  },
  JiraProjectActionsCell: {
    js: JSFieldResolver,
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
  mocks: true,
  mockEntireSchema: false,
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
              console.log('willSendResponse!', dddModules.length, dddModules);
              const extensions =
                response.extensions ||
                (response.extensions = Object.create(null));

              // This should only happen if another plugin is using the same name-
              // space within the `extensions` object and got to it before us.
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
