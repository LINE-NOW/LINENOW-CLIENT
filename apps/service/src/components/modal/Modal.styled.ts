import styled from "@emotion/styled";
import { fonts } from "@linenow/design-system";

export const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 30;

  width: 100%;
  max-width: 540px;
  height: 100%;

  background-color: rgb(15 15 15 / 70%);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  min-width: 21rem;

  padding: 1.25rem;
  border-radius: 0.75rem;

  background-color: ${({ theme }) => theme.backgroundColors.white};
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 0 0.25rem;
`;

export const ModalTextTitle = styled.h1`
  ${fonts.head1}
  color: ${({ theme }) => theme.fontColors.black};
`;

export const ModalTextSub = styled.span`
  white-space: pre-line;

  ${fonts.body1}
  color: ${({ theme }) => theme.fontColors.blackLight};
`;
