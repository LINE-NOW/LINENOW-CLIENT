import styled from "@emotion/styled";
import { fonts } from "@linenow/core/src/styles";

export const WaitingDetailNoInfo = styled.h1`
  display: flex;
  align-items: end;
  justify-content: center;

  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;

  ${fonts.body1}
`;

export const WaitingDetailPageBoothCardWrapper = styled.div`
  width: 100%;

  padding: 16px 20px 20px 20px;
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
