'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import { UrqlProvider, ssrExchange, cacheExchange, fetchExchange, createClient } from '@urql/next';
// import { refocusExchange } from '@urql/exchange-refocus';
import { useMemo } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange();
    const client = createClient({
      url: 'http://localhost:8080/v1/graphql',
      fetchOptions: {
        headers:{
          'x-hasura-admin-secret': 'secret'
        }
      },
      requestPolicy: 'cache-first',
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <UrqlProvider client={client} ssr={ssr}>
          {children}
        </UrqlProvider>
        </body>
    </html>
  )
}
