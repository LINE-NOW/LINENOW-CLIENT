import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "@linenow/core/src/styles";

import * as A from "@styles/animation";

import { Link } from "react-router-dom";

interface BoothCardWrapperProps {
  $borderBottom?: string;
  padding?: string;
  $type: string;
}

export const BoothCardWrapper = styled(Link)<BoothCardWrapperProps>`
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
          /* animation: ${A.onClickButtonAnimation}; */
        `;
      case "waiting":
        return css`
          cursor: default;
          padding: 1rem;
        `;
    }
  }}
`;

export const BoothCardInformationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const BoothCardInformationImage = styled.img`
  flex-shrink: 0;

  width: 4.5rem;
  height: 4.5rem;

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

  ${fonts.head3}
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
