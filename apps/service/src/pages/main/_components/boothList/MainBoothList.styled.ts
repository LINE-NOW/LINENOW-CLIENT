import { css, Theme } from "@emotion/react";
import { MainViewType } from "@pages/main/types";

import { getBottomBorder, getHoverAnimation } from "@linenow/core/styles";
import { changeFoldStateAnimation } from "@styles/animation";

// 상단 타이틀
export const getHeaderWrapperStyle = (type: MainViewType) => {
  return (theme: Theme) => {
    const getListStyle =
      type === "list" &&
      css`
        padding: 1.5rem 1rem 0.75rem 1rem;
        box-shadow: ${getBottomBorder("grayLight")(theme)};
      `;

    const getMapStyle =
      type === "map" &&
      css`
        padding: 1rem 1rem 0.75rem 1rem;
        box-shadow: 0px -2px 5px 2px rgba(26, 30, 39, 0.1);
      `;

    return css`
      display: flex;
      flex-direction: column;

      gap: 1rem;

      border-radius: 0.625rem 0.625rem 0rem 0rem;

      background-color: ${theme.backgroundColors.white};
      ${getListStyle}
      ${getMapStyle}

      ${changeFoldStateAnimation}
    `;
  };
};

export const getBttohListEmptyView = () => css`
  background-color: red;
  width: 100%;
  height: 500px;
`;
// 부스 리스트
export const getBoothListWrapperStyle = () => (theme: Theme) =>
  css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    min-height: calc(100vh + 2px);

    padding-top: 0.5rem;
    background-color: ${theme.backgroundColors.white};
  `;

// 부스리스트 아이템
export const getBoothListItemStyle = () => (theme: Theme) => {
  return css`
    ${getHoverAnimation}
    padding: 0.75rem 1.25rem 1rem 1.25rem;

    background-color: ${theme.backgroundColors.white};

    &:hover {
      box-shadow: none;
      border-radius: 0.5rem;
    }
  `;
};
