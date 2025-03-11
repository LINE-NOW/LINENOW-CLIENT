import { iconColors } from "../../styles/colors";
import { IconColorKey } from "../../styles/theme";
import { IconKey, icons } from "./icons";

interface IconProps {
  icon: IconKey;
  color?: IconColorKey;
  size?: number;
}

export interface IconAssetProps {
  color?: string;
  size?: number;
}

const Icon = ({ icon, size = 24, color }: IconProps) => {
  const IconComponent = icons[icon];

  if (!IconComponent) return;

  return <IconComponent size={size} color={color && iconColors[color]} />;
};

export default Icon;
