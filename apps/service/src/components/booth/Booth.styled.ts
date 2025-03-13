import { css } from "@emotion/react";

export const getImageStyle = (size: string, borderRadius: string) => css`
  width: ${size};
  height: ${size};
  border-radius: ${borderRadius};
`;
