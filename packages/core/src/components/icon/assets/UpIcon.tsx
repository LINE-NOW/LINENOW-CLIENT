import { IconAssetProps } from "../Icon";

const UpIcon = (props: IconAssetProps) => {
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
        d="M12 11.4L7.4 16L6 14.6L12 8.6L18 14.6L16.6 16L12 11.4Z"
        fill={color}
      />
    </svg>
  );
};

export default UpIcon;
