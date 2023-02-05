import {Network, QueryResponseCache} from 'relay-runtime';

import {registerLoader} from '../moduleLoader';

const ONE_MINUTE_IN_MS = 60 * 1000;

export function createNetwork() {
  const responseCache = new QueryResponseCache({
    size: 100,
    ttl: ONE_MINUTE_IN_MS,
  });

  async function fetchResponse(
    params: {operationKind?: any; id?: any; text?: any},
    variables: undefined,
    cacheConfig: {force: any} | undefined,
  ) {
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

  async function fetchFn(...args: any[]) {
    // @ts-ignore A spread argument must either have a tuple type or be passed to a rest parameter.
    const response = await fetchResponse(...args);

    if (Array.isArray(response.extensions?.modules)) {
      registerModuleLoaders(response.extensions.modules);
    }

    return response;
  }

  const network = Network.create(fetchFn);
  // @ts-ignore Property 'responseCache' does not exist on type 'Network'
  network.responseCache = responseCache;
  return network;
}

export async function networkFetch(id: any, variables: any, query: any) {
  const IS_SERVER = typeof window === typeof undefined;
  const url = IS_SERVER
    ? process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/graphql`
      : process.env.GRAPHQL_ENDPOINT ?? 'http://localhost:3000/api/graphql'
    : `${window.location.origin}/api/graphql`;
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

function registerModuleLoaders(modules: string[]) {
  modules.forEach((module) => {
    if (module.endsWith('$normalization.graphql')) {
      registerLoader(module, () => import(`../../__generated__/${module}`));
    } else {
      registerLoader(module, () => import(`../../components/3d/${module}`));
    }
  });
}
