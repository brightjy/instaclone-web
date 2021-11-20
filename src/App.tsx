import Home from "./screens/Home";
import Login from "./screens/Login";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
      <div>
          { isLoggedIn ? <Home /> : <Login />}
      </div>
  );
}

export default App;
