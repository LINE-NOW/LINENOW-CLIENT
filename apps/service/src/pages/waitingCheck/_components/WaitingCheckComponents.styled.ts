import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const WaitingCheckContainer = styled.div`
  display: flex;
  overflow-x: auto;

  margin-bottom: 1.75rem;
`;

export const WaitingCheckPeopleCircle = styled.div<{ $isChecked: boolean }>`
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

export const WaitingCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.75rem;
  cursor: pointer;

  span {
    ${fonts.head3}
    color: ${({ theme }) => theme.fontColors.black};
  }
`;

export const WaitingCheckBoxImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
`;
