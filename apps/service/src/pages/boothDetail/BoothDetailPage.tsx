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

import { WaitingDetailCancel } from "@pages/waitingCheck/WaitingCheckPage.styled";
import { usePostWaitingCancel } from "@hooks/apis/waiting";
import { Button } from "@linenow/core/components";
import { useBottomSheet, useModal } from "@linenow/core/hooks";
import { modalCancelWaiting } from "@components/modal/waiting";
import LoginBottomSheetContent from "@components/bottomSheet/login/LoginBottomSheetContent";

const BoothDetailPage = () => {
  const { isLogin } = useAuth();
  const { openBottomSheet } = useBottomSheet();
  const handleLoginButtonClick = () => {
    openBottomSheet({ children: <LoginBottomSheetContent /> });
  };
  const { boothId } = useParams<{ boothId: string }>();

  const boothNumber = boothId ? parseInt(boothId, 10) : null;

  const { data: booth, isLoading } = useGetBooth({ boothID: boothNumber || 0 });

  const { openModal } = useModal();

  const openCheckModal = () => {
    setIsModalOpen(true);
  };

  const closeCheckModal = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: postWaitingCancel } = usePostWaitingCancel();
  const cancelWaiting = () => {
    postWaitingCancel(booth?.waitingID || 0);
  };

  const onWaitingCancelClick = () => {
    openModal(modalCancelWaiting(cancelWaiting));
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
