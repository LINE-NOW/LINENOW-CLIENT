import { BoothThumbnailBadgeProps } from "@components/booth/BoothThumbnailBadge";
import * as S from "./MainBoothList.styled";

import MainBoothListItem from "./MainBoothListItem";
import { useSetAtom } from "jotai";
import { selectedBoothAtom } from "@pages/main/_atom/selectedBooth";

interface MainBoothListProps {
  isFetching?: boolean;
  booths: BoothThumbnailBadgeProps[];
}

const MainBoothList = (props: MainBoothListProps) => {
  const { booths, isFetching = false } = props;
  const setBoothNull = useSetAtom(selectedBoothAtom);
  setBoothNull(null);
  // 리스트가 비어있을 경우
  if (booths.length === 0) return;

  return (
    <div css={S.getBoothListWrapperStyle()}>
      {booths.map((booth, index) => {
        return (
          <MainBoothListItem key={index} isFetching={isFetching} {...booth} />
        );
      })}
    </div>
  );
};

export default MainBoothList;
