import styled from "@emotion/styled";
import { fonts } from "@linenow/core/src/styles";

export const SettingDeleteIDComponentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem 0.25rem;
`;

export const SettingDeleteIDComponentText = styled.button`
  /* TODO:-chips */
  ${fonts.button2}
  color: ${({ theme }) => theme.fontColors.gray};

  cursor: pointer;
`;
