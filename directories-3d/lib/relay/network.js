import {Network, QueryResponseCache} from 'relay-runtime';

import {registerLoader} from '../moduleLoader';

const ONE_MINUTE_IN_MS = 60 * 1000;

export function createNetwork() {
  const responseCache = new QueryResponseCache({
    size: 100,
    ttl: ONE_MINUTE_IN_MS,
  });

  async function fetchResponse(params, variables, cacheConfig) {
    const {id, text} = params;

    const isQuery = params.operationKind === 'query';
    const forceFetch = cacheConfig && cacheConfig.force;
    if (isQuery && !forceFetch) {
      const fromCache = null; //responseCache.get(id, variables); uncomment this when using persisted queries
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return networkFetch(id, variables, text);
  }

  async function fetchFn(...args) {
    const response = await fetchResponse(...args);

    if (Array.isArray(response.extensions?.modules)) {
      registerModuleLoaders(response.extensions.modules);
    }

    return response;
  }

  const network = Network.create(fetchFn);
  network.responseCache = responseCache;
  return network;
}

export async function networkFetch(id, variables, query) {
  // const url = process.env.VERCEL_URL ?
  //   `'https://${process.env.VERCEL_URL}/api/graphql'` :
  //   process.env.GRAPHQL_ENDPOINT ?? 'http://localhost:3000/api/graphql';
  const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/graphql`
    : process.env.GRAPHQL_ENDPOINT ?? 'http://localhost:3000/api/graphql';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      variables,
      query,
    }),
  });
  return response.json();
}

function registerModuleLoaders(modules) {
  modules.forEach((module) => {
    if (module.endsWith('$normalization.graphql')) {
      registerLoader(module, () => import(`../../__generated__/${module}`));
    } else {
      registerLoader(module, () => import(`../../components/3d/${module}`));
    }
  });
}
