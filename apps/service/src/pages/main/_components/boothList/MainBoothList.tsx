import * as S from "./MainBoothList.styled";

import Spinner from "@components/spinner/Spinner";
import MainBoothListItem, { MainBoothListItemProps } from "./MainBoothListItem";

interface MainBoothListProps {
  booths?: MainBoothListItemProps[];
  isLoading: boolean;
}

const MainBoothList = (props: MainBoothListProps) => {
  const { booths = [], isLoading } = props;

  if (isLoading) {
    return <Spinner />;
  }

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
