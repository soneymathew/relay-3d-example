import {networkFetch} from './network';
import {ConcreteRequest, Variables} from 'relay-runtime';

export async function getPreloadedQuery(
  {params}: ConcreteRequest,
  variables: Variables,
) {
  // console.log('**********getPreloadedQuery', query, variables);
  const response = await networkFetch(null, variables, params.text);
  return {
    params,
    variables,
    response,
  };
}
