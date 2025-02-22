import { ReactNode } from "react";

// components

// types
import { WaitingStatus } from "@linenow-types/status";

// hooks
import useCountdown from "@hooks/useCountdown";

import { usePostConfirm } from "@hooks/apis/entry";
import { Button, Modal, useModal } from "@linenow/design-system";

interface WaitingCardProps {
  waitingID: number;
  status: WaitingStatus;
  waitingTeamsAhead?: number;
  targetTime?: string | null;
}

type WaitingCardButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "size" | "shape"
>;

interface WaitingCardConfig {
  titleContent: ReactNode;
  isValidate: boolean;
  button?: WaitingCardButtonProps;
  boothInfoOpacity?: string;
}

export const useWaitingCard = ({
  waitingID,
  status,
  waitingTeamsAhead,
  targetTime,
}: WaitingCardProps) => {
  const { getTime } = useCountdown({
    targetDate: targetTime || "1970-01-01T00:00:00.000Z",
  });

  const { openModal } = useModal();

  const { mutate: postConfirm } = usePostConfirm({
    waitingID: waitingID,
  });

  const confirmModal: Omit<React.ComponentProps<typeof Modal>, "isOpen"> = {
    title: "다른 대기가 취소돼요",
    sub: "입장을 확정하면 다른 대기는 취소돼요.\n 입장을 확정하시겠어요?",
    primaryButton: {
      variant: "lime",
      children: "입장 확정하기",
      onClick: () => {
        postConfirm();
      },
    },
    secondButton: {
      children: "이전으로",
    },
  };

  const handleConfirmButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    openModal(confirmModal);
  };

  const waitingCardConfig: Record<WaitingStatus, WaitingCardConfig> = {
    check: {
      titleContent: (
        <>
          내 앞으로 <span className="blue">{waitingTeamsAhead}팀</span> 남았어요
        </>
      ),
      isValidate: false,
    },

    waiting: {
      titleContent: (
        <>
          내 앞으로 <span className="blue">{waitingTeamsAhead}팀</span> 남았어요
        </>
      ),
      isValidate: true,
      button: {
        disabled: true,
        children: <span>순서까지 기다려주세요</span>,
      },
    },

    ready_to_confirm: {
      titleContent: (
        <>
          <span className="blue">입장</span>하실 수 있어요!
        </>
      ),
      isValidate: true,
      button: {
        variant: "lime",
        onClick: handleConfirmButton,
        children: [
          <span key={1}>입장 확정하기</span>,
          <span key={2}>{getTime("MMSS")}</span>,
        ],
      },
    },

    confirmed: {
      titleContent: (
        <>
          <span className="blue">입장</span>하실 수 있어요!
        </>
      ),
      isValidate: true,
      button: {
        variant: "limeLight",
        children: [
          <span key={1}>시간 내에 입장 해주세요</span>,
          <span key={2}>{getTime("MMSS")}</span>,
        ],
      },
    },

    arrived: {
      titleContent: (
        <>
          입장이 <span className="blue">완료</span> 되었어요
        </>
      ),
      isValidate: false,
      boothInfoOpacity: "20%",
    },

    canceled: {
      titleContent: <>대기가 취소 됐어요</>,
      isValidate: false,
      boothInfoOpacity: "20%",
    },

    time_over_canceled: {
      titleContent: <>대기 시간이 초과 됐어요</>,
      isValidate: false,
      boothInfoOpacity: "20%",
    },
  };

  return waitingCardConfig[status];
};
