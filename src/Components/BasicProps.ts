import { css } from "styled-components";

export interface basicProps {
  children?: any;

  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;

  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;

  style?: React.CSSProperties;
  className?: string;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
}

export interface flexProps {
  flex?: boolean;
  flexDirection?: "column" | "row" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "space-between"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
    | "center";
  alignItems?:
    | "space-between"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
    | "center";
}

export const basicStyles = css<basicProps>`
  // padding
  ${(props) =>
    props.paddingRight && "padding-right: " + props.paddingRight + ";"}
  ${(props) => props.paddingLeft && "padding-left: " + props.paddingLeft + ";"}
  ${(props) =>
    props.paddingBottom && "padding-bottom: " + props.paddingBottom + ";"}
  ${(props) => props.paddingTop && "padding-top: " + props.paddingTop + ";"}

  // margin
  ${(props) => props.marginRight && "margin-right: " + props.marginRight + ";"}
  ${(props) => props.marginLeft && "margin-left: " + props.marginLeft + ";"}
  ${(props) =>
    props.marginBottom && "margin-bottom: " + props.marginBottom + ";"}
  ${(props) => props.marginTop && "margin-top: " + props.marginTop + ";"}

  // width and height
  ${(props) => props.height && "height: " + props.height + ";"}
  ${(props) => props.width && "width: " + props.width + ";"}
  ${(props) => props.maxWidth && "max-width: " + props.maxWidth + ";"}
  ${(props) => props.minHeight && "min-height: " + props.minHeight + ";"}
  ${(props) => props.maxHeight && "max-height: " + props.maxHeight + ";"}
  ${(props) => props.minWidth && "min-width: " + props.minWidth + ";"}
`;

export const flexStyles = css<flexProps>`
  ${(props) => props.flex && "display: flex;"}
  ${(props) => props.flexDirection && "flex-direction: " + props.flexDirection}
  ${(props) =>
    props.justifyContent && "justify-content: " + props.justifyContent}
  ${(props) => props.alignItems && "align-items: " + props.alignItems}
`;
