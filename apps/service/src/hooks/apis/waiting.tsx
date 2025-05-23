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
import { QUERY_KEY } from "./query";
import { postCancelWaiting } from "@apis/domains/waiting/postCancelWaiting";
import useAuth from "@hooks/useAuth";
import useIsLoading from "@hooks/useIsLoading";

export const useGetWaitings = (type: "waiting" | "finished" = "waiting") => {
  const { isLogin } = useAuth();
  return useQuery({
    queryKey: QUERY_KEY.WAITINGS(type),
    queryFn: () => getWaitings(type),
    enabled: isLogin,
  });
};

export const useGetWaitingsCount = () => {
  const { isLogin } = useAuth();
  return useQuery({
    queryKey: QUERY_KEY.WAITINGS_COUNT(),
    queryFn: () => getWaitingsCount,
    enabled: isLogin,
  });
};

export const useGetWaiting = (waitingID: number) => {
  const { isLogin } = useAuth();
  return useQuery({
    queryKey: QUERY_KEY.WAITING(waitingID),
    queryFn: () => getWaiting(waitingID),
    enabled: isLogin,
  });
};

export const useGetWaitingBooth = (waitingID: number) => {
  const { isLogin } = useAuth();
  return useQuery({
    queryKey: QUERY_KEY.WAITING_BOOTH(waitingID),
    queryFn: () => getWaitingBooth(waitingID),
    enabled: isLogin,
  });
};

export const useGetCancelAllEntering = () => {
  const { isLogin } = useAuth();
  return useQuery({
    queryKey: QUERY_KEY.ALL_ENTERINGS(),
    queryFn: () => getCancelAllEntering(),
    enabled: isLogin,
  });
};

export const useGetCancelAllWaiting = () => {
  const { isLogin } = useAuth();
  return useQuery({
    queryKey: QUERY_KEY.ALL_WAITINGS(),
    queryFn: () => getCancelAllWaiting(),
    enabled: isLogin,
  });
};

// post
export const usePostCancelAllEntering = () => {
  const { presentToast } = useToast();
  const { data: waitings = [] } = useGetCancelAllEntering();

  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["cancel_all_entering"],
    mutationFn: () => {
      setLoadings({ isFullLoading: true });
      return postCancelAllEntering();
    },
    onSuccess: () => {
      presentToast(`${waitings.length}개의 입장이 취소 되었습니다!`);
      history.go(0);
    },
    onSettled: () => {
      setLoadings({ isFullLoading: false });
    },
  });
};

export const usePostCancelAllWaiting = () => {
  const { presentToast } = useToast();
  const { data: waitings = [] } = useGetCancelAllWaiting();

  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["cancel_all_waiting"],
    mutationFn: () => {
      setLoadings({ isFullLoading: true });
      return postCancelAllWaiting();
    },
    onSuccess: () => {
      presentToast(`${waitings.length}개의 대기가 취소 되었습니다!`);
      history.go(0);
    },
    onSettled: () => {
      setLoadings({ isFullLoading: false });
    },
  });
};

export const usePostSelectEntering = () => {
  const { presentToast } = useToast();

  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["select_entering"],
    mutationFn: (waitingID: number) => {
      setLoadings({ isFullLoading: true });
      return postSelectEntering(waitingID);
    },
    onSuccess: () => {
      presentToast(`입장을 확정하여, 다른 대기는 취소되었어요.`);
      history.go(0);
    },
    onSettled: () => {
      setLoadings({ isFullLoading: false });
    },
  });
};

export const usePostCancelWaiting = () => {
  const { presentToast } = useToast();

  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["cancel_waiting"],
    mutationFn: (waitingID: number) => {
      setLoadings({ isFullLoading: true });
      return postCancelWaiting(waitingID);
    },
    onSuccess: () => {
      presentToast(`대기가 취소되었습니다.`);
      history.go(0);
    },
    onSettled: () => {
      setLoadings({ isFullLoading: false });
    },
  });
};
