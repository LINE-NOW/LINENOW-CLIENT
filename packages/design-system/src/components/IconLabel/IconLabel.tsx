import { ReactNode } from "react";

//components
import * as S from "./IconLabel.styled";
import Icon, { IconProps } from "../icon/Icon";
import Label from "../label/Label";

// types

export interface IconLabelProps extends React.ComponentProps<typeof Label> {
  iconPosition?: "left" | "right";

  gap: string;
  icon: IconProps;
}

const IconLabel = (props: IconLabelProps) => {
  const { iconPosition = "left", gap, icon, children, ...labelProps } = props;
  return (
    <Label css={[S.getWrapperStyle(gap)]} {...labelProps}>
      {iconPosition == "left" ? <Icon {...icon} /> : null}

      {children}

      {iconPosition == "right" ? <Icon {...icon} /> : null}
    </Label>
  );
};

export default IconLabel;
