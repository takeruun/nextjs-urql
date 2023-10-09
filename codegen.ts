// .ts じゃないと正常に動作しない

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {
          'x-hasura-admin-secret': 'secret'
        }
      }
    }
  ],
  documents: './app/*.{tsx,ts}',
  generates: {
    "app/@generated/gql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
