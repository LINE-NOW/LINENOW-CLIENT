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
    queryKey: ["all_entering"],
    queryFn: () => getCancelAllWaiting(),
  });
};

export const usePostCancelAllEntering = () => {
  return useMutation({
    mutationKey: ["cancel_all_entering"],
    mutationFn: () => postCancelAllEntering(),
  });
};

export const usePostCancelAllWaiting = () => {
  return useMutation({
    mutationKey: ["cancel_all_waiting"],
    mutationFn: () => postCancelAllWaiting(),
  });
};

export const usePostSelectEntering = () => {
  return useMutation({
    mutationKey: ["post_select_entering"],
    mutationFn: (waitingID: number) => postSelectEntering(waitingID),
  });
};
