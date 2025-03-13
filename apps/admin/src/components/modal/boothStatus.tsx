import { ModalProps } from "@linenow/core/components";

type Action = () => void;

// 대기 재개
export const modalStartWaiting = (satrtWaiting: Action): ModalProps => {
  return {
    title: `대기 접수를 재개 하시겠습니까?`,
    sub: `대기 접수를 재개하면 새로운 고객의 대기가 가능합니다.\n대기 접수를 재개하시겠습니까?`,
    secondButton: {
      children: "취소하기",
    },
    primaryButton: {
      children: "대기 재개하기",
      onClick: satrtWaiting,
    },
  };
};

// 대기 중지
export const modalStopWaiting = (stopWaiting: Action): ModalProps => {
  return {
    title: `대기를 접수를 중지 하시겠습니까?`,
    sub: `대기 접수를 중지하면  추가적인 고객 대기를 받을 수 없게 됩니다.\n정말 대기를 중지하시겠습니까?`,
    secondButton: {
      children: "취소하기",
    },
    primaryButton: {
      children: "대기 중지하기",
      onClick: stopWaiting,
    },
  };
};

// 운영 시작
export const modalStartOperation = (startOperation: Action): ModalProps => {
  return {
    title: `부스 대기 운영을 시작하시겠습니까?`,
    sub: `운영을 시작하면 손님들의 라인나우 온라인 대기가 활성화됩니다.\n부스 대기 운영을 시작하시겠습니까?`,
    secondButton: {
      children: "취소하기",
    },
    primaryButton: {
      children: "운영 시작하기",
      variant: "lime",
      onClick: startOperation,
    },
  };
};

// 운영 종료
export const modalStopOperation = (stopOperation: Action): ModalProps => {
  return {
    title: `부스 대기 운영을 종료하시겠습니까?`,
    sub: `운영을 종료하면 모든 라인나우 온라인 대기가 삭제됩니다.\n부스 대기 운영을 종료하시겠습니까?`,
    secondButton: {
      children: "취소하기",
    },
    primaryButton: {
      children: "운영 종료하기",
      variant: "lime",
      onClick: stopOperation,
    },
  };
};
