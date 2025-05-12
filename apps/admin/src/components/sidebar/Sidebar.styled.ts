import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const SidebarBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  transform: translate(-50%, 0%);
  top: 5.25rem;
  left: 50%;
  z-index: 25;

  width: 100%;
  height: calc(100% - 5.25rem);

  background-color: rgb(15 15 15 / 70%);
`;

export const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColors.black};
  color: ${({ theme }) => theme.fontColors.white};

  .tablet & {
    grid-row: 2 / 3;
  }
  .mobile & {
    position: fixed;
    z-index: 26;
    top: 3.25rem;
    width: 100%;
  }
`;

export const SidebarUserInfoWapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 2rem 1.25rem 2.25rem 1.25rem;

  h3 {
    ${fonts.head3};
    padding-bottom: 0.25rem;
  }

  h1 {
    ${fonts.head1};
    padding-bottom: 1.5rem;
  }

  .lime {
    color: ${({ theme }) => theme.fontColors.lime};
  }
`;
export const SidebarLogout = styled.span`
  margin-top: 1.5rem;

  ${fonts.body3};
  color: ${({ theme }) => theme.fontColors.gray};
  text-decoration: underline;
  cursor: pointer;
`;

export const SidebarButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

interface SidebarButtonProps {
  isSelected: boolean;
}
export const SidebarButton = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<SidebarButtonProps>`
  padding: 1.5rem 1.25rem;
  background-color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.backgroundColors.blackLight
      : theme.backgroundColors.black};

  ${fonts.head2};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.fontColors.lime : theme.fontColors.white};
`;
