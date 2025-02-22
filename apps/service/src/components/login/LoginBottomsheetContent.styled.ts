import styled from "@emotion/styled";
import { fonts } from "@linenow/design-system";

export const LoginBottomsheetContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const LoginBottomsheetContentTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0.25rem;
  gap: 0.75rem;
`;

export const LoginBottomsheetContentTopTitle = styled.h1`
  ${fonts.head1}
  color: ${({ theme }) => theme.fontColors.black};
`;

export const LoginBottomsheetContentTopSubTitle = styled.div`
  ${fonts.body1}
  color: ${({ theme }) => theme.fontColors.blackLight};
`;
