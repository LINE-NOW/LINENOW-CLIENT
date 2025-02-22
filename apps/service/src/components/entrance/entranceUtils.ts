import { ModalProps } from "@components/modal/Modal";

export const handleConfirmEntry = (
  openModal: (modalProps: Omit<ModalProps, "isOpen">) => void, // openModal 전달
  closeModal: () => void,
  postConfirm: () => void
) => {
  openModal({
    title: "다른 대기가 취소돼요",
    sub: "입장을 확정하면 다른 대기는 취소돼요.\n입장을 확정하시겠어요?",
    secondButton: {
      children: "이전으로",
      onClick: () => closeModal(),
    },
    primaryButton: {
      children: "입장 확정하기",
      scheme: "lime",
      onClick: () => {
        postConfirm();
      },
    },
  });
};

// 입장 취소 핸들러
export const handleCancelEntry = (
  openModal: (modalProps: Omit<ModalProps, "isOpen">) => void,
  closeModal: () => void,
  postCancel: () => void
) => {
  openModal({
    title: "정말 입장을 취소하시겠어요?",
    sub: "입장을 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    secondButton: {
      children: "이전으로",
      onClick: () => closeModal(),
    },
    primaryButton: {
      children: "입장 취소하기",
      onClick: () => {
        postCancel();
      },
    },
  });
};
