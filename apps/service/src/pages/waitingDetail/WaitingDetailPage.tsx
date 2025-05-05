import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import * as S from "./WaitingDetailPage.styled";
import BoothCardDetail from "@components/boothCard/boothCardDetail";
import BottomButton from "@components/bottomButton/BottomButton";
import Separator from "@components/separator/Separator";
import WaitingDetailCaution from "./_components/WaitingDetailCaution";
import Spinner from "@components/spinner/Spinner";
import { useGetWaiting, useGetWaitingBooth } from "@hooks/apis/waiting";
import { Button, Toast } from "@linenow/core/components";
import { useModal } from "@linenow/core/hooks";
import WaitingDetailMap from "./_components/WaitingDetailMap";
import { postWaitingCancel } from "@apis/domains/waiting/postWaitingCancel";
// import useAnimation from "./hooks/useAnimation";  // 주석 처리

const WaitingDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<{ waitingID: string }>();
  const waitingID = parseInt(params.waitingID || "0", 10);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { data: waitingDetail, isLoading } = useGetWaiting(waitingID);
  const { data: waitingBooth } = useGetWaitingBooth(waitingID);
  const { openModal } = useModal();

  // 애니메이션 관련 코드 주석 처리
  // const { fadeInCard, slideUpCard, showRest, showToast } = useAnimation(location.state?.withAnimation);

  useEffect(() => {
    if (location.state?.showToast) {
      setShowToast(true);
      setToastMessage(location.state.toastMessage);

      navigate(location.pathname, {
        replace: true,
        state: {},
      });
    }
  }, [location.state]);

  const onWaitingCancelClick = () => {
    openModal({
      title: "정말 대기를 취소하시겠어요?",
      sub: "대기를 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
      primaryButton: {
        children: "줄 서기 취소하기",
        onClick: async () => {
          try {
            await postWaitingCancel({ waiting_id: waitingID });
            navigate("/", {
              replace: true,
              state: { toast: "대기가 취소되었습니다." },
            });
          } catch (e) {
            console.error("대기 취소 실패", e);
          }
        },
      },
      secondButton: {
        children: "이전으로",
      },
    });
  };

  // 뒤로가기 방지
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

  if (isLoading) return <Spinner />;
  if (!waitingDetail || !waitingBooth) {
    return (
      <S.WaitingDetailNoInfo>
        대기 상세 정보를 찾을 수 없습니다.
      </S.WaitingDetailNoInfo>
    );
  }

  const waiting = {
    waitngNum: waitingBooth.waitngNum,
    personCount: waitingBooth.personCount,
    createdAt: waitingBooth.createdAt,
    booth: waitingBooth.booth,
    waitingID: waitingID,
    waitingStatus: waitingDetail.waitingStatus,
    waitingTeamsAhead: waitingDetail.waitingTeamsAhead,
  };

  return (
    <>
      {showToast && (
        <Toast position="top" duration={1}>
          {toastMessage}
        </Toast>
      )}

      {/* <S.WaitingDetailPageBoothCardWrapper isCentered={!slideUpCard}> */}
      {/*   <S.WaitingDetailPageBoothCard */}
      {/*     isCentered={!slideUpCard} */}
      {/*     fadeIn={fadeInCard} */}
      {/*     slideUp={slideUpCard} */}
      {/*   > */}
      {/*     <BoothCardDetail waitingDetail={waiting} /> */}
      {/*   </S.WaitingDetailPageBoothCard> */}
      {/* </S.WaitingDetailPageBoothCardWrapper> */}

      <S.WaitingDetailPageBoothCardWrapper>
        <S.WaitingDetailPageBoothCard>
          <BoothCardDetail waitingDetail={waiting} />
        </S.WaitingDetailPageBoothCard>
      </S.WaitingDetailPageBoothCardWrapper>

      {/* 나머지 부분은 그대로 유지 */}
      {/* <S.WaitingDetailRestWrapper show={true}> */}
      <WaitingDetailMap />
      <Separator />
      <WaitingDetailCaution />
      {/* </S.WaitingDetailRestWrapper> */}

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
