import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IconLabelWrapperProps {
  $gap: string;
  $iconSize: string;
}
export const IconLabelWrapper = styled.span<IconLabelWrapperProps>`
  display: flex;
  align-items: center;
  ${({ $gap, $iconSize }) => {
    return css`
      gap: ${$gap};

      & img {
        width: ${$iconSize};
        height: ${$iconSize};
      }
    `;
  }}
`;
