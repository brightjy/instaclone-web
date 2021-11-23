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
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";

const FacebookLogin = styled.div`
  color: #385185;
  span {
    margin-left: 10px;
    font-weight: bold;
  }
`;

function Login() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = (data) => {
    
  };
  return (
    <AuthLayout>
      <Helmet>
        <title>Login | Catstagram </title>
      </Helmet>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={ faCat } size="3x"/>
        </div>
        <form onSubmit={ handleSubmit(onSubmitValid) }>
          <Input 
            type="text"
            placeholder="Username"
            hasError={Boolean(formState.errors?.username?.message)}
            {...register("username", {
              required: "User name is required.",
              minLength: { value: 5, message: "User name should be loger than 5 chars." },
            })} 
          />
          <FormError message={formState.errors?.username?.message} />
          <Input 
            type="password" 
            placeholder="Password"
            hasError={Boolean(formState.errors?.password?.message)}
            {...register("password", {
              required: "Password is required."
            })}  
          />
          <FormError message={formState.errors?.password?.message} />
          <Button type="submit" value="Log in" disabled={!formState.isValid ? true : false} />
        </form>
        <Separator/>
        <FacebookLogin>
          <FontAwesomeIcon icon={ faFacebookSquare } />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox cta="Don't have an account?" linkText="Sign Up" link={ routes.signUp } />
    </AuthLayout>
  );
}
export default Login;
