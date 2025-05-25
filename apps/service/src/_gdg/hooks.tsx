import { useQuery } from "@tanstack/react-query";
import { getGDGBooths } from "./getGDGBooths";

export const useGetGDGBooths = () => {
  return useQuery({
    queryKey: ["gdg", "booths"],
    queryFn: () => getGDGBooths(),
  });
};
