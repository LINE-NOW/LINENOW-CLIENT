// type
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SchemeType, ShapeType } from "@linenow-types/style";
import { fonts } from "@linenow/design-system";

interface ChipWrapperProps {
  $scheme: SchemeType;
  $shape: ShapeType;
}

export const ChipWrapper = styled.div<ChipWrapperProps>`
  display: flex;
  align-items: center;

  padding: 0.25rem 0.5rem;

  border: none;
  border-radius: 0.25rem;

  // TODO: - fonts
  ${fonts.button2}

  // TODO: - scheme
  // 버튼의 스타일이 outline일때
  ${({ $shape }) => {
    if ($shape == "outline") {
      return css`
        border: 1px solid;
        background-color: transparent;
      `;
    }
  }}
`;
