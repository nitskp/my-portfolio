import styled from "styled-components";
import { Div, Span } from "../../../../Components";

interface Props {
  icon: string | React.ReactNode;
  text: string;
  cardNumber: number;
  iconBackground: string;
}

const IconContainer = styled(Div)<Partial<Props>>`
  background: ${(props) => props.iconBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 20px;
`;
// first - rgba(15, 191, 97, 0.2);

const ServiceCard = ({ icon, text, cardNumber, iconBackground }: Props) => {
  return (
    <Div flex marginRight={"10px"}>
      <IconContainer iconBackground={iconBackground}>
        {typeof icon === "string" ? (
          <img src={icon} alt="Technology Icon" />
        ) : (
          { icon }
        )}
      </IconContainer>
      <Div
        flex
        flexDirection="column"
        justifyContent="flex-start"
        paddingTop={"10px"}
        paddingLeft={"10px"}
      >
        {/* Card Number  */}
        <Div>
          <Span fontSize={"20px"} textColor={"#494949"} fontWeight="500">
            {cardNumber > 9 ? cardNumber : "0" + cardNumber}
          </Span>
        </Div>
        <Div>
          <Span fontSize={"20px"} fontWeight={"500"}>
            {text}
          </Span>
        </Div>
      </Div>
    </Div>
  );
};

export default ServiceCard;
