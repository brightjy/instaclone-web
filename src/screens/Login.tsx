import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => setIsLoggedIn(true)}>Log in now!</button>
    </div>
  );
}
export default Login;
