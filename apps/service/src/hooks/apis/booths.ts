import { getBooths } from "@apis/domains/booth/apis";
import { BOOTH_QUERY_KEY } from "@apis/domains/booth/queries";
import { useQuery } from "@tanstack/react-query";

export const useGetBooths = () => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.BOOTHS],
    queryFn: () => getBooths(),
  });
};
