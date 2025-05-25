import { css, Theme } from "@emotion/react";

import { BackgroundColorKey, BorderColorKey, FontColorKey } from "./theme";
import { getBorder } from "./border";

export type Variant =
  | "blue"
  | "lime"
  | "blueLight"
  | "limeLight"
  | "grayLight"
  | "outline"
  | "black";

interface VariantStyle {
  fontColor: FontColorKey;
  backgroundColor?: BackgroundColorKey;
  borderColor?: BorderColorKey;
  disabled_backgroundColor?: BackgroundColorKey;
  disabled_fontColor?: FontColorKey;
  disabled_borderColor?: BorderColorKey;
}

interface VariantStyles extends Record<Variant, VariantStyle> {}

const variantStyles: VariantStyles = {
  outline: {
    fontColor: "blackLight",
    borderColor: "gray",
    backgroundColor: "white",
    disabled_fontColor: "blackLight",
    disabled_borderColor: "grayLight",
    disabled_backgroundColor: "white",
  },
  blue: {
    backgroundColor: "blue",
    fontColor: "white",
  },
  blueLight: {
    backgroundColor: "blueLight",
    fontColor: "blue",
  },
  lime: {
    backgroundColor: "lime",
    fontColor: "black",
  },
  limeLight: {
    backgroundColor: "limeLight",
    fontColor: "gray",
  },
  grayLight: {
    backgroundColor: "grayLight",
    fontColor: "black",
  },
  black: {
    backgroundColor: "black",
    fontColor: "white",
  },
};

export const getVariantStyle = (variant: Variant) => {
  const style = variantStyles[variant];

  return (theme: Theme) => css`
    color: ${theme.fontColors[style.fontColor]};
    background-color: ${style.backgroundColor
      ? theme.backgroundColors[style.backgroundColor]
      : "none"};
    box-shadow: ${getBorder(style.borderColor)(theme)};

    :disabled {
      color: ${style.disabled_fontColor
        ? theme.fontColors[style.disabled_fontColor]
        : theme.fontColors.grayLight};

      background-color: ${style.disabled_backgroundColor
        ? theme.backgroundColors[style.disabled_backgroundColor]
        : theme.backgroundColors.grayLight};

      box-shadow: ${getBorder(style.disabled_borderColor)(theme)};
    }
  `;
};
