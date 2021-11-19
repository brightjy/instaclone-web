import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const ourTheme: DefaultTheme = {
  bgColor: "#f1f1f1",
  fontClor: "blue",
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
  };
  a {
    text-decoration: none;
  };
`;

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "#f2f2f2",
};

export const darkTheme = {
  fontColor: "#f2f2f2",
  bgColor: "#2c2c2c",
};
