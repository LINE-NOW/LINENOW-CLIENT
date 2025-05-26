import { useRef } from "react";
import * as S from "./BoothLocationMap.styled";
import { Booth } from "@interfaces/booth";
import { useSmallNaverMap } from "@hooks/useSmallNaverMap";
import { useNavigate } from "react-router-dom";
import useMainViewType from "@pages/main/_hooks/useMainViewType";
import {
  CommonButton,
  Flex,
  Icon,
  IconLabel,
  Label,
} from "@linenow/core/components";
import { useToast } from "@linenow/core/hooks";
import { useSetAtom } from "jotai";
import { latLngAtom } from "@atoms/location";
import { ROUTE } from "@constants/route";
import { selectedBoothAtom } from "@pages/main/_atom/selectedBooth";

interface BoothLocationContentProps {
  booth: Booth;
}

export const BoothLocationMap = ({ booth }: BoothLocationContentProps) => {
  const mapRef = useRef<null | HTMLDivElement>(null);
  const navigate = useNavigate();
  const setLatLng = useSetAtom(latLngAtom);
  const setBooth = useSetAtom(selectedBoothAtom);
  const { setViewType } = useMainViewType();

  const navigateMainMap = () => {
    setViewType("map");
    setBooth(booth.boothID);
    setLatLng({
      lat: Number(booth.latitude),
      lng: Number(booth.longitude),
    });
    navigate(ROUTE.DEFAULT);
  };

  const { presentToast } = useToast();
  useSmallNaverMap(mapRef, booth);

  return (
    <S.BoothLocationMapWrapper>
      <Label font="head3" color="black" css={[S.getTitleLabelStyle()]}>
        부스 위치
      </Label>

      <S.BoothLocationMap ref={mapRef} onClick={navigateMainMap}>
        <S.BoothLocationMapClickableBar>
          클릭해서 지도 보기
        </S.BoothLocationMapClickableBar>
      </S.BoothLocationMap>

      <Flex
        width="100%"
        justifyContent="space-between"
        gap="1rem"
        alignItem="start"
        padding="0 0.25rem 0.5rem 0.25rem"
      >
        <Label font="body2" color="black">
          {booth.location}
        </Label>

        <CommonButton
          onClick={() => {
            if (booth.location) {
              navigator.clipboard.writeText(booth.location);
              presentToast("위치 복사가 완료되었어요!");
            }
          }}
        >
          <IconLabel
            icon="copy"
            iconProps={{ color: "gray", size: 16 }}
            gap={"0.25rem"}
            font="body2"
            color="blackLight"
          >
            위치복사
          </IconLabel>
        </CommonButton>
      </Flex>
    </S.BoothLocationMapWrapper>
  );
};
