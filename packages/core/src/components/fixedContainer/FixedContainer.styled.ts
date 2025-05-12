import { css, Theme } from "@emotion/react";
import { FixedContainerProps } from "./FixedContainer";

export const getFixedContainerStyle = (
  zIndex: FixedContainerProps["zIndex"],
  justifyContent: FixedContainerProps["justifyContent"]
) => {
  return (theme: Theme) => css`
    display: flex;
    align-items: center;
    justify-content: ${justifyContent};

    position: fixed;
    z-index: ${zIndex};
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    max-width: ${theme.maxWidth};
    width: 100%;
    height: 100%;
  `;
};

export const getFixedBackgroundStyle = () => css`
  position: absolute;

  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  width: 100%;
  height: 100%;

  background-color: rgb(15 15 15 / 70%);
`;
