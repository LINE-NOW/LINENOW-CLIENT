import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ButtonLayoutProps {
  $col: number;
  $rowGap?: string;
  $colGap?: string;
}

const ButtonLayout = styled.section<ButtonLayoutProps>`
  display: grid;
  ${({ $col }) => {
    return css`
      grid-template-columns: repeat(${$col}, 1fr);
    `;
  }}

  ${({ $rowGap }) => {
    return css`
      row-gap: ${$rowGap !== undefined ? $rowGap : "0.5rem"};
    `;
  }}

  ${({ $colGap }) => {
    return css`
      column-gap: ${$colGap !== undefined ? $colGap : "0.5rem"};
    `;
  }}
`;

export default ButtonLayout;
