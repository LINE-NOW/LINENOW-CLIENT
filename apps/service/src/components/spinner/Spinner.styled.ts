import styled from "@emotion/styled";

export const SpinnerBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  /* z-index: 0; */

  width: 100%;
  height: 100%;

  background-color: rgb(15 15 15 / 70%);
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  width: 100%;
`;

// TODO: - UI 나오는대로 변경
export const SppinerContent = styled.div`
  /* display: inline-block; */

  width: 48px;
  height: 48px;

  border: 5px solid;
  border-color: #fff;
  border-bottom-color: blue;
  border-radius: 50%;

  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
