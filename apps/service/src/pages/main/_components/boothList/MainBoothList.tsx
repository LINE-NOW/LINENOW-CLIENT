import { BoothThumbnail } from "@interfaces/booth";

import { useSetAtom } from "jotai";

import { selectedBoothAtom } from "@pages/main/_atom/selectedBooth";

import * as S from "./MainBoothList.styled";
import MainBoothListItem from "./MainBoothListItem";

// gdg
import GDGBoothListItem from "src/_gdg/GDGBoothListItem";
import { useGetGDGBooths } from "src/_gdg/hooks";

// kakao Tmap
import KakaoTMapAD from "src/_kakaoTMap/KakaoTMapAD";
import React from "react";

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
        <React.Fragment key={`LINENOW_FRAGMENT_${index}`}>
          <MainBoothListItem isFetching={isFetching} {...booth} />
          {index === 2 && <KakaoTMapAD />}
        </React.Fragment>
      ))}

      {GDGBooths?.map((booth, index) => (
        <GDGBoothListItem key={`GDG ${index}`} {...booth} />
      ))}
    </div>
  );
};

export default MainBoothList;
