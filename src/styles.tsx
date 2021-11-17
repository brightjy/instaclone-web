import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const ourTheme: DefaultTheme = {
  bgColor: "black",
  fontClor: "blue",
}

export const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    background-color: ${(props) => props.theme.bgColor};
  }
`;

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "#f2f2f2",
};

export const darkTheme = {
  fontColor: "#f2f2f2",
  bgColor: "#2c2c2c",
};
