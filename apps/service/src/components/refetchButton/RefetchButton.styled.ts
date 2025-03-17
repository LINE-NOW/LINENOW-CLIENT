import { css } from "@emotion/react";

export const getStyle = () => css`
  padding: 1rem;
`;

export const getBottomButtonStyle = () => {
  return css`
    position: fixed;
    left: 1rem;
    bottom: 1rem;
    box-shadow: 0px 1px 5px 2px rgba(26, 30, 39, 0.1);
  `;
};
