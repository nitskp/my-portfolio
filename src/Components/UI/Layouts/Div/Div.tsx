import styled, { css } from "styled-components";
import {
  basicProps,
  basicStyles,
  flexProps,
  flexStyles,
} from "../../../BasicProps";

interface Props extends basicProps {}

interface StyleProps extends basicProps, flexProps {}

const StyledDiv = styled.div<StyleProps>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

// Same thing as div
const Div = (props: Props) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

export default Div;
