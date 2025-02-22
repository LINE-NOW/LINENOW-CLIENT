import { css } from "@emotion/react";

export const getLayout = (colCount: number, colGap: string, rowGap: string) => {
  return css`
    display: grid;
    grid-template-columns: repeat(${colCount}, 1fr);
    row-gap: ${rowGap};
    column-gap: ${colGap};
  `;
};
