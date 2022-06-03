import styled, { css } from "styled-components";
import {
  basicProps,
  flexProps,
  basicStyles,
  flexStyles,
} from "../../../BasicProps";

interface Props extends basicProps, flexProps {}

const StyledSpan = styled.span<Props>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;
const Span = (props: Props) => {
  const { children } = props;
  return <StyledSpan {...props}>{children}</StyledSpan>;
};

export default Span;
