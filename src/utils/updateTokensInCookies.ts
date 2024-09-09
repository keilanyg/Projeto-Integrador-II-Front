import { GetServerSidePropsContext } from "next";
import { setCookie } from "nookies";

type TokensTypes = {
  access: string;
  refresh: string;
};

const MAX_AGE = 60 * 70; // 70 minutes

export function updateTokensInCookies(
  tokens: TokensTypes,
  ctx?: GetServerSidePropsContext
) {
  const { access, refresh } = tokens;

  setCookie(ctx, "appTokenAccess", access, {
    maxAge: MAX_AGE,
    path: "/",
  });
  setCookie(ctx, "appTokenRefresh", refresh, {
    maxAge: MAX_AGE,
    path: "/",
  });
}
