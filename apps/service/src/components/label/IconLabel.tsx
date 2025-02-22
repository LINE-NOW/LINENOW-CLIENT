import { ReactNode } from "react";
import { IconLabelWrapper } from "./IconLable.styled";

export interface IconLabelProps {
  iconPosition?: "left" | "right";
  gap: string;
  icon: string;
  iconSize: string;

  children: ReactNode;
}

const IconLabel = ({
  iconPosition = "left",
  gap,
  icon,
  iconSize,
  children,
}: IconLabelProps) => {
  return (
    <IconLabelWrapper $gap={gap} $iconSize={iconSize}>
      {iconPosition == "left" ? <img src={`/icons/icon_${icon}.svg`} /> : null}

      {children}

      {iconPosition == "right" ? <img src={`/icons/icon_${icon}.svg`} /> : null}
    </IconLabelWrapper>
  );
};

export default IconLabel;
