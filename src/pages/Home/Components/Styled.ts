import styled, { css } from "styled-components";
import { Div } from "../../../Components";

interface BlueUnderlineDivProps {
  small?: boolean;
}

export const BlueUnderlineDiv = styled(Div)<BlueUnderlineDivProps>`
  border-bottom: 6px solid blue;
  padding: 10px 0px;
  margin: 0 auto;
  margin-bottom: 20px;
  ${({small})=> small && css`
    margin-left: 0;
    width: 80px;
    max-width: 30%;
  `}
`;
