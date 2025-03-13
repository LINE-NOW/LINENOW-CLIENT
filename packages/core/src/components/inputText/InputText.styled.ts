import { css, Theme } from "@emotion/react";

import { fonts } from "../../styles/fonts";
import { getBorder } from "../../styles/border";

export const getWrapperStyle = (width: string) => css`
  display: flex;
  flex-direction: column;
  width: ${width};

  & > * {
    align-items: center;
  }
`;

export const getLabelStyle = () => css`
  padding: 0rem 0.25rem;
  padding-bottom: 0.75rem;
`;

export const getErrorLabelStyle = () => css`
  padding: 0rem 0.25rem;
  padding-top: 0.25rem;
  color: red;
`;

export const getInputTextFieldStyle = () => {
  return (theme: Theme) => css`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    width: 100%;

    border-radius: 0.5rem;
    box-shadow: ${getBorder("blue")(theme)};

    padding: 0.75rem 1rem;

    input {
      flex-grow: 1;
      border: none;
      outline: none;

      ${fonts.body1}
      color: ${theme.fontColors.black}
    }

    img {
      flex-shrink: 0;

      width: 1.5rem;
      height: 1.5rem;
    }
  `;
};

export const getInputStyle = () => {
  return (theme: Theme) => css`
    flex-grow: 1;

    ${fonts.body1}
    color: ${theme.fontColors.black};
  `;
};
