import BoothThumbnailBadge from "@components/booth/BoothThumbnailBadge";
import { QUERY_KEY } from "@hooks/apis/query";

import { BoothWaiting } from "@interfaces/waiting";
import { useQueryClient } from "@tanstack/react-query";

interface Booth extends React.ComponentProps<typeof BoothThumbnailBadge> {}

export const useBoothList = () => {
  const queryClient = useQueryClient();

  const booths =
    (queryClient.getQueryData(QUERY_KEY.BOOTHS()) as Booth[]) ?? [];
  const waitings =
    (queryClient.getQueryData(QUERY_KEY.WAITINGS()) as BoothWaiting[]) ?? [];

  const currentWaitings: Record<
    number,
    Pick<BoothWaiting, "waitingStatus">
  > = {};

  for (let waiting of waitings) {
    currentWaitings[waiting.boothID] = {
      waitingStatus: waiting.waitingStatus,
    };
  }

  console.log(booths);
  return { booths, currentWaitings };
};
