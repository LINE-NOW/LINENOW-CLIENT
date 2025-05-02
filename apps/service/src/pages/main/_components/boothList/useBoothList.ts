import { useGetBooths, useGetBoothsWaiting } from "@hooks/apis/booth";
import { BoothWaiting } from "@interfaces/waiting";

export const useBoothList = () => {
  const { data: booths = [] } = useGetBooths();
  const { data: waitings = [] } = useGetBoothsWaiting();

  const currentWaitings: Record<
    number,
    Pick<BoothWaiting, "waitingStatus" | "totalWaitingTeams">
  > = {};

  for (let waiting of waitings) {
    currentWaitings[waiting.boothID] = {
      waitingStatus: waiting.waitingStatus,
      totalWaitingTeams: waiting.totalWaitingTeams,
    };
  }

  return { booths, currentWaitings };
};
