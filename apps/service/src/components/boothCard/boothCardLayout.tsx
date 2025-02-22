import { IconLabel } from "@linenow/design-system";
import * as S from "./BoothCard.styled";

interface BoothCardProps {
  type: "main" | "waiting";
  boothTitle: React.ReactNode;
  boothSummary?: string;
  boothLocationInfo?: string;
  boothImage?: string;
  children?: React.ReactNode;
  to?: string;
}

const BoothCardLayout = ({
  type,
  boothTitle,
  boothSummary,
  boothLocationInfo,
  boothImage,
  children,
  to,
}: BoothCardProps) => {
  return (
    <S.BoothCardWrapper to={to || ""} $type={type}>
      <S.BoothCardInformationWrapper>
        <S.BoothCardInformationImage
          src={boothImage || "/images/image_waitingNoCard.png"}
        />
        <S.BoothCardInformationLabelWrapper>
          <S.BoothCardInformationNameLabel>
            {boothTitle}
          </S.BoothCardInformationNameLabel>

          <S.BoothCardInformationDescriptionLabel>
            {boothSummary}
          </S.BoothCardInformationDescriptionLabel>

          <IconLabel
            gap={"0.13rem"}
            icon={{ name: "location_gray_light", size: "1rem" }}
          >
            <S.BoothCardInformationLocationLabel>
              {boothLocationInfo}
            </S.BoothCardInformationLocationLabel>
          </IconLabel>
        </S.BoothCardInformationLabelWrapper>
      </S.BoothCardInformationWrapper>
      {children}
    </S.BoothCardWrapper>
  );
};

export default BoothCardLayout;
