import { css, Theme } from "@emotion/react";
import { getBorder, getHoverAnimation } from "@linenow/core/styles";

export const getWaitingCardStyle =
  (type: "black" | "white" = "white", isDisabled: boolean = false) =>
  (theme: Theme) =>
    css`
      ${isDisabled || getHoverAnimation}
      border-radius: 0.75rem;
      padding: 0.75rem;
      flex-shrink: 0;

      ${type === "white" &&
      css`
        background-color: ${theme.backgroundColors.white};
        box-shadow: ${getBorder("gray")(theme)};
      `}

      ${type === "black" &&
      css`
        background-color: ${theme.backgroundColors.blackLight};
      `}
    `;

export const getBoothThumbnailStyle = (isDisabled: boolean) => css`
  padding: 0rem 0.25rem;

  ${isDisabled &&
  css`
    opacity: 0.3;
  `}
`;
