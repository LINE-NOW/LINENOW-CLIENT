import { BoothThumbnailBadgeProps } from "@components/booth/BoothThumbnailBadge";
import * as S from "./MainBoothList.styled";

import MainBoothListItem from "./MainBoothListItem";

interface MainBoothListProps {
  booths: BoothThumbnailBadgeProps[];
}

const MainBoothList = (props: MainBoothListProps) => {
  const { booths } = props;

  // 리스트가 비어있을 경우
  if (booths.length === 0) return;

  return (
    <div css={S.getBoothListWrapperStyle()}>
      {booths.map((booth, index) => {
        const isLast = index === booths.length - 1;
        return <MainBoothListItem key={index} isLast={isLast} {...booth} />;
      })}
    </div>
  );
};

export default MainBoothList;
