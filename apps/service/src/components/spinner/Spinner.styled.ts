import styled from "@emotion/styled";

export const SpinnerBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 9999999999;

  width: 100%;
  height: 100%;

  /* background-color: rgb(15 15 15 / 70%); */
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  width: 100%;
`;

export const SppinerContent = styled.div`
  width: 64px;
  height: 64px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: "";
    box-sizing: border-box;
    width: 64px;
    height: 64px;
    opacity: 0;
    border-radius: 50%;
    background: blue;
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 0.8s linear infinite;
  }

  &::before {
    animation-delay: 0.4s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0.4;
    }
  }
`;
