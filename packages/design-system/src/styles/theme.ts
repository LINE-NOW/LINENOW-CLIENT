import { backgroundColors, borderColors, fontColors } from "./colors";

export type FontColorType = typeof fontColors;
export type FontColorKey = keyof FontColorType;

export type CustomTheme = {
  fontColors: FontColorType;
  borderColors: typeof borderColors;
  backgroundColors: typeof backgroundColors;
};

export const theme: CustomTheme = {
  fontColors: fontColors,
  borderColors: borderColors,
  backgroundColors: backgroundColors,
};
