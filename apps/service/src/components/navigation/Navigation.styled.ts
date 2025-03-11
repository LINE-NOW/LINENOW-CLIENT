import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const NavigationWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: fixed;
  transform: translate(-50%, 0%);
  top: 0;
  left: 50%;
  z-index: 10;

  width: 100%;
  max-width: 540px;

  padding: 1rem 1.5rem;

  background-color: ${({ theme }) => theme.backgroundColors.white};
`;

export const NavigationLabel = styled.h2`
  ${fonts.head2}
  color: ${({ theme }) => theme.fontColors.black};
`;
