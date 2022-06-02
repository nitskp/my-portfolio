import { BlueUnderlineDiv } from "../Styled";
import { GrDiamond } from "react-icons/gr";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { Div, Heading, Wrapper } from "../../../../Components";
import { Skill } from "..";

const SkillsSection = () => {
  return (
    <Div>
      <BlueUnderlineDiv small>
        <Heading type="h2" fontSize="20px" color="#3d4449">
          Skills
        </Heading>
      </BlueUnderlineDiv>
      <Skill icon={<GrDiamond fontSize={34} />} name={"Html and Css"} />
      <Skill icon={<DiJavascript1 fontSize={34} />} name="Javascript" />
      <Skill icon={<SiTypescript fontSize={34} />} name={"Typescript"} />
      <Skill icon={<FaReact fontSize={34} />} name="React" />
      <hr />
    </Div>
  );
};

export default SkillsSection;
