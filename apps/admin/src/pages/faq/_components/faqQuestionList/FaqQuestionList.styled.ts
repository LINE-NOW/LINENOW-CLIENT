import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const FaqQuestionListWrapper = styled.section`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
`;

export const FaqQuestionListTitle = styled.h2`
  ${fonts.head2}
`;

export const FaqQuestionListCard = styled.section`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
`;

export const FaqQuestionListCardTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  cursor: pointer;
`;

export const FaqQuestionTextQA = styled.article`
  color: ${({ theme }) => theme.fontColors.blue};
  ${fonts.body1}
`;

export const FaqQuestionTextMain = styled.article`
  ${fonts.body2_b}
  color: ${({ theme }) => theme.fontColors.blackLight};
  white-space: pre-line;
  word-break: keep-all;
`;

export const FaqAnswerListCard = styled.section`
  display: flex;
  width: 100%;
  min-height: 5rem;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: ${({ theme }) => theme.backgroundColors.blueLight};
  border-top: 0.0625rem solid ${({ theme }) => theme.borderColors.grayLight};
`;

export const FaqListCard = styled.section`
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  flex-direction: column;
  border-top: 0.0625rem solid ${({ theme }) => theme.borderColors.grayLight};
`;
