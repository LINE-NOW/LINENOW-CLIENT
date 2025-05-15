import { Icon, IconLabel } from "@linenow/core/components";
import * as S from "./BoothCard.styled";
// import { Link } from "react-router-dom";

interface BoothCardProps {
  type: "main" | "waiting";
  waitingNum?: string;
  boothTitle: React.ReactNode;
  boothSummary?: string;
  boothLocationInfo?: string;
  boothImage?: string;
  children?: React.ReactNode;
  to?: string;
  header?: React.ReactNode;
  bottom?: React.ReactNode;
  navigateTo?: string;
}

const BoothCardLayout = ({
  type,
  // waitingNum,
  boothTitle,
  // boothSummary,
  boothLocationInfo,
  boothImage,
  children,
  to,
  header,
  bottom,
}: // navigateTo,
BoothCardProps) => {
  return (
    <S.BoothCardWrapper $type={type}>
      {/* 상단 */}
      {header !== undefined && header !== null && (
        <S.BoothCardWaitingNum>
          <p>나의 대기 번호</p>
          <p className="waitingNum">{header}</p>
        </S.BoothCardWaitingNum>
      )}
      {/* 중간 */}
      <S.BoothCardInformationWrapper to={to || ""}>
        <S.BoothCardInformationImage
          src={boothImage || "/images/image_waitingNoCard.png"}
        />
        <S.BoothCardInformationLabelWrapper>
          <S.BoothCardInformationNameLabel>
            {boothTitle}
          </S.BoothCardInformationNameLabel>

          <IconLabel
            gap={"0.13rem"}
            icon="location_pin"
            iconProps={{ color: "grayLight", size: 16 }}
          >
            <S.BoothCardInformationLocationLabel>
              {boothLocationInfo}
            </S.BoothCardInformationLocationLabel>
          </IconLabel>
        </S.BoothCardInformationLabelWrapper>

        <Icon icon="right" color="gray" />
      </S.BoothCardInformationWrapper>

      {/* 하단 */}
      {bottom && (
        <S.BoothCardPersonNumWrapper>
          <S.BoothCardPersonNum>
            <p>이용 인원</p>
            <p>{bottom} 명</p>
          </S.BoothCardPersonNum>
          <p>* 다인원의 경우 대기 순서가 뒤로 밀릴 수 있습니다.</p>
        </S.BoothCardPersonNumWrapper>
      )}
      {children}
    </S.BoothCardWrapper>
  );
};

export default BoothCardLayout;
