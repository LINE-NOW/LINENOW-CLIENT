import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const BoothDetailContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BoothDetailContentTitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0rem 0.25rem;

  p {
    ${fonts.body1};
    color: ${({ theme }) => theme.fontColors.blackLight};
  }
`;

export const BoothDetailContentTitle = styled.h1`
  ${fonts.head1};
`;

export const BoothDetailLocation = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0rem 0.25rem;
  ${fonts.body2};
  color: ${({ theme }) => theme.fontColors.blackLight};
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
  ${fonts.body2_b}
  color:${({ theme }) => theme.fontColors.blackLight};
`;
