import React from "react";
import { Button } from "@linenow/core/components";

import { Waiting } from "@interfaces/waiting";
import { WaitingDetailCancel } from "@pages/waitingDetail/WaitingDetailPage.styled";
import { Booth } from "@interfaces/booth";

interface BoothInfoButtonProps {
  booth: Booth;
  waiting: Waiting | null;
  onCancelClick: () => void;
  isLogin: boolean;
  openModal: () => void;
}

const BoothInfoButton: React.FC<BoothInfoButtonProps> = ({
  booth,
  waiting,
  onCancelClick,
  isLogin,
  openModal,
}) => {
  const getInformationTitle = () => {
    switch (booth.operatingStatus) {
      case "finished":
        return "부스가 종료되었어요";
      case "not_started":
        return "";
      default:
        return "현재 대기";
    }
  };

  const getInformationSub = () => {
    switch (booth.operatingStatus) {
      case "not_started":
        return "";
      case "finished":
        return undefined;
      default:
        return `${booth.totalWaitingTeams}팀`;
    }
  };

  const getInformationButton = () => {
    if (waiting?.waitingStatus === "waiting") {
      return (
        <>
          <Button variant="blueLight">
            <span>내 앞으로 지금</span>
            <span className="blue">{waiting.waitingTeamsAhead}팀</span>
          </Button>
          <WaitingDetailCancel>
            <span onClick={onCancelClick}>대기 취소하기</span>
          </WaitingDetailCancel>
        </>
      );
    }
    if (waiting?.waitingStatus === "entering") {
      return (
        <>
          <Button variant="blueLight">
            <span>입장 중...</span>
          </Button>
          <WaitingDetailCancel>
            <span onClick={onCancelClick}>대기 취소하기</span>
          </WaitingDetailCancel>
        </>
      );
    }

    switch (booth.operatingStatus) {
      case "not_started":
        return (
          <Button disabled>
            <span>부스 운영 전이에요.</span>
          </Button>
        );
      case "operating":
        return (
          <Button onClick={openModal}>
            <span>대기하기</span>
          </Button>
        );
      case "paused":
        return (
          <Button disabled>
            <span>대기가 중지 됐어요</span>
          </Button>
        );
      case "finished":
        return (
          <Button disabled>
            <span>종료</span>
          </Button>
        );
    }
  };

  return (
    <>
      <div>
        <h3>{getInformationTitle()}</h3>
        <p>{getInformationSub()}</p>
        {isLogin ? (
          getInformationButton()
        ) : (
          <Button variant="lime" onClick={openModal}>
            <span>로그인하고 이용하기</span>
          </Button>
        )}
      </div>
    </>
  );
};

export default BoothInfoButton;
