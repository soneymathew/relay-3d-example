import { ApolloServer, gql } from "apollo-server-micro";
import { allBlogPosts, findBlogPost } from "../blogPosts.mjs";
import typeDefs from "./sdl.mjs";
import { GraphQLScalarType, Kind } from "graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

const dateScalar = new GraphQLScalarType({
  name: "DateTime",
  description: "Date custom scalar type",
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const JSDependencyScalar = new GraphQLScalarType({
  name: "JSDependency",
  description: "JSDependency custom scalar type",
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

const JSFieldResolver = (parent, { id, module }, _context, _info) => {
  seenDataDrivenDependencies.add(module);
  return module;
};

const resolvers = {
  DateTime: dateScalar,
  JSDependency: JSDependencyScalar,
  Query: {
    viewer: () => ({
      test: () => true,
      allBlogPosts: (_parent, args, _context, _info) => allBlogPosts(args),
    }),
    blogPost: (_parent, args, _context, _info) => {
      return findBlogPost(args.id);
    },
  },
  BlogPost: {
    js: JSFieldResolver,
  },
  FancyBlogPost: {
    js: JSFieldResolver,
  },
};

const seenDataDrivenDependencies = new Set();
export const dataDrivenDependencies = {
  reset() {
    seenDataDrivenDependencies.clear();
  },
  getModules() {
    return Array.from(seenDataDrivenDependencies);
  },
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  /**
   * What's up with this embed: true option?
   * These are our recommended settings for using AS;
   * they aren't the defaults in AS3 for backwards-compatibility reasons but
   * will be the defaults in AS4. For production environments, use
   * ApolloServerPluginLandingPageProductionDefault instead.
   **/
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    {
      async requestDidStart(_requestContext) {
        dataDrivenDependencies.reset();
        return {
          async willSendResponse({ response }) {
            const dddModules = dataDrivenDependencies.getModules();
            if (dddModules.length > 0) {
              console.log("willSendResponse!" , dddModules.length, dddModules);
              const extensions =
                response.extensions ||
                (response.extensions = Object.create(null));

              // This should only happen if another plugin is using the same name-
              // space within the `extensions` object and got to it before us.
              if (typeof extensions.modules !== "undefined") {
                throw new Error("The `modules` extension was already present.");
              }
              extensions.modules = dddModules;
            }
          },
        };
      },
    },
  ],
});

// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });


export default server;