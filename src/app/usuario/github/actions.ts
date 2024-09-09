"use server";

import { cookies } from "next/headers";
const MAX_AGE = 60 * 70; // 70 minutes

export async function setAuthCookies(access: string, refresh: string) {
  cookies().set("appTokenAccess", access, {
    maxAge: MAX_AGE,
    path: "/",
  });
  cookies().set("appTokenRefresh", refresh, {
    maxAge: MAX_AGE,
    path: "/",
  });
}
