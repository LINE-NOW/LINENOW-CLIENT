import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const FaqTextWrapper = styled.section`
  display: flex;
  padding: 1.5rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

export const FaqTitle = styled.h1`
  ${fonts.head1};
`;

export const FaqNoticeText = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${fonts.body1};
`;

export const FaqEnableText = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${fonts.body2};
`;
