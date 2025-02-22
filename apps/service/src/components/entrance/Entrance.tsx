import BoothCardDetail from "@components/boothCard/boothCardDetail";
import * as S from "./Entrance.styled";
import { handleConfirmEntry, handleCancelEntry } from "./entranceUtils";

// import useTimer from "@hooks/useTimer";
import { useEffect, useState } from "react";

import useCountdown from "@hooks/useCountdown";
import { usePostConfirm } from "@hooks/apis/entry";
import { usePostWaitingCancel } from "@hooks/apis/waiting";
import { Waiting } from "@interfaces/waiting";
import { getWaiting } from "@apis/domains/waiting/apis";
import { Button, ButtonLayout, useModal } from "@linenow/design-system";

export interface EntranceProps {
  targetTime: string;
  waitingID?: number;
  isOpen?: boolean;
}

export const Entrance = ({ waitingID, targetTime }: EntranceProps) => {
  const { mutate: postConfirm } = usePostConfirm({
    waitingID: waitingID || 0,
  });
  const { mutate: postCancel } = usePostWaitingCancel();

  const { openModal, closeModal } = useModal();

  const [waitingDetail, setWaitingDetail] = useState<Waiting | null>(null);

  useEffect(() => {
    const fetchWaitingDetail = async () => {
      if (waitingID) {
        const detail = await getWaiting({ waitingID: waitingID });
        setWaitingDetail(detail);
      }
    };

    fetchWaitingDetail();
  }, [waitingID]);

  const { getTime } = useCountdown({
    targetDate: targetTime,
  });

  return (
    <S.EntranceWrapper>
      <S.EntranceContentWrapper>
        <S.EntranceTextWrapper>
          <S.EntranceTitle>입장 의사를 확정해주세요!</S.EntranceTitle>
          <S.EntranceDescription>
            3분 내로 응답하지 않으면 입장은 취소돼요. <br />
            입장 의사를 밝혀주세요.
          </S.EntranceDescription>
        </S.EntranceTextWrapper>
        <S.EntranceBoothCardWrapper>
          {waitingDetail ? (
            <BoothCardDetail waitingDetail={waitingDetail} />
          ) : (
            <span>대기 정보가 없습니다.</span>
          )}
        </S.EntranceBoothCardWrapper>
      </S.EntranceContentWrapper>

      <ButtonLayout colCount={1}>
        <Button
          variant="lime"
          onClick={() => handleConfirmEntry(openModal, closeModal, postConfirm)}
        >
          <span>입장할게요!</span>
          <span>{getTime("MMSS")}</span>
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            handleCancelEntry(openModal, closeModal, () => {
              postCancel(waitingID || 0);
            })
          }
        >
          <span>입장 취소하기</span>
        </Button>
      </ButtonLayout>
    </S.EntranceWrapper>
  );
};
