import { css } from "@emotion/react";

export const getContainerStyle = (size: number) => {
  return css`
    width: ${size}px;
    height: ${size}px;
    display: flex;
  `;
};
