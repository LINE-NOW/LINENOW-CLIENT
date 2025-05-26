import { css } from "@emotion/react";

export const getWrapperStyle = (gap: string) => css`
  gap: ${gap};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
