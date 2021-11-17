import { useReactiveVar } from "@apollo/client";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import Login from "./screens/Login";

const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "#f2f2f2",
};

const darkTheme = {
  fontColor: "#f2f2f2",
  bgColor: "#2c2c2c",
};

export default function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div>
          { isLoggedIn ? <Home /> : <Login />}
      </div>
    </ThemeProvider>
  );
}
