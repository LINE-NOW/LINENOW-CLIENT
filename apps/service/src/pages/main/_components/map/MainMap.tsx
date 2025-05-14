import * as S from "./MainMap.styled";
import { useGetBoothsLocation } from "@hooks/apis/booth";
import { useNaverMap } from "@pages/main/_hooks/useNaverMap";
import { memo, useRef, useState } from "react";
import { SelectedBoothCard } from "./MainSelectedBoothCard";

const MainMap = memo(() => {
  const { data: locations } = useGetBoothsLocation();

  const selectedBoothIdRef = useRef<number | null>(null);
  const [selectedBoothId, setSelectedBoothId] = useState<number | null>(null);

  const safeSetSelectedBoothId = (id: number | null) => {
    if (id === null && selectedBoothIdRef.current !== null) return;
    selectedBoothIdRef.current = id;
    setSelectedBoothId(id);
  };

  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useNaverMap(
    mapContainerRef,
    selectedBoothId,
    safeSetSelectedBoothId,
    locations
  );

  return (
    <>
      <div id="map" ref={mapContainerRef} css={S.getWrapper}></div>
      <SelectedBoothCard selectedBoothId={selectedBoothId} />
    </>
  );
});
export default MainMap;
