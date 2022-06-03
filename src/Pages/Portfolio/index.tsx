import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../../GlobalStyles";
import { About, Hero, Service } from "./Components";

const theme: DefaultTheme = {
  colors: {
    primary: "#0FBF61",
    black: "#000000",
    lightBlack: "#494949",
    backgroundGreen: "rgba(15, 191, 97, 0.2)",
    backgroundBlue: "rgba(45, 76, 255, 0.13)",
    backgroundLightgreen: "rgba(15, 191, 97, 0.05)",
  },
};

const Portfolio = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Hero />
        <About />
        <Service />
      </ThemeProvider>
    </>
  );
};

export default Portfolio;
