import { css, Theme } from "@emotion/react";
import { MainViewType } from "@pages/main/types";
import { changeFoldStateAnimation } from "@styles/animation";

const MAIN_FIXED_COMPONENTS_HEIGHT = {
  fold: "8.75rem",
  unfold: "18.75rem",
};

export const getWrapper = (type: MainViewType, isFold: boolean) => {
  return (theme: Theme) => {
    const getHeight = isFold
      ? MAIN_FIXED_COMPONENTS_HEIGHT.fold
      : MAIN_FIXED_COMPONENTS_HEIGHT.unfold;

    const getListStyle =
      type === "list" &&
      css`
        position: fixed;
        overflow-y: hidden;
        max-width: 540px;
        height: ${getHeight};

        background-color: ${theme.backgroundColors.black};
      `;

    return css`
      ${getListStyle}
      display: flex;
      flex-direction: column;

      width: 100%;

      ${changeFoldStateAnimation};
    `;
  };
};

export const getSpace = (isFold: boolean) => {
  const getHeight = isFold
    ? MAIN_FIXED_COMPONENTS_HEIGHT.fold
    : MAIN_FIXED_COMPONENTS_HEIGHT.unfold;

  return css`
    width: 100%;
    height: ${getHeight};
    ${changeFoldStateAnimation};
  `;
};

export const getNavigationWrapper = (type: MainViewType, isFold: boolean) => {
  return (theme: Theme) => {
    const getPaddingBottom = isFold ? "0.75rem" : "1.25rem";

    const getListStyle = css`
      padding-bottom: ${getPaddingBottom};
    `;
    const getMapStyle =
      type === "map" &&
      css`
        background-color: ${theme.backgroundColors.black};
        border-radius: 0rem 0rem 0.625rem 0.625rem;
      `;

    return css`
      overflow-x: hidden;

      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex-grow: 1;
      padding: 0.75rem 1.25rem 0rem 1.25rem;

      ${getMapStyle}
      ${getListStyle}
    `;
  };
};
