import { css, Theme } from "@emotion/react";

export const getContainerStyle = (theme: Theme) => css`
  background-color: ${theme.backgroundColors.blueLight};
  border-radius: 0.5rem;
`;
