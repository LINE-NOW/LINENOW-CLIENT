import { getWaitings } from "@apis/domains/booth/apis";
import { BOOTH_QUERY_KEY } from "@apis/domains/booth/queries";
import { WaitingStatusParams } from "@linenow-types/status";
import { useQuery } from "@tanstack/react-query";

export const useGetWaitings = (status: WaitingStatusParams) => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.WAITINGS, status],
    queryFn: () => getWaitings(status),
  });
};
