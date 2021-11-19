import Home from "./screens/Home";
import Login from "./screens/Login";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, ourTheme } from "./styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
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
