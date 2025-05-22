import { Icon, IconLabel } from "@linenow/core/components";
import * as S from "./BoothDetailInfo.styled";

interface BoothDetailInfoProps {
  icon: React.ComponentProps<typeof Icon>["icon"];
  iconText: string;
  infoData: string;
}

const BoothDetailInfo = ({
  icon,
  iconText,
  infoData,
}: BoothDetailInfoProps) => {
  return (
    <S.BoothDetailInfoWrapper>
      <S.BoothDetailInfoIconContainer>
        <IconLabel
          gap={"4px"}
          icon={icon}
          font="body2"
          iconProps={{ color: "gray", size: 16 }}
        >
          {iconText}
        </IconLabel>
      </S.BoothDetailInfoIconContainer>
      <S.BoothDetailInfoData>{infoData}</S.BoothDetailInfoData>
    </S.BoothDetailInfoWrapper>
  );
};

export default BoothDetailInfo;
