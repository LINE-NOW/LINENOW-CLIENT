import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "@linenow/design-system";

interface InputTextWrapperProps {
  $width: string;
}

export const InputTextWrapper = styled.section<InputTextWrapperProps>`
  display: flex;
  flex-direction: column;

  ${({ $width }) => {
    return css`
      width: ${$width};
    `;
  }}
`;

export const InputTextLabelWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding: 0rem 0.25rem;
  padding-bottom: 0.5rem;
`;

export const InputTextLabel = styled.label`
  ${fonts.head3}
  color: ${({ theme }) => theme.fontColors.blue};
`;

export const InputDescriptionLabel = styled.span`
  white-space: pre-line;

  ${fonts.caption}
  color: ${({ theme }) => theme.fontColors.gray};
`;

export const InputTextFiledWrapper = styled.section`
  display: flex;
  gap: 0.5rem;
`;

interface InputTextFieldProps {
  $disabled: boolean;
}
export const InputTextField = styled.div<InputTextFieldProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  flex-grow: 1;

  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px
    ${({ theme, $disabled }) =>
      $disabled ? theme.borderColors.grayLight : theme.borderColors.blue};

  padding: 0.625rem 1rem;

  input {
    flex-grow: 1;

    ${fonts.body1}
    color: ${({ theme }) => theme.fontColors.black};

    &::placeholder {
      color: ${({ theme }) => theme.fontColors.gray};
    }
  }

  input:disabled {
    background-color: transparent;
    color: ${({ theme }) => theme.fontColors.gray};

    &::placeholder {
      color: ${({ theme }) => theme.fontColors.grayLight};
    }
  }

  input:focus {
    outline: none;
  }

  img {
    flex-shrink: 0;

    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const InputTextBottomLabelWrapper = styled.section`
  display: flex;
  gap: 0.5rem;
  justify-content: end;

  width: 100%;

  padding: 0rem 0.25rem;
  padding-top: 0.5rem;
`;

export const InputTextCountLabel = styled.div`
  ${fonts.caption}
  color: ${({ theme }) => theme.fontColors.gray};
`;

export const InputTextErrorLabel = styled.label`
  flex-grow: 1;
  white-space: pre-line;

  padding: 0rem 0.25rem;
  ${fonts.caption};
  color: #fd553e;
`;
