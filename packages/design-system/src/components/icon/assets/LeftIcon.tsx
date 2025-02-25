import { IconAssetProps } from "../Icon";

const LeftIcon = (props: IconAssetProps) => {
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
        d="M11.4 12L16 16.6L14.6 18L8.6 12L14.6 6L16 7.4L11.4 12Z"
        fill={color}
      />
    </svg>
  );
};

export default LeftIcon;
