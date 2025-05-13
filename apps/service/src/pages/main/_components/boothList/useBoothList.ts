import BoothThumbnailBadge from "@components/booth/BoothThumbnailBadge";
import { QUERY_KEY } from "@hooks/apis/query";
import useAuth from "@hooks/useAuth";

import { BoothWaiting } from "@interfaces/waiting";
import { useQueryClient } from "@tanstack/react-query";

interface Booth extends React.ComponentProps<typeof BoothThumbnailBadge> {}

export const useBoothList = () => {
  const { isLogin } = useAuth();
  const queryClient = useQueryClient();

  const booths =
    (queryClient.getQueryData(QUERY_KEY.BOOTHS()) as Booth[]) ?? [];
  const waitings =
    (queryClient.getQueryData(QUERY_KEY.BOOTHS_WAITING()) as BoothWaiting[]) ??
    [];

  const combinedBooths =
    booths.length === waitings.length
      ? booths.map((booth, index) => {
          const matchedWaiting = waitings[index];

          return {
            ...booth,
            waitingStatus: matchedWaiting?.waitingStatus ?? "not_waiting",
          };
        })
      : booths;

  const currentBooths = isLogin ? combinedBooths : booths;

  return { currentBooths };
};
