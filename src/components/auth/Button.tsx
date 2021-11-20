import styled from "styled-components";

const Button = styled.input`
  width: 100%;
  border-radius: 3px;
  border: none;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accentColor};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: bold;
`;
export default Button;