import { backgroundColors, borderColors, fontColors } from "./colors";

export type CustomTheme = {
  fontColors: typeof fontColors;
  borderColors: typeof borderColors;
  backgroundColors: typeof backgroundColors;
};

export const theme: CustomTheme = {
  fontColors: fontColors,
  borderColors: borderColors,
  backgroundColors: backgroundColors,
};
