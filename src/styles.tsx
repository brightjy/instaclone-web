import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const ourTheme: DefaultTheme = {
  bgColor: "#fafafa",
  fontColor: "rgb(38, 38, 38)",
  accentColor: "#0095f6",
  borderColor: "rgb(219, 219, 219)",
}

export const lightTheme = {
  accentColor: "#0095f6",
  borderColor: "rgb(219, 219, 219)",
  bgColor: "#fafafa",
  fontColor: "rgb(38, 38, 38)"
};

export const darkTheme = {
  bgColor: "#2c2c2c",
  fontColor: "#f2f2f2",
};

export const GlobalStyles = createGlobalStyle`
  ${reset};
  input {
    all: unset;
  };
  * {
    box-sizing: border-box;
  };
  body {
    background-color: ${props => props.theme.bgColor};
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: ${props => props.theme.fontColor};
  };
  a {
    text-decoration: none;
  };
`;

