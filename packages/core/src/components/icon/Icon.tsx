import * as S from "./Icon.styled";

import { iconColors } from "../../styles/colors";
import { IconColorKey } from "../../styles/theme";
import { IconKey, icons } from "./icons";

interface IconProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: IconKey;
  color?: IconColorKey;
  size?: number;
}

export interface IconAssetProps {
  color?: string;
  size?: number;
}

const Icon = (props: IconProps) => {
  const { icon, size = 24, color, ...attributes } = props;
  const IconComponent = icons[icon];

  if (!IconComponent) return;

  return (
    <div css={[S.getContainerStyle(size)]} {...attributes}>
      <IconComponent size={size} color={color && iconColors[color]} />
    </div>
  );
};

export default Icon;
