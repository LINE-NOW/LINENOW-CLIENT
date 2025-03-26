import { css, Theme } from "@emotion/react";
import { getHoverAnimation } from "../../styles/animation";

export const getAnimation = () => getHoverAnimation;

export const getButtonStyle = () => {
  return css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0.25rem;
  `;
};
export const getTextButtonStyle = () => {
  return (theme: Theme) => css`
    padding-bottom: 1px solid;
    border-bottom: 1.5px solid;
    border-color: ${theme.borderColors["grayLight"]};

    width: fit-content;
  `;
};
