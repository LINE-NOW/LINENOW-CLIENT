import { css } from "@emotion/react";

export const changeFoldStateAnimation = css`
  transition: height 0.8s ease, bottom 0.5s ease, border-radius 0.5s ease;
`;

export const changeMainTypeanimation = css`
  transition: bottom 0.5s ease, border-radius 0.5s ease;
`;

export const onClickButtonAnimation = css`
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
