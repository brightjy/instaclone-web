import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div>
      <Link to="/">
        { isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn}/> : <Login /> }
      </Link>
    </div>
  );
}
