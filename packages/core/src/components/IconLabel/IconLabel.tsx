//components
import * as S from "./IconLabel.styled";
import Icon from "../icon/Icon";
import Label from "../label/Label";

// types
type IconPosition = "left" | "right";

type LabelProps = React.ComponentProps<typeof Label>;
type IconProps = Omit<React.ComponentProps<typeof Icon>, "icon">;

export interface IconLabelProps extends LabelProps {
  icon: React.ComponentProps<typeof Icon>["icon"];
  iconPosition?: IconPosition;
  iconProps?: IconProps;

  gap: string;
}

const IconLabel = ({
  icon,
  iconPosition = "left",
  iconProps,
  gap,
  children,
  ...labelProps
}: IconLabelProps) => {
  const IconComponent = () => <Icon icon={icon} {...iconProps} />;

  return (
    <Label css={[S.getWrapperStyle(gap)]} {...labelProps}>
      {iconPosition == "left" && <IconComponent />}
      {children}
      {iconPosition == "right" && <IconComponent />}
    </Label>
  );
};

export default IconLabel;
