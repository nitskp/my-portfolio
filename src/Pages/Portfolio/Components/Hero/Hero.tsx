import styled from "styled-components";
import {
  Button,
  Div,
  Header,
  Heading,
  Text,
  Wrapper,
} from "../../../../Components";
import Navbar from "../Navbar/Navbar";
import heroImg from "../../../../Assets/images/heroImg.jpg";

const HeroContainer = styled.section`
  background-color: rgba(15, 191, 97, 0.1);
  background-image: url("images/EllipseLeft.png"),
    url("images/EllipseRight.png");
  background-position: top 142px left, top right;
  background-size: initial;
  background-repeat: no-repeat;
  img {
    /* object-fit: contain; */
    width: 100%;
    height: 100%;
    border-radius: 24px;
    display: block;
  }
`;

const Hero = () => {
  const name = "Nitin Pandey";
  const breifDescription =
    "I am a Full-Stack web developer based in Delhi, India. I love coding, building websites and creating new applications.";
  return (
    <HeroContainer>
      {/* Header  */}
      <Header width={`100vw`} flex justifyContent="center">
        {/* Navbar  */}
        <Navbar />
      </Header>
      <Wrapper>
        {/* Content  */}
        <Div
          flex
          justifyContent="space-between"
          alignItems="center"
          paddingBottom={"92px"}
          paddingTop={"47px"}
        >
          {/* Description  */}
          <Div role="article" maxWidth={`500px`}>
            <Heading
              type="h1"
              textColor={"#0FBF61"}
              fontSize={`30px`}
              marginBottom="10px"
              marginTop={"0"}
            >
              Hello, I'm
            </Heading>
            <Heading
              type="h1"
              fontSize="60px"
              marginBottom="20px"
              marginTop={"0"}
            >
              {name}
            </Heading>
            <Text>{breifDescription}</Text>
            <Button primary title="Send Email" />
          </Div>

          {/* Image  */}
          <Div width={`548px`} height={`390px`} borderRadius={"24px"}>
            <img src={heroImg} alt="Me" />
          </Div>
        </Div>
      </Wrapper>
    </HeroContainer>
  );
};

export default Hero;
