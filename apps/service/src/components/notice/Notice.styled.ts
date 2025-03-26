import { css, Theme } from "@emotion/react";
import { fonts } from "@linenow/core/styles";

export const getWrapperStyle = () => (theme: Theme) =>
  css`
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${theme.backgroundColors["grayGhost"]};

    ${fonts.body2}
    color:${theme.fontColors.blackLight};
    line-height: 1.25rem;
    white-space: pre-line;
  `;
