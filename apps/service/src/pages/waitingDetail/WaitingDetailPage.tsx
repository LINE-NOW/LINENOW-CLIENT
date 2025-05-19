import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./WaitingDetailPage.styled";

import BottomButton from "@components/bottomButton/BottomButton";
import Separator from "@components/separator/Separator";
import WaitingDetailCaution from "./_components/WaitingDetailCaution";
import Spinner from "@components/spinner/Spinner";
import { useGetWaiting, useGetWaitingBooth } from "@hooks/apis/waiting";
import { Button, ButtonLayout, Toast } from "@linenow/core/components";
import { useModal } from "@linenow/core/hooks";

import useToastFromLocation from "@hooks/useToastFromLocation";
import { useModalCancelWaiting } from "@components/modal/waiting";
import { useGetBooth } from "@hooks/apis/booth";
import { BoothLocationMap } from "@components/boothLocationMap/BoothLocationMap";
import EnteringButton from "@components/button/EnteringButton";
import RefetchButton from "@components/refetchButton/RefetchButton";
import { QUERY_KEY } from "@hooks/apis/query";
import WaitingDetailCard from "@components/waitingDetailCard/WaitingDetailCard";
import { ROUTE } from "@constants/route";
import WaitingTeamsAheadButton from "@components/button/WaitingTeamsAheadButton";

const WaitingDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ waitingID: string }>();
  const waitingID = parseInt(params.waitingID || "0", 10);
  const { showToast, toastMessage } = useToastFromLocation();

  const { data: waitingDetail, isLoading: isWaitingLoading } =
    useGetWaiting(waitingID);
  const { data: waitingBooth, isLoading: isBoothLoading } =
    useGetWaitingBooth(waitingID);

  const { data: booth } = useGetBooth(
    waitingDetail?.boothID || 0,
    isBoothLoading
  );

  const { openModal } = useModal();

  const cancelModal = useModalCancelWaiting(waitingDetail?.waitingID ?? 0);
  const onWaitingCancelClick = () => {
    openModal(cancelModal);
  };

  // 뒤로가기 방지
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();
      navigate(ROUTE.DEFAULT, { replace: true });
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  if (isWaitingLoading || isBoothLoading) return <Spinner />;
  if (!waitingDetail || !waitingBooth || !booth) {
    return (
      <S.WaitingDetailNoInfo>
        대기 상세 정보를 찾을 수 없습니다.
      </S.WaitingDetailNoInfo>
    );
  }

  const { waitingStatus, waitingTeamsAhead, totalWaitingTeams, confirmedAt } =
    waitingDetail;
  const { waitingNum, personCount } = waitingBooth;
  const isWaiting = waitingStatus === "waiting" || waitingStatus === "entering";

  return (
    <>
      {showToast && (
        <Toast position="top" duration={1}>
          {toastMessage}
        </Toast>
      )}

      <WaitingDetailCard
        waitingID={waitingID}
        waitingNum={waitingNum}
        personCount={personCount}
        booth={{ thumbnail: booth.images[0].imageURL, ...booth }}
      />

      <BoothLocationMap booth={booth} />
      <Separator />
      <WaitingDetailCaution />

      <BottomButton
        informationTitle="현재 대기"
        informationSub={`${totalWaitingTeams}팀`}
      >
        <ButtonLayout colCount={2} colTemplate="auto 1fr">
          {isWaiting && (
            <RefetchButton
              queries={[
                QUERY_KEY.WAITINGS("waiting"),
                QUERY_KEY.WAITING_BOOTH(waitingID),
              ]}
            />
          )}

          {waitingStatus === "waiting" && (
            <WaitingTeamsAheadButton waitingTeamsAhead={waitingTeamsAhead} />
          )}

          {waitingStatus === "entering" && (
            <EnteringButton confirmedAt={confirmedAt} />
          )}

          {!isWaiting && (
            <>
              <div />
              <Button disabled>
                {waitingStatus === "canceled"
                  ? "대기가 취소되었습니다"
                  : waitingStatus === "entered"
                  ? "입장을 완료했습니다."
                  : waitingStatus === "time_over" &&
                    "대기시간이 초과되었습니다."}
              </Button>
            </>
          )}
        </ButtonLayout>

        {isWaiting && (
          <S.WaitingDetailCancel>
            <span onClick={onWaitingCancelClick}> 대기 취소하기</span>
          </S.WaitingDetailCancel>
        )}
      </BottomButton>
    </>
  );
};

export default WaitingDetailPage;
