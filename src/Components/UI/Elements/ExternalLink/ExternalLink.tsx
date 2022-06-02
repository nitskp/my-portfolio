import React from "react";
import styled, { css } from "styled-components";
import { basicProps, basicStyles } from "../../../BasicProps";

interface Props extends basicProps {
  to: string;
}

const StyledLink = styled.a<basicProps>`
  ${(props) => css`
    ${basicStyles};
  `}
  color: inherit;
  font-size: inherit;
  text-decoration: none;
`;

const ExternalLink = (props: Props) => {
  const { children, to } = props;
  return <StyledLink href={to}>{children}</StyledLink>;
};

export default ExternalLink;
