import { css } from "@emotion/react";
import { backgroundColors } from "../../styles/colors";

import { SeparatorProps } from "./Separator";

export const getSeparatorStyle = ({ width, height, color }: SeparatorProps) =>
  css`
    display: flex;

    width: ${width};
    height: ${`${height}px`};

    ${color && `background-color: ${backgroundColors[color]};`}
  `;
