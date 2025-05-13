import { useEffect, useState } from "react";
import { useGetWaitings } from "@hooks/apis/booth";
import MainWaitingCard from "./_components/MainWaitingCard";
import * as S from "./MainPage.styled";
import TagList from "./_components/tag/TagList";
import Spinner from "@components/spinner/Spinner";
import { WaitingStatusParams } from "@linenow-types/status";
import { useGetWaitingsCounts } from "@hooks/apis/boothManaging";
import useWebSocket from "@hooks/useSocket";
import { Waiting } from "@interfaces/waiting";
import { transformGetWaitingResponse } from "@apis/domains/booth/_interfaces";

interface BoothInfo {
  waiting_team_cnt: number;
  entering_team_cnt: number;
  entered_team_cnt: number;
  canceled_team_cnt: number;
}

const MainPage = () => {
  const { data: waitingsCounts } = useGetWaitingsCounts();
  const [selectedTag, setSelectedTag] = useState<string>("전체보기");
  const [waitings, setWaitings] = useState<Waiting[]>([]);
  const [boothInfo, setBoothInfo] = useState<BoothInfo>({
    waiting_team_cnt: 0,
    entering_team_cnt: 0,
    entered_team_cnt: 0,
    canceled_team_cnt: 0,
  });

  const getStatus = (tag: string): WaitingStatusParams => {
    switch (tag) {
      case "대기 중":
        return "waiting";
      case "호출 중":
        return "entering";
      case "입장 완료":
        return "entered";
      case "대기 취소":
        return "canceled";
      default:
        return undefined;
    }
  };

  //웹소켓 연결
  const handleWebSocketMessage = (message: any) => {
    const status = message?.data?.waiting_status;
    console.log("status", status);
    const updatedWaiting = transformGetWaitingResponse(message?.data);
    console.log("update", updatedWaiting);

    // 사용자가 대기 건 경우
    setWaitings((prevWaitings) => {
      if (status === "waiting") {
        return [...prevWaitings, updatedWaiting];
      }

      // 대기 취소된 경우
      if (status === "canceled") {
        return prevWaitings.map((waiting) =>
          waiting.waitingID === updatedWaiting.waitingID
            ? { ...waiting, waitingStatus: "canceled" }
            : waiting
        );
      }

      return prevWaitings;
    });

    //부스 정보 소켓
    const boothInfo = message?.data?.booth_info;
    if (boothInfo) {
      setBoothInfo((_) => ({
        waiting_team_cnt: boothInfo.waiting_team_cnt,
        entering_team_cnt: boothInfo.entering_team_cnt,
        entered_team_cnt: boothInfo.entered_team_cnt,
        canceled_team_cnt: boothInfo.canceled_team_cnt,
      }));
    }
  };

  useWebSocket(handleWebSocketMessage);

  // API hooks
  const { data, isLoading } = useGetWaitings(getStatus(selectedTag));

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  useEffect(() => {
    if (data) {
      setWaitings(data);
    }
  }, [data]);

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
        waiting={boothInfo.waiting_team_cnt}
        calling={boothInfo.entering_team_cnt}
        arrived={boothInfo.entered_team_cnt}
        canceled={boothInfo.canceled_team_cnt}
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
