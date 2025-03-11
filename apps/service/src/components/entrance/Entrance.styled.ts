import styled from "@emotion/styled";
import { fonts } from "@linenow/core/src/styles";

export const EntranceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  align-self: stretch;
`;

export const EntranceContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const EntranceTextWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;

  padding: 0px 0.25rem;
`;

export const EntranceTitle = styled.h1`
  color: ${({ theme }) => theme.fontColors.black};

  ${fonts.head1}
`;

export const EntranceDescription = styled.article`
  color: ${({ theme }) => theme.fontColors.blackLight};

  ${fonts.body1}
`;

export const EntranceBoothCardWrapper = styled.section`
  border: 0.0625rem solid ${({ theme }) => theme.backgroundColors.grayLight};
  border-radius: 0.5rem;
`;
