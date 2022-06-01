import { Div, Heading, Wrapper } from "../../Components";
import GlobalStyle from "../../GlobalStyles";
import { Hero, Skill } from "./Components";
import { BlueUnderlineDiv } from "./Components/Styled";
import { GrDiamond } from "react-icons/gr";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import {FaReact} from "react-icons/fa"

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
          <Skill icon={<GrDiamond fontSize={34} />} name={"Html and Css"} />
          <Skill icon={<DiJavascript1 fontSize={34} />} name="Javascript" />
          <Skill icon={<SiTypescript fontSize={34} />} name={"Typescript"} />
          <Skill icon={<FaReact fontSize={34}/>} name="React"/>
        </Div>
      </Wrapper>
    </>
  );
}

export default App;
