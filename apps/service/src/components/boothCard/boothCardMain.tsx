import { Chip } from "@linenow/core/src/components";
import * as S from "./BoothCard.styled";

import BoothCardLayout from "./boothCardLayout";
import { BoothsElement } from "@interfaces/booth";

interface BoothCardProps {
  booth: BoothsElement;
}

const BoothCardMain = ({ booth }: BoothCardProps) => {
  const getWaitingChip = () => {
    if (booth.isWaiting) {
      return <Chip variant="lime">대기 중</Chip>;
    }
  };
  const getChip = () => {
    switch (booth.isOperated) {
      case "not_started":
        return <Chip variant="outline">운영 전</Chip>;
      case "finished":
        return <Chip variant="outline">운영 종료</Chip>;
      default:
        return (
          <Chip variant="blueLight">대기 {booth.totalWaitingTeams} 팀</Chip>
        );
    }
  };
  return (
    <BoothCardLayout
      type="main"
      boothImage={booth.thumbnail}
      boothTitle={booth.name}
      boothSummary={booth.description}
      boothLocationInfo={booth.location}
      to={`/booth/${booth.boothID}`}
    >
      <S.BoothCardChipListWrapper>
        {getWaitingChip()}
        {getChip()}
      </S.BoothCardChipListWrapper>
    </BoothCardLayout>
  );
};

export default BoothCardMain;
