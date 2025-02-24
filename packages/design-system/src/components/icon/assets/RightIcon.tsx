import { IconAssetProps } from "../Icon";

const RightIcon = (props: IconAssetProps) => {
  const { color = "black", size = 24 } = props;
  const scale = size / 24;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z"
        fill={color}
      />
    </svg>
  );
};

export default RightIcon;
