import {
  useGetBooths,
  useGetBoothsLocation,
  useGetBoothsWaiting,
} from "@hooks/apis/booth";
import { QUERY_KEY } from "@hooks/apis/query";
import { useGetWaitings } from "@hooks/apis/waiting";
import { QueryKey } from "@tanstack/react-query";

export const useGetMainDataGuest = () => {
  useGetBooths();
  useGetBoothsLocation();

  const queries: QueryKey[] = [QUERY_KEY.BOOTHS(), QUERY_KEY.BOOTHS_LOCATION()];

  return { queries };
};

export const useGetMainDataUser = () => {
  useGetBooths();
  useGetWaitings("waiting");
  useGetBoothsWaiting();
  useGetBoothsLocation();

  const queries: QueryKey[] = [
    QUERY_KEY.BOOTHS(),
    QUERY_KEY.WAITINGS("waiting"),
    QUERY_KEY.BOOTHS_WAITING(),
    QUERY_KEY.BOOTHS_LOCATION(),
  ];

  return { queries };
};
