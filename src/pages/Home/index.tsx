import { Div, Heading, Wrapper } from "../../Components";
import GlobalStyle from "../../GlobalStyles";
import { Hero, SkillsSection } from "./Components";
function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Hero />
        <SkillsSection />
      </Wrapper>
    </>
  );
}

export default App;
