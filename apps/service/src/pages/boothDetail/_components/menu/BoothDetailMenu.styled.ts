import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const BoothDetailMenuLayout = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  padding: 1.25rem 1rem 1.75rem 1rem;
`;

export const BoothDetailTitle = styled.h1`
  ${fonts.head3}
  padding: 0rem 0.25rem
`;

export const BoothDetailMenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0rem 0.25rem;
`;

export const BoothDetailMenuArticleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const BoothDetailMenuArticle = styled.article`
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.fontColors.blackLight};
  ${fonts.body2}
`;
