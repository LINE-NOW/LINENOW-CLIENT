import { useMutation, useQuery } from "@tanstack/react-query";

// apis
import { getWaiting } from "@apis/domains/waiting/getWaiting";
import { getWaitingBooth } from "@apis/domains/waiting/getWaitingBooth";
import { getWaitings } from "@apis/domains/waiting/getWaitings";
import { getWaitingsCount } from "@apis/domains/waiting/getWaitingsCount";
import { getCancelAllEntering } from "@apis/domains/waiting/getCancelAllEntering";
import { getCancelAllWaiting } from "@apis/domains/waiting/getCancelAllWaiting";
import { postCancelAllEntering } from "@apis/domains/waiting/postCancelAllEntering";
import { postCancelAllWaiting } from "@apis/domains/waiting/postCancelAllWaiting";
import { postSelectEntering } from "@apis/domains/waiting/postSelectEntering";
import { useToast } from "@linenow/core/hooks";

export const useGetWaitings = (type: "waiting" | "finished") => {
  return useQuery({
    queryKey: ["waitings", type],
    queryFn: () => getWaitings(type),
  });
};

export const useGetWaitingsCount = () => {
  return useQuery({
    queryKey: ["waitings_count"],
    queryFn: () => getWaitingsCount,
  });
};

export const useGetWaiting = (waitingID: number) => {
  return useQuery({
    queryKey: ["waiting", waitingID],
    queryFn: () => getWaiting(waitingID),
  });
};

export const useGetWaitingBooth = (waitingID: number) => {
  return useQuery({
    queryKey: ["waiting_booth", waitingID],
    queryFn: () => getWaitingBooth(waitingID),
  });
};

export const useGetCancelAllEntering = () => {
  return useQuery({
    queryKey: ["all_entering"],
    queryFn: () => getCancelAllEntering(),
  });
};

export const useGetCancelAllWaiting = () => {
  return useQuery({
    queryKey: ["all_waiting"],
    queryFn: () => getCancelAllWaiting(),
  });
};

export const usePostCancelAllEntering = () => {
  const { presentToast } = useToast();
  const { data: waitings = [] } = useGetCancelAllEntering();
  return useMutation({
    mutationKey: ["cancel_all_entering"],
    mutationFn: () => postCancelAllEntering(),
    onSuccess: () => {
      presentToast(`${waitings.length}개의 입장이 취소 되었습니다!`);
      history.go(0);
    },
  });
};

export const usePostCancelAllWaiting = () => {
  const { presentToast } = useToast();
  const { data: waitings = [] } = useGetCancelAllWaiting();
  return useMutation({
    mutationKey: ["cancel_all_waiting"],
    mutationFn: () => postCancelAllWaiting(),
    onSuccess: () => {
      presentToast(`${waitings.length}개의 대기가 취소 되었습니다!`);
      history.go(0);
    },
  });
};

export const usePostSelectEntering = () => {
  const { presentToast } = useToast();
  return useMutation({
    mutationKey: ["select_entering"],
    mutationFn: (waitingID: number) => postSelectEntering(waitingID),
    onSuccess: () => {
      presentToast(`입장을 확정하여, 다른 대기는 취소되었어요.`);
      history.go(0);
    },
  });
};

export const usePostCancelWaiting = () => {
  const { presentToast } = useToast();
  return useMutation({
    mutationKey: ["cancel_waiting"],
    mutationFn: (waitingID: number) => postSelectEntering(waitingID),
    onSuccess: () => {
      presentToast(`대기가 취소되었습니다.`);
      history.go(0);
    },
  });
};
