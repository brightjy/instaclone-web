import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import { BaseBox } from "../components/common/Common";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";

const FacebookLogin = styled.div`
  color: #385185;
  span {
    margin-left: 10px;
    font-weight: bold;
  }
`;

function Login() {
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faCat} size="3x"/>
        </div>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log in" />
        </form>
        <Separator/>
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox 
        cta="Don't have an account?"
        linkText="Sign Up" 
        link={routes.signUp} />
    </AuthLayout>
  );
}
export default Login;
