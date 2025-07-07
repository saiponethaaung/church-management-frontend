"use server";
import createApolloClient from "@utils/apollo/apollo.client";
import {
  ProfileDocument,
  ProfileQuery,
  ProfileQueryVariables,
} from "@utils/graphql/generated/schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getBaseUrl = async (headers: Headers) => {
  const host = headers.get("x-forwarded-host");
  const proto = headers.get("x-forwarded-proto");
  const baseURL = `${proto}://${host}`;
  return baseURL;
};

export const checkSession = async () => {
  const cookie = await cookies();
  const access_token = cookie.get("access_token")?.value;

  if (!access_token) {
    return redirect("/login");
  } else {
    const client = createApolloClient(access_token);

    const data = await client
      .query<ProfileQuery, ProfileQueryVariables>({
        query: ProfileDocument,
      })
      .catch((error) => {
        if (error.message === "Unauthorized") {
          return redirect("/logout");
        } else {
          console.error(error.message);
        }
      });

    return data;
  }
};

export const checkGuest = async () => {
  const cookie = await cookies();
  const access_token = cookie.get("access_token")?.value;

  if (access_token) {
    return redirect("/");
  }
};

export interface SetCookieProps {
  [key: string]: string;
}

export const setCookie = async (values: SetCookieProps): Promise<void> => {
  const cookie = await cookies();

  for (const k in values) {
    cookie.set(k, values[k]);
  }

  return;
};

export const logout = async () => {
  const cookie = await cookies();
  cookie.delete("access_token");

  redirect("/login");
};
