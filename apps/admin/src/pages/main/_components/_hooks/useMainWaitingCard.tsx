import { WaitingStatus } from "@linenow-types/status";
import { Button } from "@linenow/core/components";
import { useCountdown, useModal } from "@linenow/core/hooks";
import { getEnteringTime } from "@linenow/core/utils";
import {
  modalApproveWaiting,
  modalCallWaiting,
} from "@components/modal/waiting";
import { usePostWaitingAction } from "@hooks/apis/boothManaging";

type BackgroundColor = "grayLight" | "blueLight" | "lime" | "limeLight";

interface MainWaitingCardProps {
  waitingID: number;
  userName: string;
  waitingStatus: WaitingStatus;
  confirmedAt: string;
}

interface MainWaitingCardButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "size"> {}

interface MainWaitingCardConfig {
  backgroundColor: BackgroundColor;
  isValidate: boolean;
  primaryButton: MainWaitingCardButtonProps;
  secondButton?: MainWaitingCardButtonProps;
  partySizeColor?: string;
  userInfoOpacity?: string;
}

export const useMainWaitingCard = ({
  waitingID,
  waitingStatus,
  confirmedAt,
  userName,
}: MainWaitingCardProps): MainWaitingCardConfig => {
  const countdown = confirmedAt
    ? useCountdown({ targetDate: getEnteringTime(confirmedAt) })
    : null;

  const getString = countdown?.getString ?? (() => "");
  const isCountdownOver = countdown?.isCountdownOver ?? true;

  const { openModal } = useModal();
  const { mutate: postWaitingAction } = usePostWaitingAction();

  const handleApproveWaitingButton = () => {
    const modal = modalApproveWaiting(userName, () => {
      postWaitingAction({
        waitingID,
        action: "confirm",
      });
    });
    openModal(modal);
  };

  const handleCallWaitingButton = () => {
    const modal = modalCallWaiting(userName, () => {
      postWaitingAction({
        waitingID,
        action: "call",
      });
    });
    openModal(modal);
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
    // ready_to_confirm: {
    //   backgroundColor: "limeLight",
    //   isValidate: true,
    //   primaryButton: {
    //     children: "손님이 입장을 확정중이에요",
    //     variant: "limeLight",
    //   },
    //   secondButton: approveWaitingButton(false),
    // },
    entering: {
      backgroundColor: "lime",
      isValidate: true,
      primaryButton: {
        children: [
          <span key={1}>손님이 오고 있어요!</span>,
          <span>{isCountdownOver ? "시간종료" : getString("MMSS")}</span>,
        ],
        variant: "lime",
      },
      secondButton: approveWaitingButton(true),
    },
    entered: {
      backgroundColor: "grayLight",
      isValidate: false,
      primaryButton: {
        children: "입장을 완료했어요",
        variant: "grayLight",
        disabled: true,
      },
      userInfoOpacity: "0.2",
    },
    canceled: {
      backgroundColor: "grayLight",
      isValidate: false,
      primaryButton: {
        children: "대기가 취소되었어요",
        variant: "grayLight",
        disabled: true,
      },
      partySizeColor: "#979BA4",
    },
    time_over: {
      backgroundColor: "grayLight",
      isValidate: false,
      primaryButton: {
        children: "대기 시간이 초과되었어요",
        variant: "grayLight",
        disabled: true,
      },
      partySizeColor: "#979BA4",
    },
  };

  return mainWaitingCardConfig[waitingStatus];
};
