import { css } from "@emotion/react";

export const getWrapper = () => css`
  z-index: 1;
  width: 100%;
  overflow: hidden;
  animation: expandHeight 0.8s ease forwards;
  position: absolute;
  top: calc(13rem);

  @keyframes expandHeight {
    0% {
      height: 13rem;
    }
    100% {
      height: calc(100vh - 13rem);
    }
  }
`;
