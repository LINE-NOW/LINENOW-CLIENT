import { useParams } from "react-router-dom";
import { useState } from "react";
import BottomButton from "@components/bottomButton/BottomButton";

import Separator from "@components/separator/Separator";
import { useGetBooth } from "@hooks/apis/booth";
import Spinner from "@components/spinner/Spinner";
import {
  BoothDetailCard,
  BoothDetailContent,
  BoothDetailNotice,
  BoothDetailMenu,
} from "./_components";
import WaitingCheckModal from "@pages/waitingCheck/_components/WaitingCheckModal";
import useAuth from "@hooks/useAuth";
import useBottomsheet from "@hooks/useBottomsheet";
import LoginBottomsheetContent from "@components/login/LoginBottomsheetContent";

import { WaitingDetailCancel } from "@pages/waitingCheck/WaitingCheckPage.styled";
import { usePostWaitingCancel } from "@hooks/apis/waiting";
import { Button, useModal } from "@linenow/design-system";

const BoothDetailPage = () => {
  const { isLogin } = useAuth();
  const { openBottomsheet } = useBottomsheet();
  const handleLoginButtonClick = () => {
    openBottomsheet({ children: <LoginBottomsheetContent /> });
  };
  const { boothId } = useParams<{ boothId: string }>();

  const boothNumber = boothId ? parseInt(boothId, 10) : null;

  const { data: booth, isLoading } = useGetBooth({ boothID: boothNumber || 0 });

  // TODO:- 이거 누군가는 고쳐주세요... atom쓰는걸로...
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openModal } = useModal();

  const openCheckModal = () => {
    setIsModalOpen(true);
  };

  const closeCheckModal = () => {
    setIsModalOpen(false);
  };

  const onWaitingCancelClick = () => {
    openModal(waitingCancelModal);
  };

  const { mutate: postWaitingCancel } = usePostWaitingCancel();
  const waitingCancelModal = {
    title: "정말 대기를 취소하시겠어요?",
    sub: "대기를 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    primaryButton: {
      onClick: () => postWaitingCancel(booth?.waitingID || 0),
    },
    secondButton: {
      children: "이전으로",
    },
  };

  const getInformationTitle = () => {
    switch (booth?.isOperated) {
      case "not_started":
        return "부스 운영 예상 시간";
      case "finished":
        return "부스가 종료되었어요";
      default:
        return "전체 대기";
    }
  };

  const getInformationSub = () => {
    switch (booth?.isOperated) {
      case "not_started":
        return new Date(booth.openTime).toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
        });

      case "finished":
        return undefined;
      default:
        return `${booth?.totalWaitingTeams || 0}팀`;
    }
  };

  const getInformationButton = () => {
    if (booth?.isWaiting) {
      return (
        <>
          <Button variant="blueLight">
            <span>내 앞으로 지금</span>
            <span className="blue">{booth.waitingTeamsAhead}팀</span>
          </Button>
          <WaitingDetailCancel>
            <span onClick={onWaitingCancelClick}> 대기 취소하기</span>
          </WaitingDetailCancel>
        </>
      );
    }
    switch (booth?.isOperated) {
      case "not_started":
        return (
          <Button disabled>
            <span>부스 운영 전이에요.</span>
          </Button>
        );
      case "operating":
        return (
          <Button onClick={openCheckModal}>
            <span>대기 줄 서기</span>
          </Button>
        );
      case "paused":
        return (
          <Button disabled>
            <span>대기 줄 서기가 중지 되었어요</span>
          </Button>
        );
      case "finished":
        return undefined;
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {booth && (
        <>
          <BoothDetailCard booth={booth} />
          <BoothDetailContent booth={booth} />
          <Separator />
          <BoothDetailNotice booth={booth} />
          <BoothDetailMenu booth={booth} />

          <BottomButton
            informationTitle={getInformationTitle()}
            informationSub={getInformationSub()}
          >
            {isLogin ? (
              getInformationButton()
            ) : (
              // 로그인 하지 않은 경우
              <Button variant="lime" onClick={handleLoginButtonClick}>
                <span>로그인하고 이용하기</span>
              </Button>
            )}

            {isModalOpen && (
              <WaitingCheckModal booth={booth} onClose={closeCheckModal} />
            )}
          </BottomButton>
          {isModalOpen && (
            <WaitingCheckModal booth={booth} onClose={closeCheckModal} />
          )}
        </>
      )}
    </>
  );
};

export default BoothDetailPage;
