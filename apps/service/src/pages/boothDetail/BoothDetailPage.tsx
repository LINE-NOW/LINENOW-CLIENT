import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BottomButton from "@components/bottomButton/BottomButton";

import {
  BoothDetailCard,
  BoothDetailContent,
  BoothDetailNotice,
  BoothDetailMenu,
} from "./_components";
import WaitingCheckModal from "@pages/waitingCheck/_components/WaitingCheckModal";
import useAuth from "@hooks/useAuth";

import { WaitingDetailCancel } from "@pages/waitingCheck/WaitingCheckPage.styled";

import {
  Button,
  ButtonLayout,
  Flex,
  Separator,
} from "@linenow/core/components";
import { useBottomSheet, useModal, useToast } from "@linenow/core/hooks";

import { useGetBooth, useGetBoothWaiting } from "@hooks/apis/booth";
import { useModalCancelWaiting } from "@components/modal/waiting";
import { BoothLocationMap } from "@components/boothLocationMap/BoothLocationMap";
import EnteringButton from "@components/button/EnteringButton";
import { useSetAtom } from "jotai";
import { boothAtom, waitingAtom } from "@atoms/boothWaitingAtoms";
import RefetchButton from "@components/refetchButton/RefetchButton";
import { QUERY_KEY } from "@hooks/apis/query";
import LoginBottomSheetContent from "@components/bottomSheet/login/LoginBottomSheetContent";
import WaitingTeamsAheadButton from "@components/button/WaitingTeamsAheadButton";
import BoothPageSkeleton from "@components/skeleton/BoothPage.Skeloton";

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
  const setBooth = useSetAtom(boothAtom);
  const setWaiting = useSetAtom(waitingAtom);
  const { openModal } = useModal();
  const { presentToast } = useToast();

  const openCheckModal = () => {
    if (waiting?.isBlack) {
      presentToast("노쇼를 3회 이상하여 대기가 불가능합니다.");
      return;
    }

    if ((waiting?.waitingCnt ?? 0) >= 3) {
      presentToast("동시에 최대 3개 부스까지 대기 가능해요.");
      return;
    }

    setIsModalOpen(true);
  };

  const closeCheckModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (booth) setBooth(booth);
  }, [booth, setBooth]);

  useEffect(() => {
    if (waiting) setWaiting(waiting);
  }, [waiting, setWaiting]);

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
        return `${booth?.totalWaitingTeams}팀`;
    }
  };

  const getInformationButton = () => {
    if (waiting?.waitingStatus === "waiting") {
      return (
        <>
          <ButtonLayout colCount={2} colTemplate="auto 1fr">
            <RefetchButton
              queries={[
                QUERY_KEY.BOOTH(boothNumber ?? 0),
                QUERY_KEY.BOOTH_WAITING(boothNumber ?? 0),
              ]}
            />
            <WaitingTeamsAheadButton
              waitingTeamsAhead={waiting.waitingTeamsAhead}
            />
          </ButtonLayout>
          <WaitingDetailCancel>
            <span onClick={onWaitingCancelClick}> 대기 취소하기</span>
          </WaitingDetailCancel>
        </>
      );
    }
    if (waiting?.waitingStatus === "entering") {
      return (
        <>
          <EnteringButton confirmedAt={waiting.confirmedAt} />
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
    return <BoothPageSkeleton />;
  }

  return (
    <>
      {booth && (
        <>
          <BoothDetailCard booth={booth} />
          <Flex padding="16px 16px 20px 16px" direction="column" gap="1rem">
            <BoothDetailContent booth={booth} />
            <BoothDetailNotice booth={booth} />
          </Flex>
          <Separator height={8} />

          {!isModalOpen && <BoothLocationMap booth={booth} />}

          <Separator height={8} />

          <BoothDetailMenu booth={booth} />
          <div>
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
          </div>
        </>
      )}
    </>
  );
};

export default BoothDetailPage;
