import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

import useToastFromLocation from "@hooks/useToastFromLocation";
import { useModalCancelWaiting } from "@components/modal/waiting";
import BoothInfoButton from "@components/bottomButton/WaitingActionButton";
// import useAnimation from "./hooks/useAnimation";  // 주석 처리

const WaitingDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ waitingID: string }>();
  const waitingID = parseInt(params.waitingID || "0", 10);
  const { showToast, toastMessage } = useToastFromLocation();

  const { data: waitingDetail, isLoading } = useGetWaiting(waitingID);
  const { data: waitingBooth } = useGetWaitingBooth(waitingID);
  const { openModal } = useModal();

  console.log("wq:", waitingDetail);

  // 애니메이션 관련 코드 주석 처리
  // const { fadeInCard, slideUpCard, showRest, showToast } = useAnimation(location.state?.withAnimation);

  const cancelModal = useModalCancelWaiting(waitingDetail?.waitingID ?? 0);
  const onWaitingCancelClick = () => {
    openModal(cancelModal);
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
    waitingNum: waitingBooth.waitingNum,
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

      <BoothInfoButton
        booth={waitingBooth.booth} // booth 정보 전달
        waiting={waitingDetail} // waiting 정보 전달
        onCancelClick={onWaitingCancelClick} // 대기 취소 클릭 핸들러 전달
        isLogin={true} // 로그인 상태에 따라 버튼을 다르게 처리
        openModal={openModal} // 모달 열기 핸들러 전달
      />
    </>
  );
};

export default WaitingDetailPage;
