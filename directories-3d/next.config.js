const relay = require('./relay.config.json');

module.exports = {
  compiler: {
    relay: {
      src: relay.src,
      artifactDirectory: relay.artifactDirectory,
    },
    externalDir: true,
  },
  experimental: {
    runtime: 'nodejs',
    concurrentFeatures: true,
  },
  serverRuntimeConfig: {
    projectRoot: __dirname,
  },
  webpack: (
    config,
    {buildId, dev, isServer, defaultLoaders, nextRuntime, webpack},
  ) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
};
