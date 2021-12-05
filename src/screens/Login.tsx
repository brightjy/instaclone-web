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
import { SubmitHandler, useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";
import { gql, useMutation } from '@apollo/client';
import { login, loginVariables } from "../__generated__/login";
import { logUserIn } from "../apollo";

const FacebookLogin = styled.div`
  color: #385185;
  span {
    margin-left: 10px;
    font-weight: bold;
  }
`;
const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      authorization
      error
    }
  }
`
interface IForm {
  userName: string;
  password: string;
  result: string;
}

function Login() {
  const { register, 
          handleSubmit, 
          formState, 
          getValues, 
          setError,
          clearErrors 
        } = useForm<IForm>({
              mode: "onChange",
            });
  const onCompleted = (data) => {
    const {login: {ok, error, authorization}} = data;
    if(!ok) {
      return setError("result", {
        message: error,
      });
    }
    if(authorization) {
      logUserIn(authorization);
    }
  };
  const [login, {loading}] = useMutation<login, loginVariables>(LOGIN_MUTATION, {
    onCompleted,
  });
  const onSubmitValid:SubmitHandler<IForm> = (data) => {
    if(loading) {
      return;
    }
    const { userName, password } = getValues();
    login({
      variables: { userName, password },
    });
  };
  const clearLoginError = () => {
    clearErrors("result");
  }
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
            {...register("userName", {
              required: "User name is required.",
              minLength: { value: 5, message: "User name should be loger than 5 chars." },
            })} 
            type="text"
            placeholder="Username"
            hasError={Boolean(formState.errors?.userName?.message)}
            onChange={clearLoginError}
          />
          <FormError message={formState.errors?.userName?.message} />
          <Input 
            {...register("password", {
              required: "Password is required."
            })}  
            type="password" 
            placeholder="Password"
            hasError={Boolean(formState.errors?.password?.message)}
            onChange={clearLoginError}
          />
          <FormError message={formState.errors?.password?.message} />
          <Button type="submit" 
                  value={loading ? "loading..." : "log in"} 
                  disabled={!formState.isValid || loading ? true : false} />
          <FormError message={formState.errors?.result?.message} />        
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
