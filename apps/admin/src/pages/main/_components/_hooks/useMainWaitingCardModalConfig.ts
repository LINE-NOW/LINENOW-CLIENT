import { useModal } from "@linenow/design-system";
import { ModalProps } from "@linenow/design-system/components/modal/Modal";
import { usePostWaitingAction } from "@hooks/apis/boothManaging";

interface ModalExtensionProps extends Omit<ModalProps, "isOpen"> {}

const useMainWaitingCardModalConfig = (waitingID: number) => {
  const { closeModal } = useModal();
  const { mutate: postWaitingAction } = usePostWaitingAction();

  const cancelWaitingModal = (userName: string): ModalExtensionProps => ({
    title: `${userName}님의 대기를 취소하시겠습니까?`,
    sub: "대기 취소를 누르면 대기 상태가 취소됩니다.\n취소된 대기는 복구되지 않습니다.",
    secondButton: {
      children: "이전으로",
      onClick: () => {
        closeModal();
      },
    },
    primaryButton: {
      children: "대기 취소하기",
      onClick: () => {
        postWaitingAction({
          waitingID: waitingID,
          requestBody: { action: "cancel" },
        });
      },
    },
  });

  const callWaitingModal = (userName: string): ModalExtensionProps => ({
    title: `${userName}님을 호출하시겠습니까?`,
    sub: `손님에게 호출 알림톡이 전송됩니다.`,
    secondButton: {
      children: "이전으로",
      onClick: () => {
        closeModal();
      },
    },
    primaryButton: {
      children: "호출하기",
      onClick: () => {
        postWaitingAction({
          waitingID: waitingID,
          requestBody: { action: "call" },
        });
      },
    },
  });

  const approveWaitingModal = (userName: string): ModalExtensionProps => ({
    title: `${userName}의 입장을 완료하시겠습니까?`,
    sub: `입장완료를 누르면 윤혜정님의 입장이 완료됩니다.`,
    secondButton: {
      children: "이전으로",
      onClick: () => {
        closeModal();
      },
    },
    primaryButton: {
      children: "입장 완료하기",
      onClick: () => {
        postWaitingAction({
          waitingID: waitingID,
          requestBody: { action: "confirm" },
        });
      },
    },
  });

  return { cancelWaitingModal, callWaitingModal, approveWaitingModal };
};

export default useMainWaitingCardModalConfig;
