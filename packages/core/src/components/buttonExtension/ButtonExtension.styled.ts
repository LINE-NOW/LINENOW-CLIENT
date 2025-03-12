import { css, Theme } from "@emotion/react";
import { getHoverAnimation } from "../../styles/animation";
import { fonts } from "../../styles";

export const getAnimation = () => getHoverAnimation;

export const getTextButtonStyle = () => {
  return (theme: Theme) => css`
    cursor: pointer;

    border-bottom: 1px solid;
    border-color: ${theme.borderColors["gray"]};

    ${fonts.button2}
    color: ${theme.fontColors.gray};
  `;
};
