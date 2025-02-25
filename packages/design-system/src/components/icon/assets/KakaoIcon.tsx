import { IconAssetProps } from "../Icon";

const KakaoIcon = (props: IconAssetProps) => {
  const { color = "black", size = 24 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.6C7.02917 3.6 3 6.71296 3 10.5523C3 12.94 4.5584 15.045 6.93152 16.297L5.93303 19.9445C5.84481 20.2668 6.21341 20.5237 6.49646 20.3369L10.8733 17.4482C11.2427 17.4838 11.6181 17.5046 12 17.5046C16.9705 17.5046 20.9999 14.3918 20.9999 10.5523C20.9999 6.71296 16.9705 3.6 12 3.6"
        fill={color}
      />
    </svg>
  );
};

export default KakaoIcon;
