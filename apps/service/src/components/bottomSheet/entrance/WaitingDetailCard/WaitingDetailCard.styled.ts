import { css, Theme } from "@emotion/react";
import { getBorder, getBottomBorder, getTopBorder } from "@linenow/core/styles";

export const getContainerStyle = () => (theme: Theme) =>
  css`
    border-radius: 0.75rem;
    box-shadow: ${getBorder("grayLight")(theme)};
  `;

export const getBoothCardStyle = () => (theme: Theme) =>
  css`
    border-radius: 0.75rem;
    box-shadow: ${getTopBorder("grayLight")(theme)},
      ${getBottomBorder("grayLight")(theme)};
    padding: 0.75rem 0.25rem;
    border-radius: 0;
  `;
