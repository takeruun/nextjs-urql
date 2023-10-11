'use client';

import { UrqlProvider, ssrExchange, cacheExchange, fetchExchange, createClient } from '@urql/next';
import Items from './components/csr/Items';
import { useMemo } from 'react';

export default function Home() {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange();
    const client = createClient({
      url: 'http://localhost:8080/v1/graphql',
      fetchOptions: {
        headers:{
          'x-hasura-admin-secret': 'secret'
        }
      },
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);
  
  return (
    <UrqlProvider client={client} ssr={ssr}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Items/>
      </main>
    </UrqlProvider>
  )
}
