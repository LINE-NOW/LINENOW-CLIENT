import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "@linenow/core/src/styles";

export const WaitingCheckContainer = styled.div`
  display: flex;
  overflow-x: auto;

  margin-bottom: 1.75rem;
  /* 
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  } */
`;

export const Circle = styled.div<{ $isChecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.25rem;
  height: 3.25rem;

  padding: 0.625rem;
  margin-right: 1rem;

  border-radius: 2.5rem;

  ${({ $isChecked, theme }) => css`
    box-shadow: 0 0 0 1px inset ${theme.borderColors.blue};
    background-color: ${$isChecked ? theme.backgroundColors.blue : ""};
    color: ${$isChecked ? theme.fontColors.white : theme.fontColors.blue};
  `}

  cursor: pointer;
  flex-shrink: 0;

  &:last-child {
    margin-right: 0;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.75rem;
  cursor: pointer;

  span {
    ${fonts.head3}
    color: ${({ theme }) => theme.fontColors.black};
  }
`;

export const CheckBoxImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
`;
