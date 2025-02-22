import styled from "@emotion/styled";

export const SettingDeleteIDComponentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem 0.25rem;
`;

export const SettingDeleteIDComponentText = styled.button`
  ${({ theme }) => theme.fonts.chip};
  color: ${({ theme }) => theme.fontColors.gray};

  cursor: pointer;
`;
