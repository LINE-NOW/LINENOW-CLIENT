import { css, Theme } from "@emotion/react";

import { fonts } from "../../styles/fonts";
import { getBorder } from "../../styles/border";

export const getWrapperStyle = () => css`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    align-items: center;
  }
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
    box-shadow: ${getBorder("gray")(theme)};

    padding: 0.625rem 1rem;

    &:focus-within {
      box-shadow: ${getBorder("blue", 2)(theme)};
    }
  `;
};

export const getInpuTextFieldErrorStyle = () => (theme: Theme) =>
  css`
    box-shadow: ${getBorder("red", 2)(theme)};

    &:focus-within {
      box-shadow: ${getBorder("red", 2)(theme)};
    }
  `;

export const getInputStyle = () => (theme: Theme) =>
  css`
    flex-grow: 1;

    border: none;
    outline: none;

    ${fonts.body1}
    color: ${theme.fontColors.black};

    &::placeholder {
      color: ${theme.fontColors.gray};
    }
  `;
