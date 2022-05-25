import styled, { css } from "styled-components";

// colors
// primary : #5A87F0

interface Props {
  primary?: boolean;
  secondary?: boolean;
  title: string;
}

interface StyledProps {
  primary?: boolean;
  secondary?: boolean;
}

const StyledButton = styled.button<StyledProps>`
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid #5487f0;
  font-size: 12px;
  ${({ primary, secondary }) =>
    primary
      ? css`
          background-color: #5a87f0;
          color: white;
        `
      : secondary &&
        css`
          background-color: white;
          color: #5487f0;
        `}
`;

const Button = ({ primary, secondary, title }: Props) => {
  return (
    <StyledButton primary={primary} secondary={secondary}>
      {title}
    </StyledButton>
  );
};

export default Button;
