import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getBaseUrl = (headers: Headers) => {
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
