import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const Title = styled.h3`
  ${fonts.head3}

  padding: 0px 0.25rem 0.75rem 0.25rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColors.grayLight};
`;
