import { Theme } from "@emotion/react";
import { BorderColorKey } from "./theme";

export const getBorder = (color?: BorderColorKey, size: number = 1) => {
  return (theme: Theme) => {
    if (!color) return "none";
    return `0px 0px 0px ${size}px inset ${theme.borderColors[color]}`;
  };
};

export const getBottomBorder = (color: BorderColorKey, size: number = 1) => {
  return (theme: Theme) => {
    if (!color) return "none";
    return `0px 0px ${size}px 0px inset ${theme.borderColors[color]}`;
  };
};
