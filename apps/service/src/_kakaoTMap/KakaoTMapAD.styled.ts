import { css, Theme } from "@emotion/react";

export const getContainerStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 1rem 1.5rem;
  align-items: center;
  background-color: ${theme.backgroundColors.grayGhost};
`;
