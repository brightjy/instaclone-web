import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const AUTH = "authorization";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(AUTH)));  // 로그인

export const logUserIn = (authorization) => {
  localStorage.setItem(AUTH, authorization);
  isLoggedInVar(true);
}

export const logUserOut = () => {
  localStorage.removeItem(AUTH);
  isLoggedInVar(false);
}

export const darkModeVar = makeVar(false);    // 다크모드

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});