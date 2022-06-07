import { Div, Heading, Wrapper } from "../../../../Components";
import ServiceCard from "../ServiceCard/ServiceCard";
import frontendIcon from "../../../../Assets/images/frontendIcon.png";
import backendIcon from "../../../../Assets/images/backendIcon.png";
import mernStackIcon from "../../../../Assets/images/mernStackIcon.png";

const Service = () => {
  return (
    <Wrapper id="service">
      <Div
        flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop={"140px"}
      >
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
            icon={backendIcon}
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
          <ServiceCard
            icon={mernStackIcon}
            text="MERN Stack"
            cardNumber={3}
            iconBackground="rgba(15, 191, 97, 0.05);"
          />
        </Div>
      </Div>
    </Wrapper>
  );
};

export default Service;
