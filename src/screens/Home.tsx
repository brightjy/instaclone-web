import { logUserOut } from "../apollo";

function Home(){
  return (
    <div>
    <h1>Welcome we did it!</h1>
    <button onClick={() => logUserOut()}>Logout now!</button>
    </div>
  );
}
export default Home;