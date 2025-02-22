import { useEffect, useState } from "react";
import { useGetWaitings } from "@hooks/apis/booth";
import MainWaitingCard from "./_components/MainWaitingCard";
import * as S from "./MainPage.styled";
import TagList from "./_components/tag/TagList";
import Spinner from "@components/spinner/Spinner";
import { WaitingStatusParams } from "@linenow-types/status";
import { useGetWaitingsCounts } from "@hooks/apis/boothManaging";

const MainPage = () => {
  const { data: waitingsCounts } = useGetWaitingsCounts();
  const [selectedTag, setSelectedTag] = useState<string>("전체보기");

  const getStatus = (tag: string): WaitingStatusParams => {
    switch (tag) {
      case "대기 중":
        return "waiting";
      case "호출 중":
        return "calling";
      case "입장 완료":
        return "arrived";
      case "대기 취소":
        return "canceled";
      default:
        return undefined;
    }
  };

  // API hooks
  const { data: waitings, isLoading } = useGetWaitings(getStatus(selectedTag));

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  useEffect(() => {}, []);

  if (isLoading) {
    return (
      <div style={{ display: "flex", height: "100%" }}>
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <TagList
        selectedTag={selectedTag}
        onTagClick={handleTagClick}
        {...waitingsCounts}
      />

      {waitings && waitings.length > 0 ? (
        <S.MainWaitingCardList>
          <S.MainWaitingCardListScroll>
            {waitings.map((item, index) => (
              <MainWaitingCard key={index} waiting={item} />
            ))}
          </S.MainWaitingCardListScroll>
        </S.MainWaitingCardList>
      ) : (
        <S.MainNoWaiting>아직 대기가 없어요 :(</S.MainNoWaiting>
      )}
    </>
  );
};

export default MainPage;
