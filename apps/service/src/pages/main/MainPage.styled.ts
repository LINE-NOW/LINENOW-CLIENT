import { css } from "@emotion/react";
import { MainViewType } from "./types";
import { changeFoldStateAnimation } from "@styles/animation";

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
  my_location: { position: "right", bottom: "0px" },
  festival_location: { position: "right", bottom: "0.5rem" },
};

const positionStyles: Record<Position, ReturnType<typeof css>> = {
  left: css`
    left: 1rem;
  `,
  center: css`
    left: 50%;
    transform: translateX(-50%);
  `,
  right: css`
    right: 1rem;
  `,
};

export const getFloatingButtonStyle = (
  buttonType: FloatingButtonType,
  viewType: MainViewType
) => {
  const config = floatingButtonStyleConfigs[buttonType];
  const getBottom = viewType === "list" ? "1rem" : "4rem";

  return css`
    position: fixed;
    ${positionStyles[config.position]}
    bottom: calc(${getBottom} + ${config.bottom});
    box-shadow: 0px 1px 5px 2px rgba(26, 30, 39, 0.1);
    ${changeFoldStateAnimation};
  `;
};
