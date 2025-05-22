import { Booth } from "@interfaces/booth";
import * as S from "./BoothDetailContent.styled";
import BoothDetailInfo from "@pages/boothDetail/boothDetailInfo/BoothDetailInfo";
import { useFormatDate } from "@pages/boothDetail/_hooks/useFormatDate";

interface BoothDetailContentProps {
  booth: Booth;
}

export const BoothDetailContent = ({ booth }: BoothDetailContentProps) => {
  const formatStartTime = useFormatDate(booth.boothStartTime);

  return (
    <S.BoothDetailContentWrapper>
      {/* 부스 이름, 상세설명 */}
      <S.BoothDetailContentTitleContainer>
        <S.BoothDetailContentTitle>{booth.name}</S.BoothDetailContentTitle>
        <p>{booth.description}</p>
      </S.BoothDetailContentTitleContainer>

      <S.BoothDetailLocation>
        <BoothDetailInfo
          icon="clock"
          iconText="축제 시작 시간"
          infoData={formatStartTime}
        />
        <BoothDetailInfo
          icon="location_pin"
          iconText="부스 위치"
          infoData={booth.location}
        />
      </S.BoothDetailLocation>
    </S.BoothDetailContentWrapper>
  );
};
