import { IconAssetProps } from "../Icon";

const PlayIcon = (props: IconAssetProps) => {
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
        d="M8 19V5L19 12L8 19ZM10 15.35L15.25 12L10 8.65V15.35Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayIcon;
