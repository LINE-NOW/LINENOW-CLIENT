import styled from "@emotion/styled";
import { fonts } from "@linenow/core/src/styles";

export const InfoBottomButtonBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 30;

  width: 100%;
  max-width: 540px;
  height: 100%;

  background-color: rgb(15 15 15 / 70%);
`;

export const InfoBottomButtonWrapper = styled.section`
  display: flex;
  /* gap: 0.75rem; */

  position: fixed;
  transform: translate(-50%, 0%);
  bottom: 0;
  left: 50%;

  width: 100%;

  padding: 2rem 1rem 0.5rem 1rem;
  padding-bottom: 0.5rem;
  border-radius: 12px 12px 0px 0px;

  background-color: ${({ theme }) => theme.backgroundColors.white};
  box-shadow: 0px 0px 4px 4px rgba(26, 30, 39, 0.1);

  flex-direction: column;
`;

export const InfoBottomButtonInformationWrapper = styled.div`
  display: flex;
  gap: 0.75rem;

  padding: 0 0.25rem;

  flex-direction: column;

  .title {
    ${fonts.head1}
    color: ${({ theme }) => theme.fontColors.black};
  }

  .subtitle {
    ${fonts.body1}
    color: ${({ theme }) => theme.fontColors.blackLight};
    white-space: pre-line;
  }
`;

export const InfoBottomButtonCheck = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 1.5rem;
  /* margin-bottom: 1.75rem; */
`;
