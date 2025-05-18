import styled from "@emotion/styled";
import { backgroundColors, fonts } from "@linenow/core/styles";

type BackgroundColorKey = keyof typeof backgroundColors;

interface MainWaitingCardWrapperProps {
  $backgroundColor: BackgroundColorKey;
}

export const MainWaitingCardWrapper = styled.div<MainWaitingCardWrapperProps>`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  width: 100%;
  height: auto;

  border-radius: 0.75rem;
  background-color: ${({ $backgroundColor, theme }) =>
    theme.backgroundColors[$backgroundColor]};
`;

export const MainWaitingCardContentWrapper = styled.section`
  margin-top: 1.25rem;
  padding: 1rem;
  padding-top: 1rem;

  background-color: white;
`;

export const MainWaitingCardHeader = styled.div`
  display: flex;

  gap: 0.5rem;
  align-items: center;

  padding: 0.25rem;
  padding-bottom: 0.75rem;

  > .waitingNum {
    flex-shrink: 0;

    width: 3.25rem;
    text-align: center;

    ${fonts.head1}
  }

  > .waitingTime {
    flex-grow: 1;
    overflow: hidden;

    ${fonts.caption}
    color: ${({ theme }) => theme.fontColors.gray};

    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

export const MainWaitingCardInfoBox = styled.div`
  display: flex;

  margin-bottom: 1.25rem;
  padding: 1rem 0rem;

  border-radius: 0.5rem;
  border: solid 1px;
  border-color: ${({ theme }) => theme.borderColors.grayLight};
`;

export const MainWaitingCardPartySizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  width: 4rem;
  margin: 0rem 1.25rem;

  > label {
    ${fonts.caption}
    color: ${({ theme }) => theme.fontColors.gray};
  }

  > .partySize {
    ${fonts.head1}
    color: ${({ theme }) => theme.fontColors.blue};
  }
`;

export const MainWaitingCardUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-left: 1px solid;
  border-color: ${({ theme }) => theme.borderColors.gray};

  padding: 0rem 1.25rem;

  > .userName {
    ${fonts.head3}
    color: ${({ theme }) => theme.fontColors.black};
  }
`;
