import { BoothThumbnail } from "@interfaces/booth";

import { useSetAtom } from "jotai";

import { selectedBoothAtom } from "@pages/main/_atom/selectedBooth";

import * as S from "./MainBoothList.styled";
import MainBoothListItem from "./MainBoothListItem";

// gdg
import GDGBoothListItem from "src/_gdg/GDGBoothListItem";
import { useGetGDGBooths } from "src/_gdg/hooks";

interface MainBoothListProps {
  isFetching?: boolean;
  booths: BoothThumbnail[];
}

const MainBoothList = (props: MainBoothListProps) => {
  const { booths, isFetching = false } = props;

  const { data: GDGBooths } = useGetGDGBooths();

  const setBoothNull = useSetAtom(selectedBoothAtom);
  setBoothNull(null);
  // 리스트가 비어있을 경우
  if (booths.length === 0) return;

  return (
    <div css={S.getBoothListWrapperStyle()}>
      {booths.map((booth, index) => (
        <MainBoothListItem
          key={`LINENOW ${index}`}
          isFetching={isFetching}
          {...booth}
        />
      ))}

      {GDGBooths?.map((booth, index) => (
        <GDGBoothListItem key={`GDG ${index}`} {...booth} />
      ))}
    </div>
  );
};

export default MainBoothList;
