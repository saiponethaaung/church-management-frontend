"use server";
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
  //   const refresh_token = cookie.get("refresh_token")?.value;

  if (!access_token) {
    // if (!refresh_token) {
    return redirect("/login");
    // } else {
    //   const headerList = await headers();
    //   const baseUrl = await getBaseUrl(headerList);
    //   const response = await fetch(`${baseUrl}/api/auth/refresh`);
    //   if (!response.ok) {
    //     return redirect("/login");
    //   }
    // }
  }
};

export const checkGuest = async () => {
  const cookie = await cookies();
  const access_token = cookie.get("access_token")?.value;
  //   const refresh_token = cookie.get("refresh_token")?.value;

  if (access_token) {
    // if (!refresh_token) {
    return redirect("/");
    // } else {
    //   const headerList = await headers();
    //   const baseUrl = await getBaseUrl(headerList);
    //   const response = await fetch(`${baseUrl}/api/auth/refresh`);
    //   if (!response.ok) {
    //     return redirect("/login");
    //   }
    // }
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
