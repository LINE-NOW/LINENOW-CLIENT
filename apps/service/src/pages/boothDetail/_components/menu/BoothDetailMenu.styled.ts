import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const BoothDetailMenuLayout = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  padding: 1.5rem 1rem;
`;

export const BoothDetailMenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
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
