import { useParams } from "react-router-dom";
import { useState } from "react";
import BottomButton from "@components/bottomButton/BottomButton";

import Separator from "@components/separator/Separator";

import Spinner from "@components/spinner/Spinner";
import {
  BoothDetailCard,
  BoothDetailContent,
  BoothDetailNotice,
  BoothDetailMenu,
} from "./_components";
import WaitingCheckModal from "@pages/waitingCheck/_components/WaitingCheckModal";
import useAuth from "@hooks/useAuth";

import { WaitingDetailCancel } from "@pages/waitingCheck/WaitingCheckPage.styled";

import { Button } from "@linenow/core/components";
import { useBottomSheet, useModal } from "@linenow/core/hooks";

import LoginBottomSheetContent from "@components/bottomSheet/login/LoginBottomSheetContent";
import { useGetBooth, useGetBoothWaiting } from "@hooks/apis/booth";
import { useModalCancelWaiting } from "@components/modal/waiting";

const BoothDetailPage = () => {
  const { isLogin } = useAuth();
  // const navigate = useNavigate();
  const { openBottomSheet } = useBottomSheet();
  const handleLoginButtonClick = () => {
    openBottomSheet({ children: <LoginBottomSheetContent /> });
  };
  const { boothId } = useParams<{ boothId: string }>();

  const boothNumber = boothId ? parseInt(boothId, 10) : null;

  const { data: booth, isLoading } = useGetBooth(boothNumber || 0);
  const { data: waiting } = useGetBoothWaiting(boothNumber || 0);

  const { openModal } = useModal();

  const openCheckModal = () => {
    setIsModalOpen(true);
  };

  const closeCheckModal = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const cancelModal = useModalCancelWaiting(waiting?.waitingID ?? 0);
  const onWaitingCancelClick = () => openModal(cancelModal);

  const getInformationTitle = () => {
    switch (booth?.operatingStatus) {
      case "finished":
        return "부스가 종료되었어요";
      case "not_started":
        return "";
      default:
        return "현재 대기";
    }
  };

  const getInformationSub = () => {
    switch (booth?.operatingStatus) {
      case "not_started":
        return "";
      case "finished":
        return undefined;
      default:
        return `${waiting?.totalWaitingTeams || 0}팀`;
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
            <span onClick={onWaitingCancelClick}> 대기 취소하기</span>
          </WaitingDetailCancel>
        </>
      );
    }
    switch (booth?.operatingStatus) {
      case "not_started":
        return (
          <Button disabled>
            <span>부스 운영 전이에요.</span>
          </Button>
        );
      case "operating":
        return (
          <Button onClick={openCheckModal}>
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
        </>
      )}
    </>
  );
};

export default BoothDetailPage;
