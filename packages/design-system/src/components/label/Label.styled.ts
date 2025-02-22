import { css } from "@emotion/react";
import { fonts, FontStyleKey } from "../../styles/fonts";
import { FontColorKey } from "../../styles/theme";

export const getLabelStyle = (font: FontStyleKey) => {
  return fonts[font];
};

export const getColorStyle = (color?: FontColorKey) => {
  if (!color) return;

  return (theme: any) => css`
    color: ${theme.fontColors[color]};
  `;
};
