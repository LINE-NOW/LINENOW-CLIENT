import { css, Theme } from "@emotion/react";
import { MainViewType } from "@pages/main/types";
import { changeFoldStateAnimation } from "@styles/animation";

const MAIN_FIXED_COMPONENTS_HEIGHT = {
  fold: "9.25rem",
  unfold: "19.25rem",
};

export const getWrapper = (type: MainViewType, isFold: boolean) => {
  return (theme: Theme) => {
    const getHeight = isFold
      ? MAIN_FIXED_COMPONENTS_HEIGHT.fold
      : MAIN_FIXED_COMPONENTS_HEIGHT.unfold;

    const getListStyle =
      type === "list" &&
      css`
        height: ${getHeight};
        background-color: ${theme.backgroundColors.black};
      `;

    const getMapStyle =
      type === "map" &&
      css`
        height: 100vh;
        background-color: transparent;
      `;

    return css`
      position: fixed;
      overflow-y: hidden;
      max-width: ${theme.maxWidth};

      ${getListStyle}
      ${getMapStyle}
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 100%;

      ${changeFoldStateAnimation};
    `;
  };
};

export const getSpace =
  (type: MainViewType, isFold: boolean) => (theme: Theme) => {
    const getMapStyle =
      type === "map" &&
      css`
        position: fixed;
        background-color: transparent;
      `;
    const getHeight =
      type === "map"
        ? "100vh"
        : isFold
        ? MAIN_FIXED_COMPONENTS_HEIGHT.fold
        : MAIN_FIXED_COMPONENTS_HEIGHT.unfold;

    return css`
      ${getMapStyle}
      width: 1px;
      max-width: ${theme.maxWidth};
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
        border-radius: 0rem 0rem 0.625rem 0.625rem;
        box-shadow: 0px -2px 5px 2px rgba(26, 30, 39, 0.1);
      `;

    return css`
      overflow-x: hidden;
      overflow-y: hidden;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      padding: 0.75rem 1.25rem 0rem 1.25rem;

      background-color: ${theme.backgroundColors.black};

      ${getMapStyle}
      ${getListStyle}

      ${changeFoldStateAnimation};
    `;
  };
};
