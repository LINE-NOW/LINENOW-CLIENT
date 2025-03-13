import { MAIN_NAVIGATION_HEIGHT } from "@constants/style";
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  fonts,
  getBottomBorder,
  getHoverAnimation,
} from "@linenow/core/styles";

// 상단 타이틀
export const MainBoothListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem 1rem 1rem 1rem;

  border-radius: 0.625rem 0.625rem 0rem 0rem;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.borderColors.grayLight};

  background-color: ${({ theme }) => theme.backgroundColors.white};
`;

export const MainBoothListHeaderTitleLabel = styled.h2`
  ${fonts.head2}
  color: ${({ theme }) => theme.fontColors.black};
`;

export const MainBoothListHeaderOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${fonts.body3}
  color: ${({ theme }) => theme.fontColors.gray};
`;

// 부스 리스트
export const MainBoothListScrollContainer = styled.section`
  display: flex;
  flex-direction: column;

  min-height: calc(100vh - ${MAIN_NAVIGATION_HEIGHT.fold} + 2px);

  padding: 0 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.white};
`;

// 부스리스트 아이템
export const getBoothListItemStyle = (isLast: boolean) => (theme: Theme) =>
  css`
    ${getHoverAnimation}
    padding: 0.75rem 0.25rem 1rem 0.25rem;

    ${isLast ||
    css`
      box-shadow: ${getBottomBorder("gray")(theme)};
    `}
  `;
