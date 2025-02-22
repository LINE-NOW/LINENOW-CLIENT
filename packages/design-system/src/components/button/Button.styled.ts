import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { ButtonSize } from "./Button";
import { fonts } from "../../styles/fonts";

export const getSizeStyle = (size: ButtonSize) => {
  switch (size) {
    case "medium":
      return css`
        ${fonts.button2}
        padding: 0.75rem;
        height: 2.75rem;
      `;
    case "large":
      return css`
        ${fonts.button1}
        padding: 0.875rem 1.25rem;
        height: 3.25rem;
      `;
  }
};
export const ButtonWrapper = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    opacity: 0.85;
  }
`;
