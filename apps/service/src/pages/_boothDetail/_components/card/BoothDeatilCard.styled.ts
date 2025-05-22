import styled from "@emotion/styled";

export const BoothDetailCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 540px;
`;

export const BoothDetailCardThumbnail = styled.img`
  width: 100%;
  max-height: 400px;
  display: flex;
  object-fit: contain;
`;

export const BoothDetailCardIndicatorWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  display: flex;
  padding: 12px 0px 16px 0px;
`;

export const BoothDetailCardIndicator = styled.div<{ $active: boolean }>`
  width: 0.25rem;
  height: 0.25rem;

  border-radius: 50%;

  background-color: ${({ $active, theme }) =>
    $active ? theme.backgroundColors.blue : theme.backgroundColors.grayLight};

  transition: background-color 0.3s ease;
`;
