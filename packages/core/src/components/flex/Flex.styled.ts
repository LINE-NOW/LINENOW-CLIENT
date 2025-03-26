import { css } from "@emotion/react";
import { FlexStyle } from "./Flex";

export const getFlexStyle = (style: FlexStyle) => css`
  width: ${style.width};
  height: ${style.height};
  flex-grow: ${style.flexGrow};

  display: flex;
  flex-direction: ${style.direction};
  gap: ${style.gap};
  align-items: ${style.alignItem};
  justify-content: ${style.justifyContent};

  overflow: ${style.overflow};

  padding: ${style.padding};
`;
