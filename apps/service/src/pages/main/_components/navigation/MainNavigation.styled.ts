import styled from "@emotion/styled";

// style
import { changeFoldStateAnimation } from "@styles/animation";
import { IconLabel } from "@linenow/core/components";
import { css } from "@emotion/react";

export const MainNavigationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 1rem;

  overflow-x: hidden;

  width: 100%;

  box-sizing: border-box;
  padding: 0.75rem 1.25rem 1.25rem 1.25rem;

  ${changeFoldStateAnimation};
`;

export const MainNavigationTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0rem 0.25rem;
  height: 1.5rem;
`;

export const MainNavigationTitleLabelButton = styled(IconLabel)``;

export const getNavigationTitleStyle = () => css`
  display: flex;
  gap: 0.25rem;
`;
