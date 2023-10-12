import { cacheExchange, createClient, fetchExchange, gql } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

const makeClient = () => {
  return createClient({
    url: 'http://localhost:8080/v1/graphql',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers:{
        'x-hasura-admin-secret': 'secret'
      }
    },
  });
};

export const { getClient } = registerUrql(makeClient);