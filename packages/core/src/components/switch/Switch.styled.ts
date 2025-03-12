import { css, Theme } from "@emotion/react";
import { fonts } from "../../styles";

export const getWrapperstyle = () => {
  return (theme: Theme) => css`
    display: flex;
    align-items: center;
    gap: 0.12rem;

    border-radius: 24px;
    padding: 0.5rem 0.75rem;

    background-color: ${theme.backgroundColors.white};

    color: ${theme.fontColors.blackLight};
    ${fonts.button2}
  `;
};
