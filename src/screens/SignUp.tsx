import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import styled from "styled-components";
import { FatLink } from "../components/common/Common";
import { Helmet } from "react-helmet-async";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;

function SignUp() {
  return (
    <AuthLayout>
      <Helmet>
        <title>Sign up | Catstagram </title>
      </Helmet>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faCat} size="3x"/>
        <Subtitle>Sign up to see photos and videos from your friends.</Subtitle>
        </HeaderContainer>
        <form>
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Sign Up" />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log In" link={routes.home} />
    </AuthLayout>
  );
}
export default SignUp;
