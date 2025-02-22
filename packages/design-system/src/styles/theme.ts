import { backgroundColors, borderColors, fontColors } from "./colors";

export type FontColorType = typeof fontColors;
export type FontColorKey = keyof FontColorType;

export type BackgroundColorType = typeof backgroundColors;
export type BackgroundColorKey = keyof BackgroundColorType;

export type BorderColorType = typeof borderColors;
export type BorderColorKey = keyof BorderColorType;

export type CustomTheme = {
  fontColors: FontColorType;
  borderColors: BorderColorType;
  backgroundColors: BackgroundColorType;
};

export const theme: CustomTheme = {
  fontColors: fontColors,
  borderColors: borderColors,
  backgroundColors: backgroundColors,
};
