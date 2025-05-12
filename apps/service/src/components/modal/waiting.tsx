import {
  useGetCancelAllEntering,
  useGetCancelAllWaiting,
  usePostCancelAllEntering,
  usePostCancelAllWaiting,
  usePostCancelWaiting,
  usePostSelectEntering,
} from "@hooks/apis/waiting";
import { ModalProps } from "@linenow/core/components";

// 대기 취소 (1개)
export const useModalCancelWaiting = (waitingID: number): ModalProps => {
  const { mutate } = usePostCancelWaiting();
  const onClick = () => mutate(waitingID);

  return {
    title: "정말 대기를 취소하시겠어요?",
    sub: "대기를 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    primaryButton: {
      variant: "grayLight",
      children: "줄 서기 취소하기",
      onClick: onClick,
    },
    secondButton: {
      children: "이전으로",
    },
  };
};

// 대기 전체 취소
export const useModalCancelAllWaiting = (): ModalProps => {
  const { mutate } = usePostCancelAllWaiting();
  const onClick = () => mutate();

  const { data: waitings = [] } = useGetCancelAllWaiting();

  return {
    title: "대기를 취소하시겠어요?",
    sub: "이 부스의 대기를 취소할까요?\n대기 정보가 삭제돼요.",
    content: waitings.map((name, index) => <li key={index}>{name}</li>),
    primaryButton: {
      variant: "grayLight",
      children: `${waitings.length}개 대기 취소하기`,
      onClick: onClick,
    },
    secondButton: {
      children: "이전으로",
    },
  };
};

// 입장 확정
export const useModalConfirmEntering = (
  waitingID: number,
  boothName: string
): ModalProps => {
  const { mutate } = usePostSelectEntering();
  const onClick = () => mutate(waitingID);

  return {
    title: "입장을 확정하시겠어요?",
    sub: "이 부스의 입장을 확정할까요?\n다른 대기는 전부 취소돼요.",
    content: <li>{boothName}</li>,
    primaryButton: {
      variant: "lime",
      children: "확정하기",
      onClick: onClick,
    },
    secondButton: {
      children: "이전으로",
    },
  };
};

// 입장 취소 1개
export const useModalCancelEntering = (): ModalProps => {
  const { mutate } = usePostCancelAllEntering();
  const onClick = () => mutate();

  return {
    title: "입장을 취소하시겠어요?",
    sub: "입장 대기 시간이 삭제돼요.\n정말 입장을 취소할까요?",
    primaryButton: {
      variant: "grayLight",
      children: `입장 취소하기`,
      onClick: onClick,
    },
    secondButton: {
      children: "이전으로",
    },
  };
};

// 입장 전체 취소
export const useModalCancelAllEntering = (): ModalProps => {
  const { mutate } = usePostCancelAllEntering();
  const onClick = () => mutate();

  const { data: waitings = [] } = useGetCancelAllEntering();

  return {
    title: "입장을 취소하시겠어요?",
    sub: "입장이 가능한 부스들이에요.\n정말 입장을 취소할까요?",
    content: waitings.map((name, index) => <li key={index}>{name}</li>),
    primaryButton: {
      variant: "grayLight",
      children: `${waitings.length}개 입장 취소하기`,
      onClick: onClick,
    },
    secondButton: {
      children: "이전으로",
    },
  };
};
