import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const ourTheme: DefaultTheme = {
  bgColor: "#f1f1f1",
  fontColor: "blue",
  accentColor: "#0095f6",
  borderColor: "rgb(219, 219, 219)",
}

export const GlobalStyles = createGlobalStyle`
  ${reset};
  input {
    all: unset;
  };
  * {
    box-sizing: border-box;
  };
  body {
    background-color: #FAFAFA;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: rgb(38, 38, 38);
  };
  a {
    text-decoration: none;
  };
`;

export const lightTheme = {
  blue: "#0095f6",
  borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
  fontColor: "#f2f2f2",
  bgColor: "#2c2c2c",
};
