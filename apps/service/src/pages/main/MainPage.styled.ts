import styled from "@emotion/styled";
import { changeFoldStateAnimation } from "@styles/animation";

export const MainFixedComponentsWrapper = styled.header`
  position: fixed;
  /* z-index: 0; */

  display: flex;
  flex-direction: column;

  overflow-y: hidden;

  width: 100%;
  max-width: 540px;

  background-color: ${({ theme }) => theme.backgroundColors.black};
`;

export const MainFixedComponentBackgorund = styled.div`
  width: 100%;

  ${changeFoldStateAnimation};
`;
