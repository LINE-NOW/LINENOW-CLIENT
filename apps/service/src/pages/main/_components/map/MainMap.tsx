import * as S from "./MainMap.styled";

import { BoothPinProps, useNaverMap } from "@pages/main/_hooks/useNaverMap";
import { memo, useRef } from "react";
import { SelectedBoothCard } from "./MainSelectedBoothCard";
import { useAtom } from "jotai";
import { selectedBoothAtom } from "@pages/main/_atom/selectedBooth";

interface MainMapProps {
  booths: BoothPinProps[];
}
const MainMap = memo((props: MainMapProps) => {
  const { booths } = props;

  const selectedBoothIdRef = useRef<number | null>(null);
  const [selectedBoothId, setSelectedBoothId] = useAtom(selectedBoothAtom);

  const safeSetSelectedBoothId = (id: number | null) => {
    selectedBoothIdRef.current = id;
    setSelectedBoothId(id);
  };

  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useNaverMap(mapContainerRef, selectedBoothId, safeSetSelectedBoothId, booths);

  return (
    <>
      <div id="map" ref={mapContainerRef} css={S.getWrapper} />
      <SelectedBoothCard selectedBoothId={selectedBoothId} />
    </>
  );
});
export default MainMap;
