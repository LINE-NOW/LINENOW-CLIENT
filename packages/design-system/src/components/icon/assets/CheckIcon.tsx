import { IconAssetProps } from "../Icon";

const CheckIcon = (props: IconAssetProps) => {
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
        d="M9.54961 18L3.84961 12.3L5.27461 10.875L9.54961 15.15L18.7246 5.975L20.1496 7.4L9.54961 18Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckIcon;
