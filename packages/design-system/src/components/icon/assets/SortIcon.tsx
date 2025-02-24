import { IconAssetProps } from "../Icon";

const SortIcon = (props: IconAssetProps) => {
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
      <path d="M3 18V16H9V18H3ZM3 13V11H15V13H3ZM3 8V6H21V8H3Z" fill={color} />
    </svg>
  );
};

export default SortIcon;
