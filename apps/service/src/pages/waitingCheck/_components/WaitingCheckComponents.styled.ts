import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const WaitingCheckContainer = styled.div`
  display: flex;
  overflow-x: auto;

  margin-bottom: 1.75rem;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
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

export const WaitingCheckBoxWrapper = styled.div<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 1.75rem;
  gap: 0.5rem;
`;

export const WaitingCheckBox = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.borderColors.gray};
  cursor: pointer;

  &:checked {
    background-image: url("/icons/icon_checkBox_after.svg");
    background-size: cover;
    background-position: center;
    border: none;
  }
`;

export const WaitingCheckBoxLabel = styled.span<{ $checked: boolean }>`
  ${fonts.head3}
  color: ${({ $checked, theme }) =>
    $checked ? theme.fontColors.black : theme.fontColors.gray};
  user-select: none;
  pointer-events: none;
`;
