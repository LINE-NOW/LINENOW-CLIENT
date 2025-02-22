import { Booth } from "@interfaces/booth";
import * as S from "./BoothDetailContent.styled";
import IconLabel from "@components/label/IconLabel";

interface BoothDetailContentProps {
  booth: Booth;
}

export const BoothDetailContent = ({ booth }: BoothDetailContentProps) => {
  return (
    <S.BoothDetailContentWrapper>
      <S.BoothDetailContentTitle>{booth.name}</S.BoothDetailContentTitle>
      <S.BoothDetailContentSummary>
        {booth.description}
      </S.BoothDetailContentSummary>
      <IconLabel gap={"0.13rem"} icon={"location_gray_light"} iconSize={"1rem"}>
        <S.BoothDetailContentLocationInfo>
          {booth.location}
        </S.BoothDetailContentLocationInfo>
      </IconLabel>
    </S.BoothDetailContentWrapper>
  );
};
