import { IconAssetProps } from "../Icon";

const DownIcon = (props: IconAssetProps) => {
  const { color = "black", size = 24 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12.6L16.6 8L18 9.4L12 15.4L6 9.4L7.4 8L12 12.6Z"
        fill={color}
      />
    </svg>
  );
};

export default DownIcon;
