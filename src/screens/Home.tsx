import { MouseEventHandler } from "react";

interface ILoginProps {
  setIsLoggedIn: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Home<ILoginProps>({ setIsLoggedIn }){
  return (
    <div>
    <h1>Home</h1>
    <button onClick={() => setIsLoggedIn(false)}>Logout now!</button>
    </div>
  );
}
export default Home;