import styled, { css } from "styled-components";
import {
  basicProps,
  basicStyles,
  flexProps,
  flexStyles,
} from "../../../BasicProps";

interface Props extends basicProps, flexProps {
  role?: "nav" | "article" | "section";
}

interface StyleProps extends basicProps, flexProps {}

const StyledDiv = styled.div<StyleProps>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const StyledNav = styled.nav<StyleProps>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const StyledSection = styled.section<StyleProps>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;

const StyledArticle = styled.article<StyleProps>`
  ${(props) => css`
    ${basicStyles}
    ${flexStyles}
  `}
`;
// Same thing as div
const Div = (props: Props) => {
  const { role } = props;
  return role === "nav" ? (
    <StyledNav {...props}>{props.children}</StyledNav>
  ) : role === "section" ? (
    <StyledSection {...props}>{props.children}</StyledSection>
  ) : role === "article" ? (
    <StyledArticle {...props}>{props.children}</StyledArticle>
  ) : (
    <StyledDiv {...props}>{props.children}</StyledDiv>
  );
};

export default Div;
