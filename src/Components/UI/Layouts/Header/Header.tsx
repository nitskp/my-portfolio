import styled, { css } from "styled-components";
import {
  basicProps,
  basicStyles,
  flexProps,
  flexStyles,
} from "../../../BasicProps";

interface Props extends basicProps, flexProps {}

const StyledHeader = styled.header<Props>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const Header = (props: Props) => {
  return <StyledHeader {...props}>{props.children}</StyledHeader>;
};

export default Header;
