import { forwardRef } from "react";
import * as S from "./MainBoothList.styled";

import Spinner from "@components/spinner/Spinner";
import MainBoothListItem, { MainBoothListItemProps } from "./MainBoothListItem";

interface MainBoothListProps {
  booths?: MainBoothListItemProps[];
  isLoading: boolean;
}

const MainBoothList = forwardRef<HTMLDivElement, MainBoothListProps>(
  ({ booths = [], isLoading }: MainBoothListProps, ref) => {
    if (isLoading) {
      return <Spinner />;
    }

    return (
      <S.MainBoothListScrollContainer ref={ref}>
        {booths.map((booth, index) => (
          <MainBoothListItem
            key={index}
            isLast={index === booths.length - 1}
            {...booth}
          />
        ))}
      </S.MainBoothListScrollContainer>
    );
  }
);

export default MainBoothList;
