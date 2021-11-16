import { MouseEventHandler } from "react";
import { isLoggedInVar } from "../apollo";

interface ILoginProps {
  setIsLoggedIn: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Home<ILoginProps>(){
  return (
    <div>
    <h1>Home</h1>
    <button onClick={() => isLoggedInVar(false)}>Logout now!</button>
    </div>
  );
}
export default Home;