"use client";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./apollo.client";
import { useCookies } from "next-client-cookies";

export const ApolloGQLProvider = ({ children }: React.PropsWithChildren) => {
  const cookies = useCookies();
  const client = createApolloClient(cookies.get('access_token'));

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
