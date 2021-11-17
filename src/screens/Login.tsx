import styled from "styled-components";
import { useState } from "react";
import { darkModeVar } from "../apollo";

interface ITitleProps {
  potato: boolean;
}

const Title = styled.h1<ITitleProps>`
  color: ${(props) => props.theme.fontClor};
`;

interface IContainerProps {
  floating: boolean;
}

const Container = styled.div<IContainerProps>`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontClor};
`;


function Login() {
  const [ potato, setPotato ] = useState(false);
  const togglePotato = () => setPotato((current) => !current);
  return (
    <Container floating={true}>
      <Title potato={ potato }>Login</Title>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To light</button>
    </Container>
  );
}
export default Login;
