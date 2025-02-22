import styled from "@emotion/styled";

export const FaqWrapper = styled.section`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.backgroundColors.white};
`;

export const FaqMainZone = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const SeparatorLine = styled.div`
  display: flex;

  width: 100%;

  height: 4px;

  background-color: ${({ theme }) => theme.backgroundColors.grayLight};
`;
