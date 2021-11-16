import { ReactDOM, Dispatch, SetStateAction } from "react";

interface ILoginProps {
  setIsLoggedIn: boolean;
}

function Home<ILoginProps>({ setIsLoggedIn }){
  return (
    <div>
    <h1>Home</h1>
    <button onClick={() => setIsLoggedIn(true)}>Logout now!</button>
    </div>
  );
}
export default Home;