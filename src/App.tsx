import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";

export default function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <div>
        { isLoggedIn ? <Home /> : <Login />}
    </div>
  );
}
