import * as S from "./WaitingCard.styled";
// interfaces
import { Waiting } from "@interfaces/waiting";

// hooks
import { useWaitingCard } from "./_hooks/useWaitingCard";
import { useNavigate } from "react-router-dom";

import { usePostWaitingCancel } from "@hooks/apis/waiting";
import {
  Button,
  Chip,
  CommonButton,
  IconLabel,
} from "@linenow/core/components";
import { useModal } from "@linenow/core/hooks";
interface WaitingCardProps {
  waiting: Pick<
    Waiting,
    | "waitingID"
    | "waitingTeamsAhead"
    | "booth"
    | "partySize"
    | "waitingStatus"
    | "confirmDueTime"
    | "arrivalarrivalDueTime"
  >;
  isButton?: boolean;
  disableClick?: boolean;
}

const WaitingCard = ({ waiting, disableClick = false }: WaitingCardProps) => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const { mutate: postWaitingCancel } = usePostWaitingCancel();

  const targetTime = () => {
    switch (waiting.waitingStatus) {
      case "ready_to_confirm":
        return waiting.confirmDueTime;
      case "confirmed":
        return waiting.arrivalarrivalDueTime;
      default:
        return null;
    }
  };

  const cancelModal = {
    title: "정말 대기를 취소하시겠어요?",
    sub: "대기를 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    primaryButton: {
      children: "줄 서기 취소하기",
      onClick: () => {
        postWaitingCancel(waiting.waitingID || 0);
      },
    },

    secondButton: {
      children: "이전으로",
    },
  };

  const handleCancelButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    openModal(cancelModal);
  };

  const handleWaitingCard = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disableClick) {
      navigate(`/waiting/${waiting.waitingID}`, {
        state: waiting.waitingID,
      });
    } else {
      event.stopPropagation();
    }
  };

  const config = useWaitingCard({
    waitingID: waiting.waitingID || 0,
    status: waiting.waitingStatus ? waiting.waitingStatus : "check",
    waitingTeamsAhead: waiting.waitingTeamsAhead,
    targetTime: targetTime(),
  });

  return (
    <S.WaitingCardWrapper
      {...(config.isValidate && { onClick: handleWaitingCard })}
    >
      <S.WaitingCardTitleWrapper>
        <S.WaitingCardTitleLabel>{config.titleContent}</S.WaitingCardTitleLabel>
        {config.isValidate ? (
          <CommonButton onClick={handleCancelButton}>
            <Chip variant="outline">취소하기</Chip>
          </CommonButton>
        ) : null}
      </S.WaitingCardTitleWrapper>

      <S.WaitingCardContentWrapper
        style={{ opacity: `${config.boothInfoOpacity}` }}
      >
        <S.BoothInformationWrapper>
          <S.BoothInformationImage
            src={waiting.booth?.thumbnail || "/images/image_waitingNoCard.png"}
          />
          <S.BoothInformaitonLabelWrapper>
            <S.BoothInformationNameLabel>
              <span>{waiting.partySize || 0}명</span>
              <span>·</span>
              <span>{waiting.booth?.name || "부스명 없음"}</span>
            </S.BoothInformationNameLabel>

            <IconLabel
              icon="location_pin"
              iconProps={{ color: "grayLight", size: 16 }}
              gap="0.12rem"
            >
              <S.BoothInformationPositionLabel>
                {waiting.booth?.location || "위치 없음"}
              </S.BoothInformationPositionLabel>
            </IconLabel>
          </S.BoothInformaitonLabelWrapper>
        </S.BoothInformationWrapper>

        {config.button && <Button size={"large"} {...config.button} />}
      </S.WaitingCardContentWrapper>
    </S.WaitingCardWrapper>
  );
};

export default WaitingCard;
