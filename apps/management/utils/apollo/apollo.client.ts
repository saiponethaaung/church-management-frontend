import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = (token?: string) => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export default createApolloClient;
