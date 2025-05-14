import { Booth } from "@interfaces/booth";
import * as S from "./BoothDetailContent.styled";
import BoothDetailInfo from "@pages/boothDetail/boothDetailInfo/BoothDetailInfo";

interface BoothDetailContentProps {
  booth: Booth;
}

export const BoothDetailContent = ({ booth }: BoothDetailContentProps) => {
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
          iconText="예상 운영 시작"
          infoData={booth.boothStartTime}
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
