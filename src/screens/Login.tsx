import { MouseEventHandler } from "react";
import { isLoggedInVar } from "../apollo";

interface ILoginProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Login<ILoginProps>() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
    </div>
  );
}
export default Login;
