import { Wrapper } from "../../Components";
import GlobalStyle from "../../GlobalStyles";
import { Hero } from "./Components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Hero />
        {/* <Skill icon={<AiFillAlert fontSize={40} />} name={"Test"} /> */}
      </Wrapper>
    </>
  );
}

export default App;
