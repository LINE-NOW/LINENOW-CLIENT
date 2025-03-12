import styled from "@emotion/styled";
import { fonts } from "../../styles/fonts";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  padding: 1.25rem;
  min-width: 21rem;

  .mobile & {
    gap: 1.5rem;
    padding: 1.25rem;
    min-width: 21rem;
  }

  .tablet & {
    gap: 2.25rem;
    padding: 2rem;
    min-width: 30rem;
  }

  border-radius: 0.75rem;

  background-color: ${({ theme }) => theme.backgroundColors.white};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .mobile & {
    gap: 0.75rem;
    padding: 0 0.25rem;
    align-items: start;
  }
  .tablet & {
    gap: 1.25rem;
    align-items: center;
  }
`;

export const ModalTextTitle = styled.h1`
  ${fonts.head1}
  color: ${({ theme }) => theme.fontColors.black};
`;

export const ModalTextSub = styled.span`
  white-space: pre-line;

  ${fonts.body1}
  color: ${({ theme }) => theme.fontColors.blackLight};

  .tablet & {
    text-align: center;
  }
`;
