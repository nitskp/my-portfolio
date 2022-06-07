import styled from "styled-components";
import { Button, Div, Heading, Text, Wrapper } from "../../../../Components";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background: rgba(15, 191, 97, 0.1);
  .placcard {
    background: #0fbf61;
    width: 100%;
    border-radius: 15px;
    padding: 70px 50px;
    box-sizing: border-box;
  }
`;

const links = {
  githubLink: "https://github.com/nitskp",
  linkedInLink: "https://www.linkedin.com/in/nitin-pandey-01a99a127/",
  twitterLink: "https://twitter.com/NitinPa09200988",
};

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Div paddingBottom={"60px"} paddingTop={"190px"} position="relative">
          {/* Placcard */}
          <Div
            flex
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            bottom={"250px"}
            className="placcard"
          >
            <Div>
              <Heading
                type="h1"
                color="#ffffff"
                fontSize="45px"
                marginBottom={"16px"}
              >
                Have any project in my mind?
              </Heading>
              <Heading type="h2" color="#ffffff">
                Let’s work together and I will help you by all my best.
              </Heading>
            </Div>
            <Button title="Let's talk" secondary />
          </Div>
          <Div flex justifyContent="space-between" alignItems="center">
            <Text textColor={"#000000"} fontWeight="700" maxWidth={"450px"}>
              Developed by Nitin Kumar Pandey 2022. Design refered from Rostam
              Sadiqi's Portfolio design.
            </Text>
            <Div
              flex
              justifyContent="space-between"
              maxWidth={"150px"}
              width={"90px"}
            >
              <AiFillLinkedin
                onClick={() => (window.location.href = links.linkedInLink)}
              />
              <AiFillGithub
                onClick={() => (window.location.href = links.githubLink)}
              />
              <AiFillTwitterSquare
                onClick={() => (window.location.href = links.twitterLink)}
              />
            </Div>
          </Div>
        </Div>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
