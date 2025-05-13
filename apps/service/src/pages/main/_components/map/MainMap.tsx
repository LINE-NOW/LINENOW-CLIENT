import * as S from "./MainMap.styled";
import { useGetBoothsLocation } from "@hooks/apis/booth";
import { useNaverMap } from "@pages/main/_hooks/useNaverMap";
import { useRef } from "react";

const MainMap = () => {
  const { data: locations } = useGetBoothsLocation();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useNaverMap("map", locations);

  return <div id="map" ref={mapContainerRef} css={S.getWrapper}></div>;
};
export default MainMap;
