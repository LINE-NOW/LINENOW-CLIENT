import { Button } from "@linenow/core/src/components";
import { useModal } from "@linenow/core/src/hooks";

import { WaitingStatus } from "@linenow-types/status";
import useMainWaitingCardModalConfig from "./useMainWaitingCardModalConfig";
import useCountdown from "@hooks/useCountdown";

interface MainWaitingCardProps {
  waitingID: number;
  userName: string;
  waitingStatus: WaitingStatus;
  targetTime?: string;
}

interface MainWaitingCardButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "size"> {}

interface MainWaitingCardConfig {
  backgroundColor: string;
  isValidate: boolean;
  primaryButton: MainWaitingCardButtonProps;
  secondButton?: MainWaitingCardButtonProps;

  partySizeColor?: string;
  userInfoOpacity?: string;
}

export const useMainWaitingCard = ({
  waitingID,
  waitingStatus,
  targetTime,
  userName,
}: MainWaitingCardProps): MainWaitingCardConfig => {
  const { getTime } = useCountdown({
    targetDate: targetTime || "1970-01-01T00:00:00.000Z",
  });

  const { openModal } = useModal();
  const { approveWaitingModal, callWaitingModal } =
    useMainWaitingCardModalConfig(waitingID);

  const handleApproveWaitingButton = () => {
    openModal(approveWaitingModal(userName));
  };

  const handleCallWaitingButton = () => {
    openModal(callWaitingModal(userName));
  };

  const callWaitingButton: MainWaitingCardButtonProps = {
    children: "대기 호출하기",
    variant: "blue",
    onClick: handleCallWaitingButton,
  };

  const approveWaitingButton = (
    abled: boolean
  ): MainWaitingCardButtonProps => ({
    children: "입장완료",
    variant: "blueLight",
    disabled: !abled,
    onClick: handleApproveWaitingButton,
  });

  const mainWaitingCardConfig: Record<WaitingStatus, MainWaitingCardConfig> = {
    waiting: {
      backgroundColor: "blueLight",
      isValidate: true,
      primaryButton: callWaitingButton,
      secondButton: approveWaitingButton(false),
    },

    ready_to_confirm: {
      backgroundColor: "limeLight",
      isValidate: true,
      primaryButton: {
        children: "손님이 입장을 확정중이에요",
        variant: "limeLight",
      },
      secondButton: approveWaitingButton(false),
    },

    confirmed: {
      backgroundColor: "lime",
      isValidate: true,
      primaryButton: {
        children: [
          <span key={1}>손님이 오고 있어요!</span>,
          <span key={2}>{getTime("MMSS")}</span>,
        ],
        variant: "lime",
      },
      secondButton: approveWaitingButton(true),
    },

    arrived: {
      backgroundColor: "grayLight",
      isValidate: false,
      primaryButton: {
        children: "입장을 완료했어요",
        variant: "outline",
        disabled: true,
      },
      userInfoOpacity: "20%",
    },

    canceled: {
      backgroundColor: "grayLight",
      isValidate: false,
      primaryButton: {
        children: "대기가 취소되었어요",
        variant: "outline",
        disabled: true,
      },
      partySizeColor: "grayLight",
    },

    time_over_canceled: {
      backgroundColor: "grayLight",
      isValidate: false,
      primaryButton: {
        children: "대기 시간이 초과되었어요",
        variant: "outline",
        disabled: true,
      },
      partySizeColor: "grayLight",
    },
  };
  return mainWaitingCardConfig[waitingStatus];
};
