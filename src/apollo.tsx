import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const AUTH = "AUTHORIZATION";
const DARK_MODE = "DARK_MODE";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(AUTH)));  // 로그인

export const logUserIn = (authorization) => {
  localStorage.setItem(AUTH, authorization);
  isLoggedInVar(true);
}

export const logUserOut = (navigate) => {
  localStorage.removeItem(AUTH);
  if(!navigate) { 
    navigate("");
  }
  window.location.reload();
}

export const darkModeVar = makeVar(Boolean(localStorage.getItem(DARK_MODE) === "enabled"));    // 다크모드

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  darkModeVar(true);
}

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  darkModeVar(false);
}

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});