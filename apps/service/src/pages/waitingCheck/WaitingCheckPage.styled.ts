import styled from "@emotion/styled";
import { fonts } from "@linenow/core/src/styles";

export const WaitingCheckPageTitle = styled.h1`
  ${fonts.head1}
`;

export const WaitingDetailPageBoothCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 1rem 1.25rem 1.25rem 1.25rem;

  gap: 1.5rem;
`;

export const WaitingDetailPageBoothCard = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColors.gray};
  border-radius: 8px;
`;

export const WaitingDetailCancel = styled.div`
  display: flex;
  justify-content: center;

  padding: 0.25rem 0px;

  color: ${({ theme }) => theme.fontColors.gray};

  span {
    padding-bottom: 0.125rem;

    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.borderColors.gray};

    cursor: pointer;
  }
`;
