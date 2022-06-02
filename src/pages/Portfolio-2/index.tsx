import { DefaultTheme, ThemeProvider } from "styled-components";
import { Header, Wrapper } from "../../Components";
import GlobalStyle from "../../GlobalStyles";
import { Navbar } from "./Components";

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

const Portfolio2 = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header width={`100vw`} flex justifyContent="center">
          <Navbar />
        </Header>
        <Wrapper></Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Portfolio2;
