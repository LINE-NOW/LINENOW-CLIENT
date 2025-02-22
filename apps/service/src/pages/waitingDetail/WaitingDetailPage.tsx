import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./WaitingDetailPage.styled";
import BoothCardDetail from "@components/boothCard/boothCardDetail";
import BottomButton from "@components/bottomButton/BottomButton";
import Separator from "@components/separator/Separator";
import WaitingDetailCaution from "./_components/WaitingDetailCaution";

import Spinner from "@components/spinner/Spinner";
import { useGetWaiting, usePostWaitingCancel } from "@hooks/apis/waiting";
import { Button, useModal } from "@linenow/design-system";

const WaitingDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ waitingID: string }>();
  const waitingID = parseInt(params.waitingID || "0", 10);

  // 대기 상세 정보 가져오기
  const { data: waitingDetail, isLoading } = useGetWaiting({
    waitingID: waitingID,
  });

  const { openModal } = useModal();

  const { mutate: postWaitingCancel } = usePostWaitingCancel();

  const waitingCancelModal = {
    title: "정말 대기를 취소하시겠어요?",
    sub: "대기를 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    primaryButton: {
      children: "줄 서기 취소하기",
      onClick: () => postWaitingCancel(waitingID),
    },
    secondButton: {
      children: "이전으로",
    },
  };

  const onWaitingCancelClick = () => {
    openModal(waitingCancelModal);
  };

  //main으로 이동한 후 뒤로가기 막기
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();
      navigate("/", { replace: true });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!waitingDetail) {
    return (
      <S.WaitingDetailNoInfo>
        대기 상세 정보를 찾을 수 없습니다.
      </S.WaitingDetailNoInfo>
    );
  }

  return (
    <>
      <S.WaitingDetailPageBoothCardWrapper>
        <S.WaitingDetailPageBoothCard>
          <BoothCardDetail waitingDetail={waitingDetail} />
        </S.WaitingDetailPageBoothCard>
      </S.WaitingDetailPageBoothCardWrapper>

      <Separator />

      <WaitingDetailCaution />

      <BottomButton
        informationTitle="전체 대기"
        informationSub={`${waitingDetail?.totalWaitingTeams || 0}팀`}
      >
        <Button variant="blueLight">
          <span>내 앞으로 지금</span>
          <span>{waitingDetail?.waitingTeamsAhead || 0}팀</span>
        </Button>
        <S.WaitingDetailCancel>
          <span onClick={onWaitingCancelClick}> 대기 취소하기</span>
        </S.WaitingDetailCancel>
      </BottomButton>
    </>
  );
};

export default WaitingDetailPage;
