import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const FacebookLogin = styled.div`
  color: #385185;
  span {
    margin-left: 10px;
    font-weight: bold;
  }
`;

function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const onUsernameChange = (event) => {
    setUsernameError("");
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(username === "") {
      setUsernameError("Not empty username please.");
    }
    if(username.length < 10) {
      setUsernameError("too short");
    }
  };
  return (
    <AuthLayout>
      <Helmet>
        <title>Login | Catstagram </title>
      </Helmet>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faCat} size="3x"/>
        </div>
        <form>
          <Input onChange={onUsernameChange} value={username} type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log in" />
        </form>
        <Separator/>
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox cta="Don't have an account?" linkText="Sign Up" link={routes.signUp} />
    </AuthLayout>
  );
}
export default Login;
