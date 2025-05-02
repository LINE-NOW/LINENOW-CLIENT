import { useQuery } from "@tanstack/react-query";

// apis
import { getBooth } from "@apis/domains/booth/getBooth";
import { getBooths } from "@apis/domains/booth/getBooths";
import { getBoothsCount } from "@apis/domains/booth/getBoothsCount";
import { getBoothsWaiting } from "@apis/domains/booth/getBoothsWaiting";
import { getBoothWaiting } from "@apis/domains/booth/getBoothWaiting";

export const useGetBooth = (boothID: number) => {
  return useQuery({
    queryKey: ["booth", boothID],
    queryFn: () => getBooth(boothID),
  });
};

export const useGetBooths = () => {
  return useQuery({
    queryKey: ["booths"],
    queryFn: () => getBooths(),
  });
};

export const useGetBoothsCount = () => {
  return useQuery({
    queryKey: ["booths_count"],
    queryFn: () => getBoothsCount(),
  });
};

export const useGetBoothsWaiting = () => {
  return useQuery({
    queryKey: ["booths_waiting"],
    queryFn: () => getBoothsWaiting(),
  });
};

export const useGetBoothWaiting = (boothID: number) => {
  return useQuery({
    queryKey: ["booth_waiting", boothID],
    queryFn: () => getBoothWaiting(boothID),
  });
};
