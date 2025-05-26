import { fonts } from "@linenow/core/styles";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const getTitleLabelStyle = () => css`
  padding: 0 0.25rem;
`;

export const BoothLocationMapWrapper = styled.section`
  ${fonts.head3}
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoothLocationMap = styled.div`
  /* 지도 높이는 고정으로 생각해서 하단처럼 지정합니다! */
  cursor: pointer;

  position: relative;
  height: 12.5rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.borderColors.gray};
`;

export const BoothLocationMapClickableBar = styled.div`
  position: absolute;

  width: 100%;
  bottom: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 0.5rem 0.5rem;

  z-index: 2;

  color: ${({ theme }) => theme.fontColors.blackLight};
  background-color: ${({ theme }) => theme.backgroundColors.white};
  opacity: 0.8;

  ${fonts.caption};
`;
