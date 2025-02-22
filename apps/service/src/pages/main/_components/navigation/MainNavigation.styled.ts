import styled from "@emotion/styled";
import IconLabel from "@components/label/IconLabel";

// style
import { changeFoldStateAnimation } from "@styles/animation";
import { fonts } from "@linenow/design-system";

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

export const MainNavigationTitleLabel = styled.h3`
  display: flex;
  gap: 0.25rem;

  &.fold {
    ${fonts.head2}
  }
  &.unfold {
    ${fonts.head3}
  }

  color: ${({ theme }) => theme.fontColors.white};

  .lime {
    color: ${({ theme }) => theme.fontColors.lime};
  }
`;
