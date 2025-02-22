import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// type
import { ButtonSizeType } from "./Button";
import { SchemeType, ShapeType } from "@linenow-types/style";
import { onClickButtonAnimation } from "@styles/animation";
import { fonts } from "@linenow/design-system";

interface ButtonWrapperProps {
  $isDisabled?: boolean;
  $size: ButtonSizeType;
  $width: string;
  $scheme: SchemeType;
  $shape: ShapeType;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  // 자식노드가 1개면 중앙 정렬, 2개 이상이면 양끝 정렬

  ${(props) => css`
    ${props.children && React.Children.count(props.children) === 1
      ? `
      justify-content: center;
    `
      : `
      justify-content: space-between;
    `}
  `}

  // onClick이 있고 비활성 상태가 아닐 때만 hover 스타일 적용
  ${(props) => props.onClick && !props.$isDisabled && onClickButtonAnimation}

  ${({ $width }) => {
    return css`
      width: ${$width};
    `;
  }}


  ${({ $size }) => {
    switch ($size) {
      case "large":
        return css`
          ${fonts.button1}
          height: 3.5rem;
          padding: 0 1.25rem;
          border-radius: 0.5rem;

          img {
            width: 1.5rem;
            height: 1.5rem;
          }
        `;
      case "medium":
        return css`
          ${fonts.button2}
          height: 2.75rem;
          padding: 0 0.75rem;
          border-radius: 0.5rem;

          img {
            width: 1.25rem;
            height: 1.25rem;
          }
        `;
    }
  }} //TODO:-scheme
`;
