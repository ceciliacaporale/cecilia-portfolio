import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

interface Props {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
