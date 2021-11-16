import { MouseEventHandler } from "react";

interface ILoginProps {
  setIsLoggedIn: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Login<ILoginProps>({ setIsLoggedIn }) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => setIsLoggedIn(true)}>Log in now!</button>
    </div>
  );
}
export default Login;
