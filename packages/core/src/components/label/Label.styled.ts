import { css, Theme } from "@emotion/react";
import { fonts, FontStyleKey } from "../../styles/fonts";
import { FontColorKey } from "../../styles/theme";

export const getLabelStyle = (font: FontStyleKey, padding: string) => {
  return css`
    white-space: pre-line;
    ${fonts[font]}
    padding: ${padding};
  `;
};

export const getColorStyle = (color?: FontColorKey) => {
  if (!color) return;

  return (theme: Theme) => css`
    color: ${theme.fontColors[color]};
  `;
};

export const getEllipsisStyle = (width: string = "100%") => {
  return css`
    width: ${width};
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};
