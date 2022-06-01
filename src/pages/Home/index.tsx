import { Div, Heading, Wrapper } from "../../Components";
import GlobalStyle from "../../GlobalStyles";
import { Hero, Skill } from "./Components";
import { BlueUnderlineDiv } from "./Components/Styled";
import { GrDiamond } from "react-icons/gr";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Hero />
        {/* <Skill icon={<AiFillAlert fontSize={40} />} name={"Test"} /> */}
        <Div>
          <BlueUnderlineDiv small>
            <Heading type="h2" fontSize="20px" color="#3d4449">
              Skills
            </Heading>
          </BlueUnderlineDiv>
          <Skill icon={<GrDiamond fontSize={34}/>} name={"Html and Css"} />
        </Div>
      </Wrapper>
    </>
  );
}

export default App;
