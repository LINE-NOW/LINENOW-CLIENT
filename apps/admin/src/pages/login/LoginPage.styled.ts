import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColors.black};
`;

export const LoginLogo = styled.img`
  width: 16.875rem;
  margin-bottom: 3rem;
`;

export const LoginBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 2.5rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.backgroundColors.white};
`;

export const LoginBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const LoginBoxTitle = styled.h1`
  ${fonts.head1};
`;

export const LoginBoxInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  width: 20.6875rem;
  gap: 0.5rem;
`;

export const LoginBoxSubTitle = styled.h3`
  ${fonts.head3};
  padding: 0 0.25rem;
  color: ${({ theme }) => theme.fontColors.black};
`;

export const LoginIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
