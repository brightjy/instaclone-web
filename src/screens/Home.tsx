import { logUserOut } from "../apollo";
import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate();
  return (
    <div>
    <h1>Welcome we did it!</h1>
    <button onClick={() => logUserOut(navigate)}>Logout now!</button>
    </div>
  );
}
export default Home;