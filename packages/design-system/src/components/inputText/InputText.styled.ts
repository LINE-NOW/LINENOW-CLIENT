import styled, { css } from "styled-components";

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

export const InputTextLable = styled.label`
  padding: 0rem 0.25rem;
  ${({ theme }) => theme.fonts.h3}
  color: ${({ theme }) => theme.colors.font.blue};
  padding-bottom: 0.75rem;
`;

export const InputTextField = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 100%;

  border-radius: 0.5rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.blue};

  padding: 0.75rem 1rem;

  input {
    flex-grow: 1;

    ${({ theme }) => theme.fonts.b1}
    color: ${({ theme }) => theme.colors.font.black};
  }

  img {
    flex-shrink: 0;

    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const InputTextErrorLable = styled.label`
  padding: 0rem 0.25rem;
  padding-top: 0.25rem;
  ${({ theme }) => theme.fonts.caption}
  color: red;
`;
