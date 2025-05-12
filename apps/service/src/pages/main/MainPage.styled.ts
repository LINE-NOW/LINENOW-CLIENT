import { css, Theme } from "@emotion/react";
import { MainViewType } from "./types";
import { changeFoldStateAnimation } from "@styles/animation";

export const getFloatingButtonWrapperStyle =
  (viewType: MainViewType) => (theme: Theme) => {
    const getBottom = viewType === "list" ? "1rem" : "4rem";
    return css`
      /* main page의 header 보다 위에 */
      z-index: 2;
      position: fixed;
      bottom: ${getBottom};
      transform: translateX(-50%);
      left: 50%;

      width: 100%;
      max-width: ${theme.maxWidth};

      ${changeFoldStateAnimation};
    `;
  };

type Position = "left" | "center" | "right";

type FloatingButtonType =
  | "refetch"
  | "switch"
  | "my_location"
  | "festival_location";

interface FloatingButtonStyleConfig {
  position: Position;
  bottom: string;
}

const floatingButtonStyleConfigs: Record<
  FloatingButtonType,
  FloatingButtonStyleConfig
> = {
  refetch: { position: "left", bottom: "0px" },
  switch: { position: "center", bottom: "0px" },
  my_location: { position: "right", bottom: "4rem" },
  festival_location: { position: "right", bottom: "0px" },
};

const positionStyles: Record<Position, ReturnType<typeof css>> = {
  left: css`
    left: 1rem;
  `,
  center: css`
    left: 50%;
    transform: translateX(-50%);
    &:hover {
      transform: translateX(-50%) scale(0.95);
    }
  `,
  right: css`
    right: 1rem;
  `,
};

export const getFloatingButtonStyle = (buttonType: FloatingButtonType) => {
  const config = floatingButtonStyleConfigs[buttonType];

  return css`
    position: absolute;
    ${positionStyles[config.position]}
    bottom: ${config.bottom};

    box-shadow: 0px 1px 5px 2px rgba(26, 30, 39, 0.1);
  `;
};
