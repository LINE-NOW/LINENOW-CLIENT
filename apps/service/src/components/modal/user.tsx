import { usePostLogout, usePostWithdraw } from "@hooks/apis/user";
import { ModalProps } from "@linenow/core/components";

export const useModalLogouut = (): ModalProps => {
  const { mutate } = usePostLogout();
  const onClick = () => mutate();

  return {
    title: "로그아웃 하시겠어요?",
    sub: `로그아웃 시 계정 연결이 해제돼요.\n다시 라인나우를 이용하시려면 로그인 해주세요.`,
    primaryButton: {
      children: `로그아웃하기`,
      onClick,
    },
    secondButton: {
      children: `이전으로`,
    },
  };
};

export const useModalWithdraw = (): ModalProps => {
  const { mutate } = usePostWithdraw();
  const onClick = () => mutate();

  return {
    title: "탈퇴 하시겠어요?",
    sub: `계정 및 모든 대기 정보가 사라져요.\n삭제된 정보는 복구할 수 없어요.`,
    primaryButton: {
      children: `회원탈퇴하기`,
      onClick,
    },
    secondButton: {
      children: `이전으로`,
    },
  };
};
