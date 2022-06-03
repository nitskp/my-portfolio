import styled, { css } from "styled-components";
import { basicProps, basicStyles } from "../../../BasicProps";

// colors
// primary : #5A87F0

interface Props extends basicProps {
  primary?: boolean;
  secondary?: boolean;
  green?: boolean;
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button<Partial<Props>>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  border: none;
  gap: 10px;
  border-radius: 50px;
  font-size: 18px;
  ${(props) => props.primary && `background: #0FBF61;`}
  ${(props) => css`
    ${basicStyles}
  `}
`;

const Button = (props: Props) => {
  const { primary, secondary, title, onClick } = props;
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      onClick={onClick}
      {...props}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
