import Home from "./screens/Home";
import Login from "./screens/Login";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, isLoggedInVar } from "./apollo";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme, ourTheme } from "./styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={ourTheme}>
      <GlobalStyles />
      <div>
          { isLoggedIn ? <Home /> : <Login />}
      </div>
    </ThemeProvider>
  );
}

export default App;
