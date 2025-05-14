import { useGetBooths, useGetBoothsWaiting } from "@hooks/apis/booth";
import { QUERY_KEY } from "@hooks/apis/query";
import { useGetWaitings } from "@hooks/apis/waiting";
import { QueryKey } from "@tanstack/react-query";

export const useGetMainDataGuest = () => {
  useGetBooths();

  const queries: QueryKey[] = [QUERY_KEY.BOOTHS()];

  return { queries };
};

export const useGetMainDataUser = () => {
  useGetBooths();
  useGetWaitings("waiting");
  useGetBoothsWaiting();

  const queries: QueryKey[] = [
    QUERY_KEY.BOOTHS(),
    QUERY_KEY.WAITINGS("waiting"),
    QUERY_KEY.BOOTHS_WAITING(),
  ];

  return { queries };
};
