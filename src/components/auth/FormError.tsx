import styled from "styled-components"

const SFromError = styled.div`
  color: tomato;
  font-size: 12px;
  margin: 10px 0px 5px 0px;
  text-align: center;
`;

function FormError({message}) {
  return message === "" || !message ? null : <SFromError>{message}</SFromError>
}

export default FormError;