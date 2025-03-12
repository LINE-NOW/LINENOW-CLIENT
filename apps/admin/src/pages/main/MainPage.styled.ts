import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const MainWaitingCardListScroll = styled.div`
  display: grid;
  column-gap: 1.5rem;
  row-gap: 2.5rem;
  align-items: start;

  grid-template-columns: repeat(1, 1fr); /* 기본 1열 */

  @media (min-width: calc(320px*2 + 24px*1 + 32px*2 + 256px)) {
    grid-template-columns: repeat(2, 1fr); /* 화면이 660px 이상일 때 2열 */
  }

  @media (min-width: calc(320px*3  + 24px*2 + 32px*2 + 256px)) {
    grid-template-columns: repeat(3, 1fr); /* 화면이 1004px 이상일 때 3열 */
  }

  @media (min-width: calc(320px*4  + 24px*3 + 32px*2 + 256px)) {
    grid-template-columns: repeat(4, 1fr); /* 화면이 1348px 이상일 때 4열 */
  }

  width: 100%;

  padding: 1.5rem 2rem;
`;
export const MainWaitingCardList = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
`;

export const MainNoWaiting = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.fontColors.white};
  ${fonts.head1}
`;
