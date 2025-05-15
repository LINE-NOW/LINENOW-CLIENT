import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

import { Link } from "react-router-dom";

interface BoothCardWrapperProps {
  $borderBottom?: string;
  padding?: string;
  $type: string;
}

export const BoothCardWrapper = styled("div")<BoothCardWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
  box-sizing: border-box;

  ${({ theme, $type }) => {
    switch ($type) {
      case "main":
        return css`
          padding: 0.75rem 0.25rem 1rem 0.25rem;
          border-color: ${theme.borderColors.grayLight};
          border-bottom: 1px solid;
          cursor: pointer;
        `;
      case "waiting":
        return css`
          cursor: default;
          padding: 1rem;
        `;
    }
  }}
`;

export const BoothCardWaitingNum = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem 0rem 0.75rem 0rem;
  gap: 0.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColors.gray};
  ${fonts.body2}

  .waitingNum {
    ${fonts.head1_b}
    color: ${({ theme }) => theme.fontColors.blue};
  }
`;

export const BoothCardPersonNumWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.borderColors.gray};
  ${fonts.caption}
  color: ${({ theme }) => theme.fontColors.gray};
`;

export const BoothCardPersonNum = styled.div`
  display: flex;
  justify-content: space-between;
  ${fonts.body2_b}
  color: ${({ theme }) => theme.fontColors.blackLight};
`;

export const BoothCardInformationWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0rem 0.25rem;
  height: 4.5rem;
`;
export const BoothCardInformationImage = styled.img`
  flex-shrink: 0;

  width: 3rem;
  height: 3rem;

  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.backgroundColors.blueLight};
`;

export const BoothCardInformationLabelWrapper = styled.div`
  flex-grow: 1;
  overflow-x: hidden;

  padding: 0.25rem 0rem;
`;

export const BoothCardInformationNameLabel = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  padding-bottom: 0.125rem;

  ${fonts.body2_b}
  color:${({ theme }) => theme.fontColors.black};

  :nth-of-type(2) {
    color: ${({ theme }) => theme.fontColors.gray};
  }
`;

export const BoothCardInformationDescriptionLabel = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  padding-bottom: 0.38rem;

  ${fonts.body2}
  color:${({ theme }) => theme.fontColors.blackLight};
`;

export const BoothCardInformationLocationLabel = styled.div`
  ${fonts.body3}
  color:${({ theme }) => theme.fontColors.gray};
`;

export const BoothCardChipListWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: end;

  width: 100%;
`;
