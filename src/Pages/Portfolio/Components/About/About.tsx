import { Div, Heading, Wrapper, Text } from "../../../../Components";
import profilePic from "../../../../Assets/images/profilePhoto.jpeg";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 20px;
`;
const ImageContainer = styled(Div)`
  width: 280px;
  height: 420px;
  border-radius: 20px;
  position: relative;
  ::before {
    position: absolute;
    width: 100%;
    height: 90%;
    top: 39px;
    left: -48px;
    border-radius: 20px;
    content: "";
    z-index: -1;
    border: 3px solid #0fbf61;
  }
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 18px;
  padding-left: 0;
  p {
    grid-column: 1 / span 2;
    margin-bottom: 20px;
  }
  li {
    margin-bottom: 20px;
  }
  li::before {
    content: url("images/ListArrow.png");
    margin-right: 5px;
  }
`;

const About = () => {
  const description =
    "Hello! My name is Nitin Kumar Pandey and I am web developer. " +
    "I enjoy creating things that live on internet. " +
    "An enthuastic Software Engineer eager to learn, I specialize in Front-end Development. " +
    "I have been working for 1 year and loving every minute of it. ";
  return (
    <Wrapper id="about">
      <Div
        flex
        justifyContent="space-between"
        alignItems="center"
        marginTop={`140px`}
        role="section"
      >
        {/* Image  */}
        <ImageContainer>
          <Image src={profilePic} alt="Me" />
        </ImageContainer>
        {/* Description  */}
        <Div maxWidth={`560px`} role="article">
          <Heading
            type="h1"
            textColor={"#0FBF61"}
            fontSize={"40px"}
            marginBottom={"37px"}
          >
            About Me
          </Heading>
          <Text marginBottom={"30px"} fontSize={"18px"}>
            {description}
          </Text>

          <List>
            <Text>
              Here are the few technologies I have been working with recently:
            </Text>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Firebase</li>
          </List>
        </Div>
      </Div>
    </Wrapper>
  );
};

export default About;
