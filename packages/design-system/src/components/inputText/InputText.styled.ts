import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../../styles/fonts";

export const getWrapperStyle = (width: string) => css`
  display: flex;
  flex-direction: column;
  width: ${width};

  & > * {
    align-items: center;
  }
`;

export const getLabelStyle = () => css`
  padding: 0rem 0.25rem;
  padding-bottom: 0.75rem;
`;

export const getErrorLabelStyle = () => css`
  padding: 0rem 0.25rem;
  padding-top: 0.25rem;
  color: red;
`;

export const InputTextField = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 100%;

  border-radius: 0.5rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColors.blue};

  padding: 0.75rem 1rem;

  input {
    flex-grow: 1;
    border: none;
    outline: none;
    ${fonts.body1}
    color: ${({ theme }) => theme.fontColors.black};
  }

  img {
    flex-shrink: 0;

    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const getInputStyle = () => {
  return (theme: any) => css`
    flex-grow: 1;

    ${fonts.body1}
    color: ${theme.fontColors.black};
  `;
};
