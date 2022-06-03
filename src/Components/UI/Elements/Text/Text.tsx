import styled from "styled-components";
import { basicProps, basicStyles } from "../../../BasicProps";

const StyledText = styled.p<basicProps>`
  ${(props) => basicStyles}
`;

const Text = (props: basicProps) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default Text;
