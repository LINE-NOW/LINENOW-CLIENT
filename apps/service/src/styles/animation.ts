import { css } from "@emotion/react";

export const changeFoldStateAnimation = css`
  transition: height 0.5s ease;
`;

export const onClickButtonAnimation = css`
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
