import { useQuery } from "@tanstack/react-query";

// apis
import { getBooth } from "@apis/domains/booth/getBooth";
import { getBooths } from "@apis/domains/booth/getBooths";
import { getBoothsCount } from "@apis/domains/booth/getBoothsCount";
import { getBoothsWaiting } from "@apis/domains/booth/getBoothsWaiting";
import { getBoothWaiting } from "@apis/domains/booth/getBoothWaiting";
import { getBoothsLocation } from "@apis/domains/booth/getBoothsLocation";
import { QUERY_KEY } from "./query";

export const useGetBooth = (boothID: number) => {
  return useQuery({
    queryKey: ["booth", boothID],
    queryFn: () => getBooth(boothID),
  });
};

export const useGetBooths = () => {
  return useQuery({
    queryKey: QUERY_KEY.BOOTHS(),
    queryFn: () => getBooths(),
  });
};

export const useGetBoothsCount = () => {
  return useQuery({
    queryKey: QUERY_KEY.BOOTHS_COUNT(),
    queryFn: () => getBoothsCount(),
  });
};

export const useGetBoothsWaiting = () => {
  return useQuery({
    queryKey: QUERY_KEY.BOOTHS_WAITING(),
    queryFn: () => getBoothsWaiting(),
  });
};

export const useGetBooth = (boothID: number) => {
  return useQuery({
    queryKey: QUERY_KEY.BOOTH(boothID),
    queryFn: () => getBooth(boothID),
  });
};

export const useGetBoothWaiting = (boothID: number) => {
  return useQuery({
    queryKey: QUERY_KEY.BOOTH_WAITING(boothID),
    queryFn: () => getBoothWaiting(boothID),
  });
};

export const useGetBoothsLocation = () => {
  return useQuery({
    queryKey: ["booths_location"],
    queryFn: () => getBoothsLocation(),
  });
};
