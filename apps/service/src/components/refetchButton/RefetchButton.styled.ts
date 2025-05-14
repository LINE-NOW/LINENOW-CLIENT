import { css, keyframes } from "@emotion/react";

export const getStyle = () => css`
  width: 3.25rem;
  padding: 0;
`;

export const getSpinAnimation = () => {
  const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

  return css`
    animation: ${spin} 1s linear infinite;
  `;
};
