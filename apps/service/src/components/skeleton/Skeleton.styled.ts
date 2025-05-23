import { css, keyframes } from "@emotion/react";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const getSkeletonStyle = (width: string, height: string) => css`
  width: ${width};
  height: ${height};
  border-radius: 0.25rem;
  background: linear-gradient(100deg, #ecf0f9 0%, #f2f6f9 20%, #ecf0f9 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;
