import styled from "@emotion/styled";

// style
import { changeFoldStateAnimation } from "@styles/animation";
import { IconLabel } from "@linenow/design-system";
import { css } from "@emotion/react";

export const MainNavigationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 1rem;

  overflow-x: hidden;

  width: 100%;

  box-sizing: border-box;
  padding: 1rem 1.25rem 0 1.25rem;

  ${changeFoldStateAnimation};
`;

export const MainNavigationTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0rem 0.25rem;
`;

export const MainNavigationTitleLabelButton = styled(IconLabel)``;

export const getNavigationTitleStyle = () => css`
  display: flex;
  gap: 0.25rem;
`;
