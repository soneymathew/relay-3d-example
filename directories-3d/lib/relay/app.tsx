import {ReactRelayContext, useRelayEnvironment} from 'react-relay';
import {Suspense, useMemo} from 'react';
import {NextComponentType, NextPageContext} from 'next';
import {createEnvironment} from './environment';

interface ComponentProps {
  Component: NextComponentType<NextPageContext, any, any>;
  props: any;
}

export function ReactRelayContainer({Component, props}: ComponentProps) {
  const environment = useMemo(() => createEnvironment(), []);
  return (
    <ReactRelayContext.Provider value={{environment}}>
      <Suspense fallback={null}>
        <Hydrate Component={Component} props={props} />
      </Suspense>
    </ReactRelayContext.Provider>
  );
}

function Hydrate({Component, props}: ComponentProps) {
  const environment = useRelayEnvironment();

  const transformedProps = useMemo(() => {
    if (props == null) {
      return props;
    }
    const {preloadedQueries, ...otherProps} = props;
    if (preloadedQueries == null) {
      return props;
    }

    const queryRefs = {};
    // @ts-ignore Property 'params, variables, response' does not exist on type 'unknown'
    for (const [queryName, {params, variables, response}] of Object.entries(
      preloadedQueries,
    )) {
      environment
        .getNetwork()
        // @ts-ignore Property 'responseCache' does not exist on type 'Network'
        .responseCache.set(params.id, variables, response);
      // @ts-ignore TODO: create using a function exported from react-relay package
      queryRefs[queryName] = {
        environment,
        fetchKey: params.id,
        fetchPolicy: 'store-or-network',
        isDisposed: false,
        name: params.name,
        kind: 'PreloadedQuery',
        variables,
      };
    }

    return {...otherProps, queryRefs};
  }, [props, environment]);

  return <Component {...transformedProps} />;
}
