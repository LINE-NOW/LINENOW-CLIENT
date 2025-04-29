import { useQuery } from "@tanstack/react-query";

// apis
import { getWaiting } from "@apis/domains/waiting/getWaiting";
import { getWaitingBooth } from "@apis/domains/waiting/getWaitingBooth";
import { getWaitings } from "@apis/domains/waiting/getWaitings";
import { getWaitingsCount } from "@apis/domains/waiting/getWaitingsCount";

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
    queryKey: ["waiting_booth"],
    queryFn: () => getWaitingBooth(waitingID),
  });
};
