import { css } from "@emotion/react";

export const getHoverAnimation = css`
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(0.95);

    filter: brightness(0.97) blur(0.3px);
  }
`;
