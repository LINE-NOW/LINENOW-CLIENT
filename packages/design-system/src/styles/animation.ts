import { css } from "@emotion/react";

export const onClickButtonAnimation = css`
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
