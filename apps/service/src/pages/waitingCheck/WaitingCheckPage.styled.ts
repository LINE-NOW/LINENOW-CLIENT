import styled from "@emotion/styled";

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
