import { useEffect, useState } from "react";
import { useGetWaitings } from "@hooks/apis/booth";
import MainWaitingCard from "./_components/MainWaitingCard";
import * as S from "./MainPage.styled";
import TagList from "./_components/tag/TagList";
import Spinner from "@components/spinner/Spinner";
import { WaitingStatusParams } from "@linenow-types/status";
import { useGetWaitingsCounts } from "@hooks/apis/boothManaging";
import { useAtom } from "jotai";
import { authAtom } from "@atoms/auth";
import PauseOverlay from "./_components/overlay/PauseOverlay";
import useWebSocket from "@hooks/useSocket";
import { Waiting } from "@interfaces/waiting";
import { transformGetWaitingResponse } from "@apis/domains/booth/_interfaces";
import { BoothInfo } from "@apis/domains/boothManaging/_interfaces";
import sortWaitings from "./utils/sortWaitings";

const MainPage = () => {
  const { data: waitingsCounts } = useGetWaitingsCounts();
  const [selectedTag, setSelectedTag] = useState<string>("전체보기");
  const [auth] = useAtom(authAtom);
  const [isRestart, setIsRestart] = useState(true);

  useEffect(() => {
    if (auth?.adminUser?.is_restart) {
      setIsRestart(true);
    } else {
      setIsRestart(false);
    }
  }, [auth]);

  const [waitings, setWaitings] = useState<Waiting[]>([]);
  const [boothInfo, setBoothInfo] = useState<BoothInfo>({
    waiting_team_cnt: 0,
    entering_team_cnt: 0,
    entered_team_cnt: 0,
    canceled_team_cnt: 0,
  });

  useEffect(() => {
    if (waitingsCounts) {
      setBoothInfo({
        waiting_team_cnt: waitingsCounts.waiting_team_cnt,
        entering_team_cnt: waitingsCounts.entering_team_cnt,
        entered_team_cnt: waitingsCounts.entered_team_cnt,
        canceled_team_cnt: waitingsCounts.canceled_team_cnt,
      });
    }
  }, [waitingsCounts]);

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

  // 웹소켓 메시지 처리
  const handleWebSocketMessage = (message: any) => {
    const status = message?.data?.waiting_status;
    const updatedWaiting = transformGetWaitingResponse(message?.data);

    setWaitings((prevWaitings) => {
      let updatedList: Waiting[];

      if (status === "waiting") {
        updatedList = [...prevWaitings, updatedWaiting];
      } else if (status === "canceled" || status === "time_over") {
        updatedList = prevWaitings.map((waiting) =>
          waiting.waitingID === updatedWaiting.waitingID
            ? { ...waiting, waitingStatus: status }
            : waiting
        );
      } else {
        updatedList = prevWaitings.map((waiting) =>
          waiting.waitingID === updatedWaiting.waitingID
            ? updatedWaiting
            : waiting
        );
      }

      return sortWaitings(updatedList);
    });

    // 부스 정보 업데이트
    const boothInfo = message?.data?.booth_info;
    if (boothInfo) {
      setBoothInfo({
        waiting_team_cnt: boothInfo.waiting_team_cnt,
        entering_team_cnt: boothInfo.entering_team_cnt,
        entered_team_cnt: boothInfo.entered_team_cnt,
        canceled_team_cnt: boothInfo.canceled_team_cnt,
      });
    }
  };

  // 웹소켓 연결
  useWebSocket(handleWebSocketMessage);

  const { data, isLoading } = useGetWaitings(getStatus(selectedTag));

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };
  useEffect(() => {
    if (data) {
      setWaitings(sortWaitings(data));
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
      {!isRestart && <PauseOverlay />}
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
