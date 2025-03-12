import styled from "@emotion/styled";

export const BottomSheetBackground = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20;

  width: 100%;
  max-width: 540px;
  height: 100%;

  background-color: rgb(15 15 15 / 70%);
`;

export const BottonSheetWrapper = styled.section`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0;

  width: 100%;

  padding: 2rem 1rem 0.5rem 1rem;
  border-radius: 0.75rem 0.75rem 0rem 0rem;

  background-color: ${({ theme }) => theme.backgroundColors.white};
`;
