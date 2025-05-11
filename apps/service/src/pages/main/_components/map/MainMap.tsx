import * as S from "./MainMap.styled";
import { useGetBoothsLocation } from "@hooks/apis/booth";
import { useNaverMap } from "@pages/main/_hooks/useNaverMap";

const MainMap = () => {
  const { data: locations } = useGetBoothsLocation();
  const { mapRef } = useNaverMap(locations);
  console.log(mapRef.current);

  return <div id="map" css={S.getWrapper}></div>;
};

export default MainMap;
