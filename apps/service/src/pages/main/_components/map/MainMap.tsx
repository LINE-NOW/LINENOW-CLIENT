import * as S from "./MainMap.styled";

const MainMap = () => {
  return (
    <div css={S.getWrapper}>
      <img
        style={{ width: "100%" }}
        src="https://apis.map.kakao.com/ios_v2/dimScreen_off.jpeg"
      />
    </div>
  );
};
export default MainMap;
