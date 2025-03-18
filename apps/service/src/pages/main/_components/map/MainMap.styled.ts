import { css } from "@emotion/react";

export const getWrapper = () => css`
  z-index: 0;
  width: 100%;

  overflow: hidden;
  animation: expandHeight 0.8s ease forwards;

  @keyframes expandHeight {
    0% {
      height: 13rem;
    }
    100% {
      height: 100vh;
    }
  }
`;
