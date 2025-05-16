import { useRef } from "react";
import * as S from "./BoothLocationMap.styled";
import { Booth } from "@interfaces/booth";
import { useSmallNaverMap } from "@hooks/useSmallNaverMap";
import { useNavigate } from "react-router-dom";
import useMainViewType from "@pages/main/_hooks/useMainViewType";
import { Icon } from "@linenow/core/components";
import { useToast } from "@linenow/core/hooks";
import { useSetAtom } from "jotai";
import { latLngAtom } from "@atoms/location";

interface BoothLocationContentProps {
  booth: Booth;
}

export const BoothLocationMap = ({ booth }: BoothLocationContentProps) => {
  const mapRef = useRef<null | HTMLDivElement>(null);
  const navigate = useNavigate();
  const setLatLng = useSetAtom(latLngAtom);
  const { setViewType } = useMainViewType();

  const { presentToast } = useToast();
  useSmallNaverMap(mapRef, booth);
  return (
    <S.BoothLocationMapWrapper>
      부스 위치
      <S.BoothLocationMap ref={mapRef}>
        <S.BoothLocationMapClickableBar
          onClick={() => {
            setViewType("map");
            navigate("/", { state: booth.boothID });
            setLatLng({
              lat: Number(booth.latitude),
              lng: Number(booth.longitude),
            });
          }}
        >
          클릭해서 지도 보기
        </S.BoothLocationMapClickableBar>
      </S.BoothLocationMap>
      <S.BoothLocationMapLocationWrapper>
        {booth.location}
        <S.BoothLocationMapLocationCopyWrapper
          onClick={() => {
            if (booth.location) {
              navigator.clipboard.writeText(booth.location);
              presentToast("복사 완료");
            }
          }}
        >
          <Icon icon="copy" color="gray" size={16} />
          위치복사
        </S.BoothLocationMapLocationCopyWrapper>
      </S.BoothLocationMapLocationWrapper>
    </S.BoothLocationMapWrapper>
  );
};
