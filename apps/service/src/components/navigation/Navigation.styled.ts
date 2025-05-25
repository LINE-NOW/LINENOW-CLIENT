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
  position: absolute;
  left: 2.5rem;
  top: 2.5rem;

  /* 애니메이션 추가 */
  animation: floating 2s ease-in-out infinite;
  /* 애니메이션 정의 */
  @keyframes floating {
    0% {
      transform: translate(0%, 0);
    }
    50% {
      transform: translate(0%, 5px);
    }
    100% {
      transform: translate(0%, 0);
    }
  }
`;
