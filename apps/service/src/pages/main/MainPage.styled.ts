import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { changeFoldStateAnimation } from "@styles/animation";

export const getMainHeaderStyle = (mode: "list" | "map") => {
  return (theme: Theme) => css`
    ${mode === "list" &&
    css`
      position: fixed;
      overflow-y: hidden;
      max-width: 540px;
    `}

    display: flex;
    flex-direction: column;

    width: 100%;
    background-color: ${theme.backgroundColors.black};
  `;
};

export const MainFixedComponentBackgorund = styled.div`
  width: 100%;

  ${changeFoldStateAnimation};
`;

export const getSwitchStyle = () => css`
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1rem;
  box-shadow: 0px 1px 5px 2px rgba(26, 30, 39, 0.1);
`;
