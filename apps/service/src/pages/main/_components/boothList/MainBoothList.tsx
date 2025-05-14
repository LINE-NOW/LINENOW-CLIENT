import * as S from "./MainBoothList.styled";

import MainBoothListItem from "./MainBoothListItem";
import { useBoothList } from "./useBoothList";

const MainBoothList = () => {
  const { booths, currentWaitings } = useBoothList();

  // 리스트가 비어있을 경우
  if (booths.length === 0) return;

  return (
    <div css={S.getBoothListWrapperStyle()}>
      {booths?.map((booth, index) => {
        const isLast = index === booths.length - 1;
        const waiting = currentWaitings[booth.boothID];

        return (
          <MainBoothListItem
            key={index}
            isLast={isLast}
            {...waiting}
            {...booth}
          />
        );
      })}
    </div>
  );
};

export default MainBoothList;
