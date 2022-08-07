import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/schema';

const client = new GraphQLClient(process.env.GQL_ENDPOINT as string, {
  headers: {
    'x-hasura-admin-secret': process.env.GQL_ACCESS_TOKEN as string,
  },
});

export const gqlSdk = getSdk(client);

export * from './generated/schema';
