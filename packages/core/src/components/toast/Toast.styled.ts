import { css, keyframes } from "@emotion/react";
import { ToastPosition } from "./Toast";
import styled from "@emotion/styled";

export const TostProviderWrapper = styled.section`
  width: 100vw;
`;

export const getToastStyle = () => css`
  z-index: 400;
  display: flex;
  justify-content: center;

  padding: 0.75rem 1rem;
  border-radius: 0.5rem;

  background: rgba(26, 30, 39, 0.8);
  box-shadow: 0px 0px 5px 4px rgba(26, 30, 39, 0.1);
`;

export const getToastPostion = (
  position: ToastPosition,
  duration: number
) => css`
  width: calc(100vw - 2rem);
  max-width: 400px;

  position: fixed;
  left: 50%;

  ${position == "bottom" &&
  css`
    bottom: 1.5rem;
    animation: ${fadeInOut("10px")} ${duration}s ease-in-out forwards;
  `}

  ${position == "top" &&
  css`
    top: 1.5rem;
    animation: ${fadeInOut("-10px")} ${duration}s ease-in-out forwards;
  `}
`;

const fadeInOut = (size: string) => keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, ${size});
  }
  10% {
    opacity: 1;
    transform: translate(-50%, 0px);
  }
  90% {
    opacity: 1;
    transform: translate(-50%, 0px);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 0px);
  }
`;
