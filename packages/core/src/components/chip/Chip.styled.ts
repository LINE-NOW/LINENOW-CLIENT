import { css } from "@emotion/react";

export const getWrapperStyle = (width: string) => css`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  width: ${width};
  padding: 0.25rem 0.5rem;

  border: none;
  border-radius: 0.25rem;
`;
