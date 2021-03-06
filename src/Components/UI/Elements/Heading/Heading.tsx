import styled, { css } from "styled-components";
import { basicProps, basicStyles } from "../../../BasicProps";

interface Props extends basicProps {
  children: string | React.ReactNode;
  fontSize?: string;
  color?: string;
  fontWeight?: number | string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

interface HeadingProps extends basicProps {
  fontSize?: string;
  color?: string;
  fontWeight?: number | string;
}

const H1 = styled.h1<HeadingProps>`
  ${({ fontSize, color, fontWeight }) => css`
    font-size: ${fontSize || 40};
    color: ${color || "black"};
    font-weight: ${fontWeight || 900};
  `}
  ${(props) => css`
    ${basicStyles}
  `}
`;

const H2 = styled.h2<HeadingProps>`
  ${({ fontSize, color, fontWeight }) => css`
    font-size: ${fontSize || 32};
    color: ${color || "black"};
    font-weight: ${fontWeight || 700};
  `}
  ${(props) => css`
    ${basicStyles}
  `}
`;

const H3 = styled.h3<HeadingProps>`
  ${({ fontSize, color, fontWeight }) => css`
    font-size: ${fontSize || 26};
    color: ${color || "gray"};
    font-weight: ${fontWeight || 500};
  `}
  ${(props) => css`
    ${basicStyles}
  `}
`;

const H4 = styled.h4<HeadingProps>`
  ${({ fontSize, color, fontWeight }) => css`
    font-size: ${fontSize || 20};
    color: ${color || "gray"};
    font-weight: ${fontWeight || 500};
  `}
  ${(props) => css`
    ${basicStyles}
  `}
`;

const H5 = styled.h5<HeadingProps>`
  ${({ fontSize, color, fontWeight }) => css`
    font-size: ${fontSize || 16};
    color: ${color || "black"};
    font-weight: ${fontWeight || 400};
  `}
  ${(props) => css`
    ${basicStyles}
  `}
`;

const H6 = styled.h6<HeadingProps>`
  ${({ fontSize, color, fontWeight }) => css`
    font-size: ${fontSize || 12};
    color: ${color || "black"};
    font-weight: ${fontWeight || 400};
  `}
  ${(props) => css`
    ${basicStyles}
  `}
`;

const Heading = (props: Props) => {
  const { fontSize, fontWeight, color, type, children } = props;
  return (
    <>
      {type === "h1" ? (
        <H1
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          {...props}
        >
          {children}
        </H1>
      ) : type === "h2" ? (
        <H2
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          {...props}
        >
          {children}
        </H2>
      ) : type === "h3" ? (
        <H3
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          {...props}
        >
          {children}
        </H3>
      ) : type === "h4" ? (
        <H4
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          {...props}
        >
          {children}
        </H4>
      ) : type === "h5" ? (
        <H5
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          {...props}
        >
          {children}
        </H5>
      ) : (
        <H6
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          {...props}
        >
          {children}
        </H6>
      )}
    </>
  );
};

export default Heading;
