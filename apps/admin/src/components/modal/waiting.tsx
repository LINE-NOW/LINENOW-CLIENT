import { ModalProps } from "@linenow/core/components";

type Action = () => void;

// `유저`의 `대기` 취소
export const modalCancelWaiting = (
  userName: string,
  cancelWaiting: Action
): ModalProps => {
  return {
    title: `${userName}님의 대기를 취소하시겠습니까?`,
    sub: "대기 취소를 누르면 대기 상태가 취소됩니다.\n취소된 대기는 복구되지 않습니다.",
    secondButton: {
      children: "이전으로",
    },
    primaryButton: {
      children: "대기 취소하기",
      onClick: cancelWaiting,
    },
  };
};

// `유저`의 `대기` 호출
export const modalCallWaiting = (userName: string, callWaiting: Action) => {
  return {
    title: `${userName}님을 호출하시겠습니까?`,
    sub: `손님에게 호출 알림톡이 전송됩니다.`,
    secondButton: {
      children: "이전으로",
    },
    primaryButton: {
      children: "호출하기",
      onClick: callWaiting,
    },
  };
};

export const modalApproveWaiting = (
  userName: string,
  approveWaiting: Action
) => {
  return {
    title: `${userName}의 입장을 완료하시겠습니까?`,
    sub: `입장완료를 누르면 윤혜정님의 입장이 완료됩니다.`,
    secondButton: {
      children: "이전으로",
    },
    primaryButton: {
      children: "입장 완료하기",
      onClick: approveWaiting,
    },
  };
};
