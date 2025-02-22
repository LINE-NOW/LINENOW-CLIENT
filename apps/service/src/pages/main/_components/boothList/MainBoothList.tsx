import { forwardRef } from "react";
import * as S from "./MainBoothList.styled";

import Spinner from "@components/spinner/Spinner";
import { BoothsElement } from "@interfaces/booth";
import BoothCardMain from "@components/boothCard/boothCardMain";

interface MainBoothListProps {
  boothList?: BoothsElement[];
  isLoading: boolean;
}

const MainBoothList = forwardRef<HTMLDivElement, MainBoothListProps>(
  ({ boothList = [], isLoading }: MainBoothListProps, ref) => {
    if (isLoading) {
      return <Spinner />;
    }

    return (
      <S.MainBoothListScrollContainer ref={ref}>
        {boothList?.map((booth: BoothsElement) => (
          <BoothCardMain key={booth.boothID} booth={booth} />
        ))}
      </S.MainBoothListScrollContainer>
    );
  }
);

export default MainBoothList;
