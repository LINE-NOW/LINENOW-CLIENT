import { iconColors } from "../../styles/colors";
import { IconColorKey } from "../../styles/theme";
import { IconKey, icons } from "./icons";

interface IconProps extends IconAssetProps {
  icon: IconKey;
}

export interface IconAssetProps {
  color?: IconColorKey;
  size?: number;
}

const Icon = ({ icon, size = 24, color = "black" }: IconProps) => {
  const IconComponent = icons[icon];
  const colorHex = iconColors[color] ? iconColors[color] : color;
  if (!IconComponent) return;

  return <IconComponent size={size} color={colorHex} />;
};

export default Icon;
