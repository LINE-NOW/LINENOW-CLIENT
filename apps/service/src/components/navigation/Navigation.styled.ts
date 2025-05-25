import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const NavigationWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: fixed;
  transform: translate(-50%, 0%);
  top: 0;
  left: 50%;
  /* z-index: 0; */

  width: 100%;
  max-width: 540px;

  padding: 1rem 1.5rem;

  background-color: ${({ theme }) => theme.backgroundColors.white};
`;

export const NavigationLabel = styled.h2`
  ${fonts.head2}
  color: ${({ theme }) => theme.fontColors.black};
`;

export const getFloatingOnBoardingStyle = () => css`
  cursor: pointer;
  position: absolute;
  left: 3rem;
  top: 28px;
  transform: translateY(-50%);

  /* 애니메이션 추가 */
  animation: floating 2s ease-in-out infinite;
  /* 애니메이션 정의 */
  @keyframes floating {
    0% {
      opacity: 1;
    }
    50% {
      left: 2.5rem;
      opacity: 0.9;
      transform: translateY(-50%) scale(0.98);
    }
    100% {
      opacity: 1;
    }
  }
`;
