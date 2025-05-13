// import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

// const fadeSlideUpCard = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(50vh);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const slideUpRest = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(40px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

export const WaitingDetailNoInfo = styled.h1`
  display: flex;
  align-items: end;
  justify-content: center;

  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;

  ${fonts.body1}
`;

// export const WaitingDetailPageBoothCardWrapper = styled.div<{
//   isCentered: boolean;
// }>`
//   width: 100%;
//   padding: 16px 20px 20px 20px;

//   ${({ isCentered }) =>
//     isCentered &&
//     `
//  max-width: 540px;
//     width: 100%;
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 1000;
//     transition: top 0.8s ease, left 0.8s ease, transform 0.8s ease;
//   `}
// `;

export const WaitingDetailPageBoothCardWrapper = styled.div`
  width: 100%;
  padding: 16px 20px 20px 20px;
`;

// export const WaitingDetailPageBoothCard = styled.div<{
//   isCentered: boolean;
//   fadeIn: boolean;
//   slideUp: boolean;
// }>`
//   border: 1px solid;
//   border-color: ${({ theme }) => theme.borderColors.gray};
//   border-radius: 8px;

//   ${({ fadeIn, slideUp }) =>
//     (fadeIn || slideUp) &&
//     `
//     animation: ${fadeSlideUpCard} 1s ease forwards;
//   `}
// `;

export const WaitingDetailPageBoothCard = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColors.gray};
  border-radius: 8px;
`;

export const WaitingDetailCancel = styled.div`
  display: flex;
  justify-content: center;

  padding: 0.25rem 0px;

  color: ${({ theme }) => theme.fontColors.gray};

  span {
    padding-bottom: 0.125rem;

    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.borderColors.gray};

    cursor: pointer;
  }
`;
/* 
export const WaitingDetailRestWrapper = styled.div<{ show: boolean }>`
  ${({ show }) =>
    show &&
    `
    animation: ${slideUpRest} 0.6s ease forwards;
  `}
`; */
