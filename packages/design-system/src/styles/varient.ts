import { css } from "@emotion/react";

import { BackgroundColorKey, BorderColorKey, FontColorKey } from "./theme";

export type Varient = "blue" | "lime" | "blueLight" | "limeLight" | "outline";

interface VarientStyle {
  fontColor: FontColorKey;
  backgroundColor?: BackgroundColorKey;
  borderColor?: BorderColorKey;
  disabled_backgroundColor?: BackgroundColorKey;
  disabled_fontColor?: FontColorKey;
  disabled_borderColor?: BorderColorKey;
}

interface VarientStyles extends Record<Varient, VarientStyle> {}

const varientStyles: VarientStyles = {
  outline: {
    fontColor: "gray",
    borderColor: "gray",
    backgroundColor: "white",
    disabled_fontColor: "grayLight",
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
    fontColor: "blackLight",
  },
};

export const getVarientStyle = (varient: Varient) => {
  const style = varientStyles[varient];

  return (theme: any) => css`
    color: ${theme.fontColors[style.fontColor]};
    background-color: ${style.backgroundColor
      ? theme.backgroundColors[style.backgroundColor]
      : "none"};

    ${style.borderColor &&
    css`
      border-color: ${theme.borderColors[style.borderColor]};
      border: 1px solid;
    `};

    :disabled {
      color: ${style.disabled_fontColor
        ? theme.fontColors[style.disabled_fontColor]
        : theme.fontColors.gray};

      background-color: ${style.disabled_backgroundColor
        ? theme.backgroundColors[style.disabled_backgroundColor]
        : theme.backgroundColors.gray};

      ${style.disabled_borderColor &&
      css`
        border-color: ${theme.borderColors[style.disabled_borderColor]};
        border: 1px solid;
      `};
    }
  `;
};
