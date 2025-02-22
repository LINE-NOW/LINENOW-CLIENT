import styled from "@emotion/styled";

export const BoothDetailCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  max-width: 540px;
`;

export const BoothDetailCardThumbnail = styled.img`
  width: 100%;
  height: 23.4375rem;
  display: flex;
`;

export const BoothDetailCardIndicatorWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
`;

export const BoothDetailCardIndicator = styled.div<{ $active: boolean }>`
  width: 0.25rem;
  height: 0.25rem;

  border-radius: 50%;

  background-color: ${({ $active, theme }) =>
    $active ? theme.backgroundColors.blue : theme.backgroundColors.grayLight};

  transition: background-color 0.3s ease;
`;
