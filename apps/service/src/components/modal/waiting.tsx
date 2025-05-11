import { ModalProps } from "@linenow/core/components";

type Action = () => void;

// 대기 취소 (1개)
export const modalCancelWaiting = (cancelWaiting: Action): ModalProps => {
  return {
    title: "정말 대기를 취소하시겠어요?",
    sub: "대기를 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    primaryButton: {
      children: "줄 서기 취소하기",
      onClick: cancelWaiting,
    },
    secondButton: {
      children: "이전으로",
    },
  };
};

// 입장 확정
export const modalConfirmEntrance = (
  waitingID: number,
  boothName: string
): ModalProps => {
  const confirmEntrance = () => {
    console.log(`${waitingID} 입장 확정`);
  };

  return {
    title: "입장을 확정하시겠어요?",
    sub: "이 부스의 입장을 확정할까요?\n다른 대기는 전부 취소돼요.",
    content: <li>{boothName}</li>,
    primaryButton: {
      variant: "lime",
      children: "확정하기",
      onClick: confirmEntrance,
    },
    secondButton: {
      children: "이전으로",
    },
  };
};

// 입장 전체 취소
export const modalConfirmEntrance = (
  waitingID: number,
  boothName: string
): ModalProps => {
  const confirmEntrance = () => {
    console.log(`${waitingID} 입장 확정`);
  };

  return {
    title: "입장을 확정하시겠어요?",
    sub: "이 부스의 입장을 확정할까요?\n다른 대기는 전부 취소돼요.",
    content: <li>{boothName}</li>,
    primaryButton: {
      variant: "lime",
      children: "확정하기",
      onClick: confirmEntrance,
    },
    secondButton: {
      children: "이전으로",
    },
  };
};
