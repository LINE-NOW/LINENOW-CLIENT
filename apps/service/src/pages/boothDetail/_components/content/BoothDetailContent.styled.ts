import styled from "@emotion/styled";
import { fonts } from "@linenow/core/src/styles";

export const BoothDetailContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.25rem 1rem;
`;

export const BoothDetailContentTitle = styled.h1`
  ${fonts.head1};
`;

export const BoothDetailContentSummary = styled.article`
  ${fonts.body1};
`;

export const BoothDetailContentLocationWrapper = styled.section`
  display: flex;

  gap: 0.125rem;
`;
export const BoothDetailContentLocationIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const BoothDetailContentLocationInfo = styled.div`
  ${fonts.body3}
  color:${({ theme }) => theme.fontColors.gray};
`;
