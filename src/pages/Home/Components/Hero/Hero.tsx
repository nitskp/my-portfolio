import styled from "styled-components";
import { Button, Div, Heading } from "../../../../Components";
import profilePic from "../../../../Assets/images/profilePic.jpeg";
import { BlueUnderlineDiv } from "../Styled";

// const BlueUnderlineDiv = styled(Div)`
//   border-bottom: 6px solid blue;
//   padding: 10px 0px;
//   margin: 0 auto;
//   margin-bottom: 20px;
// `;

const Hero = () => {
  return (
    <Div>
      <BlueUnderlineDiv small>
        <Heading
          type="h1"
          fontSize={"17px"}
          fontWeight={700}
          marginRight={"10px"}
        >
          {" "}
          Nitin Kumar Pandey
        </Heading>
        <Heading type="h1" color="#7f888f" fontSize={"17px"} fontWeight={400}>
          {" "}
          Web Developer
        </Heading>
      </BlueUnderlineDiv>
      <Div>
        <img
          src={profilePic}
          alt="Profile Pic"
          width={"100%"}
          height={"auto"}
        />
      </Div>
      <Div>
        <Heading
          type="h1"
          fontSize="27px"
          color="#3d4449"
          marginBottom={"14px"}
        >
          {"Hi, I am Nitin, your next web-developer"}
        </Heading>
        <Heading type="h2" fontSize="18px" color="#7f888f">
          {/* Need to add the function of make sentence all caps in heading component  */}
          {"Let's build something awesome"}
        </Heading>
        <Button secondary title="View Projects" />
      </Div>
      <hr />
    </Div>
  );
};

export default Hero;
