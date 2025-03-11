import styled from "@emotion/styled";
import { fonts } from "@linenow/core/src/styles";
import * as A from "@styles/animation";

export const WaitingCardWrapper = styled.div`
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;

  padding: 1.25rem 1rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColors.gray};
  border-radius: 0.75rem;

  background-color: ${({ theme }) => theme.backgroundColors.white};

  ${(props) => props.onClick && A.onClickButtonAnimation}
`;

// WaitingCardTitle
export const WaitingCardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.75rem;
  padding: 0 0.25rem;
  padding-bottom: 0.75rem;
  box-shadow: 0 -1px 0 0 ${({ theme }) => theme.borderColors.gray} inset;
`;

export const WaitingCardTitleLabel = styled.h2`
  ${fonts.head2}
  color: ${({ theme }) => theme.fontColors.black};

  .blue {
    ${fonts.head2_b}
    color: ${({ theme }) => theme.fontColors.blue};
  }
`;

// BoothInformation
export const BoothInformationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const BoothInformationImage = styled.img`
  width: 3.25rem;
  height: 3.25rem;

  border-radius: 0.25rem;
  border: none;

  background-color: ${({ theme }) => theme.backgroundColors.blueLight};
`;

export const BoothInformaitonLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.25rem 0rem;
`;

export const BoothInformationNameLabel = styled.h3`
  ${fonts.head3}
  color: ${({ theme }) => theme.fontColors.black};

  display: flex;
  gap: 0.25rem;

  :nth-of-type(2) {
    color: ${({ theme }) => theme.fontColors.gray};
  }
`;

export const BoothInformationPositionLabel = styled.p`
  ${fonts.body3}
  color: ${({ theme }) => theme.fontColors.gray};
`;

export const WaitingCardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

//WaitingCardNoCard

export const WaitingCardNoCardContent = styled.div`
  display: flex;

  flex-direction: column;
  gap: 0.75rem;

  justify-content: center;
  align-items: center;
  height: 7.75rem;

  span {
    color: ${({ theme }) => theme.fontColors.gray};
  }
`;

export const WaitingCardNoCardImg = styled.img`
  width: 3.25rem;
  height: 3.25rem;
`;
