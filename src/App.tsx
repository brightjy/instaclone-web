import { Link } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";

export default function App() {
  const isLoggedIn = true;
  return (
    <div>
      <Link to="/">
      { isLoggedIn ? <Home /> : <Login /> }
      </Link>
    </div>
  );
}
