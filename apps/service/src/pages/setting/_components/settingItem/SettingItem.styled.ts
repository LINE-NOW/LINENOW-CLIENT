import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const SettingItemComponentWrapper = styled.button`
  display: flex;

  padding: 1.25rem 0.25rem;

  border-bottom: 1px solid ${({ theme }) => theme.borderColors.grayLight};

  cursor: pointer;
`;

export const SettingItemComponentText = styled.h3`
  ${fonts.head3}
`;
