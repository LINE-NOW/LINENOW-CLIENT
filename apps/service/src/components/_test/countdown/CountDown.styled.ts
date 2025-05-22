import { css } from "@emotion/react";

export const containerStyle = css`
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  top: 1rem;
  z-index: 9999999999999;

  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  padding: 0.5rem 2rem;
  border-radius: 20rem;

  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(26, 30, 39, 0.1);

  /* 애니메이션 추가 */
  animation: floating 2s ease-in-out infinite;

  /* 애니메이션 정의 */
  @keyframes floating {
    0% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 15px); /* 상하로 떠오르는 효과 */
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
`;
