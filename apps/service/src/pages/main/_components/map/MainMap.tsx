import * as S from "./MainMap.styled";
import { useGetBoothsLocation } from "@hooks/apis/booth";
import { useMapScript } from "@pages/main/_hooks/useMapScript";
import { useNaverMap } from "@pages/main/_hooks/useNaverMap";

const MainMap = () => {
  const { data: locations } = useGetBoothsLocation();
  const { isReady } = useMapScript();
  const { mapRef } = useNaverMap(isReady, locations);

  return <div id="map" css={S.getWrapper}></div>;
};

export default MainMap;
