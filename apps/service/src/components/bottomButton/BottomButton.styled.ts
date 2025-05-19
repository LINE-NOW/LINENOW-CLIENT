import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const BottomButtonWrapper = styled.section`
  display: flex;
  gap: 0.75rem;

  position: fixed;
  transform: translate(-50%, 0%);
  bottom: 0;
  left: 50%;

  width: 100%;
  height: auto;
  max-width: 540px;

  padding: 1rem;
  padding-bottom: 0.5rem;
  border-radius: 12px 12px 0px 0px;

  background-color: ${({ theme }) => theme.backgroundColors.white};
  box-shadow: 0px 0px 4px 4px rgba(26, 30, 39, 0.1);

  flex-direction: column;
  z-index: 100;
`;

export const BottomButtonInformationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  height: 1.25rem;
  padding: 0 0.25rem;

  // TODO: - chips
  ${fonts.button2}
  color: ${({ theme }) => theme.fontColors.black};

  .blue {
    ${fonts.body2_b}
    color: ${({ theme }) => theme.fontColors.blue};
  }
`;

export const BottomButtonPadding = styled.div<{ $height: number }>`
  height: ${({ $height }) => ($height + 10) / 16}rem;
  flex-shrink: 0;
`;
