import {
  backgroundColors,
  borderColors,
  fontColors,
  iconColors,
} from "./colors";

export type FontColorType = typeof fontColors;
export type FontColorKey = keyof FontColorType;
export const FontColorList = Object.keys(fontColors);

export type BackgroundColorType = typeof backgroundColors;
export type BackgroundColorKey = keyof BackgroundColorType;
export const BackgroundColorList = Object.keys(backgroundColors);

export type BorderColorType = typeof borderColors;
export type BorderColorKey = keyof BorderColorType;
export const BorderColorList = Object.keys(borderColors);

export type IconColorType = typeof iconColors;
export type IconColorKey = keyof IconColorType;
export const IconsColorList = Object.keys(iconColors);

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
