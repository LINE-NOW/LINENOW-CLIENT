import { IconAssetProps } from "../Icon";

const DropDownIcon = (props: IconAssetProps) => {
  const { color = "black", size = 24 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 15L7 10H17L12 15Z" fill={color} />
    </svg>
  );
};

export default DropDownIcon;
