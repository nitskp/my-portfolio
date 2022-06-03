import { Div, Heading, Wrapper } from "../../../../Components";
import ServiceCard from "../ServiceCard/ServiceCard";
import frontendIcon from "../../../../Assets/images/frontendIcon.png";

const Service = () => {
  return (
    <Wrapper id="service">
      <Div flex flexDirection="column" alignItems="center" justifyContent="center" marginBottom={"140px"}>
        <Heading
          type="h1"
          textColor={"#0FBF61"}
          fontSize="40px"
          marginBottom={"92px"}
        >
          What I Do
        </Heading>
        {/* Icons  */}
        <Div flex justifyContent="space-between" width={"100%"}>
        <ServiceCard
            icon={frontendIcon}
            text={"Back End Development"}
            cardNumber={1}
            iconBackground={"rgba(15, 191, 97, 0.2)"}
          />
          <ServiceCard
            icon={frontendIcon}
            text={"Front End Development"}
            cardNumber={2}
            iconBackground={"rgba(45, 76, 255, 0.13)"}
          />
        </Div>
      </Div>
    </Wrapper>
  );
};

export default Service;
