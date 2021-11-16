import { useState } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div>
        { isLoggedIn ? (
            <Home setIsLoggedIn={ setIsLoggedIn }/>
          ) : (
            <Login setIsLoggedIn={ setIsLoggedIn } />
          )}
    </div>
  );
}
