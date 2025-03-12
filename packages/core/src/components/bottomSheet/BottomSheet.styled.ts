import styled from "@emotion/styled";

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
