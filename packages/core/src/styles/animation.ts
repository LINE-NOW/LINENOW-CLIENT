import { css } from "@emotion/react";

export const getHoverAnimation = css`
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(0.95);
    opacity: 0.9;
  }
`;
