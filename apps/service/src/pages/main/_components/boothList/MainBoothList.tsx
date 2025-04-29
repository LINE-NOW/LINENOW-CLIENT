import { useGetBooths, useGetBoothsWaiting } from "@hooks/apis/booth";
import * as S from "./MainBoothList.styled";

import MainBoothListItem from "./MainBoothListItem";

const MainBoothList = () => {
  const { data: booths = [] } = useGetBooths();
  const { data: boothsWaiting = [] } = useGetBoothsWaiting();

  return (
    <div css={S.getBoothListWrapperStyle()}>
      {booths.map((item, index) => {
        const isLast = index === booths.length - 1;
        const booth = {
          ...item,
        };
        const waiting = boothsWaiting[index];
        if (booth.boothID !== waiting.boothID || waiting === undefined) {
          return;
        }
        return (
          <MainBoothListItem
            key={index}
            isLast={isLast}
            waitingStatus={waiting.waitingStatus}
            totalWaitingTeams={waiting.totalWaitingTeams}
            {...booth}
          />
        );
      })}
    </div>
  );
};

export default MainBoothList;
