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
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";

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

interface IForm {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  result: string;
};

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!,
    $lastName: String,
    $userName: String!,
    $email: String!,
    $password: String!
  ) {
    createAccount(
      firstName: $firstName,
      lastName: $lastName,
      userName: $userName,
      email: $email,
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  // react 6 에서 useHistory -> useNavigate
  const navigate = useNavigate();
  const { register, handleSubmit, formState, setError, getValues } = useForm<IForm>({
    mode: "onChange",
  });
  const onCompleted = (data) => {
    const { userName, password } = getValues();
    const { createAccount: {ok, error} } = data;
    if(!ok) {
      return setError("result", {message: error});
    }
    navigate(routes.home, {
      state: {
        message: "Account Created. Please Log in.",
        userName,
        password
      }
    });
  }
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const onSubmitValid = (data) => {
    if(loading) {
      return;
    }
    const { firstName, lastName, userName, email, password } = data;
    createAccount({
      variables: {
        firstName, lastName, userName, email, password
      },
    });
  };
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
        <form onSubmit={ handleSubmit(onSubmitValid) }>
          <Input 
            {...register("firstName", {
              required: "First name is required.",
            })} 
            type="text" 
            placeholder="First Name"
            hasError={Boolean(formState.errors?.firstName?.message)} 
          />
          <FormError message={formState.errors?.firstName?.message} />
          <Input 
            {...register("lastName", {
              })} 
            type="text" 
            placeholder="Last Name" 
          />
          <Input 
            {...register("userName", {
            required: "Username is required.",
            minLength: { 
              value: 5, 
              message: "User name should be loger than 5 chars." },
            })}
            type="text" 
            placeholder="Username" 
            hasError={Boolean(formState.errors?.userName?.message)} 
          />
          <FormError message={formState.errors?.userName?.message} />
          <Input 
            {...register("email", {
              required: "Email is required.",
            })}
            type="text" 
            placeholder="Email" 
            hasError={Boolean(formState.errors?.email?.message)} 
          />
          <FormError message={formState.errors?.email?.message} />
          <Input 
            {...register("password", {
              required: "Password is required.",
            })}
            type="password" 
            placeholder="Password" 
            hasError={Boolean(formState.errors?.password?.message)}
          />
          <FormError message={formState.errors?.password?.message} />
          <Button 
            type="submit" 
            value={loading ? "Loading..." : "Sign Up"}
            disabled={!formState.isValid || loading}  
          />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log In" link={routes.home} />
    </AuthLayout>
  );
}
export default SignUp;
