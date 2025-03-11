import styled from "@emotion/styled";
import { fonts } from "@linenow/core/src/styles";

export const SelectWrapper = styled.select`
  -webkit-appearance: none; /* 크롬 화살표 없애기 */
  -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
  appearance: none; /* 화살표 없애기 */
  border: 0;

  text-align: right;

  ${fonts.body3}
  color: ${({ theme }) => theme.fontColors.gray};

  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
