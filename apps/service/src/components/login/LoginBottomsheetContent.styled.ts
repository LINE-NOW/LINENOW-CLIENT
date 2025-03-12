import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const LoginBottomSheetContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const LoginBottomSheetContentTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0.25rem;
  gap: 0.75rem;
`;

export const LoginBottomSheetContentTopTitle = styled.h1`
  ${fonts.head1}
  color: ${({ theme }) => theme.fontColors.black};
`;

export const LoginBottomSheetContentTopSubTitle = styled.div`
  ${fonts.body1}
  color: ${({ theme }) => theme.fontColors.blackLight};
`;
