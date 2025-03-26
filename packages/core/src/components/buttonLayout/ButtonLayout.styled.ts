import { css } from "@emotion/react";

export const getLayout = (
  colCount: number,
  colGap: string,
  rowGap: string,
  colTemplate?: string
) => {
  return css`
    display: grid;
    grid-template-columns: ${colTemplate
      ? colTemplate
      : `repeat(${colCount},1fr)`};

    row-gap: ${rowGap};
    column-gap: ${colGap};

    width: 100%;
  `;
};
