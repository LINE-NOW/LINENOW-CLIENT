import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const FaqOpenChattingCardWrapper = styled.section`
  display: flex;
  width: 312px;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 0.625rem;

  background: ${({ theme }) => theme.backgroundColors.blueLight};
`;

export const FaqOpenChattingCardOnlineWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  align-self: stretch;
`;

export const FaqOpenChattingCardOnlineText = styled.h3`
  ${fonts.head3}
`;

export const FaqOpenChattingKakaoBtn = styled.button`
  display: flex;
  height: 56px;
  width: 100%;
  padding: 0.875rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;

  border-radius: 0.5rem;
  background: #fee500;
  ${fonts.button1};

  cursor: pointer;
  /* 카카오는 디자인 시스템에 없어서 우선 지정색 할당합니다. */
`;

export const FaqOpenChattingKakaoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;
