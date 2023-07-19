const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const relay = require('./relay.config.json');
/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  compiler: {
    relay: {
      src: relay.src,
      artifactDirectory: relay.artifactDirectory,
      language: relay.language,
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
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['relay.dev'],
  },
});

module.exports = nextConfig;
