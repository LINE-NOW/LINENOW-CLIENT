import { Booth } from "@interfaces/booth";
import * as S from "./BoothDetailContent.styled";
import { IconLabel } from "@linenow/core/components";

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
      <IconLabel
        gap={"0.13rem"}
        icon="location_pin"
        iconProps={{ color: "grayLight", size: 16 }}
      >
        <S.BoothDetailContentLocationInfo>
          {booth.location}
        </S.BoothDetailContentLocationInfo>
      </IconLabel>
    </S.BoothDetailContentWrapper>
  );
};
