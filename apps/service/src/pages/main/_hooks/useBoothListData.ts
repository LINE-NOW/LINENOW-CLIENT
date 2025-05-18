import BoothThumbnailBadge from "@components/booth/BoothThumbnailBadge";
import { QUERY_KEY } from "@hooks/apis/query";

import { Booth } from "@interfaces/booth";

import { BoothWaiting } from "@interfaces/waiting";
import { useQueryClient } from "@tanstack/react-query";

interface BoothLocation
  extends Pick<Booth, "boothID" | "latitude" | "longitude"> {}

interface BoothItem
  extends Pick<
      Booth,
      | "boothID"
      | "name"
      | "description"
      | "thumbnail"
      | "location"
      | "latitude"
      | "longitude"
      | "totalWaitingTeams"
      | "operatingStatus"
    >,
    Pick<BoothWaiting, "waitingStatus"> {}

const useBoothListData = () => {
  const queryClient = useQueryClient();

  const booths =
    (queryClient.getQueryData(QUERY_KEY.BOOTHS()) as React.ComponentProps<
      typeof BoothThumbnailBadge
    >[]) ?? [];

  const waitings =
    (queryClient.getQueryData(QUERY_KEY.BOOTHS_WAITING()) as BoothWaiting[]) ??
    [];

  const locations =
    (queryClient.getQueryData(
      QUERY_KEY.BOOTHS_LOCATION()
    ) as BoothLocation[]) ?? [];

  const currentBooths: BoothItem[] = booths.map((booth): BoothItem => {
    let matchedWaiting = waitings.find(
      (waiting) => waiting.boothID === booth.boothID
    );
    let matchedLocation = locations.find(
      (location) => location.boothID === booth.boothID
    );

    return {
      boothID: booth.boothID,
      name: booth.name,
      description: booth.description,
      thumbnail: booth.thumbnail,
      location: booth.location,
      operatingStatus: booth.operatingStatus,
      totalWaitingTeams: booth.totalWaitingTeams,

      latitude: matchedLocation?.latitude ? matchedLocation.latitude : "0",
      longitude: matchedLocation?.longitude ? matchedLocation.longitude : "0",

      waitingStatus: matchedWaiting?.waitingStatus
        ? matchedWaiting.waitingStatus
        : "not_waiting",
    };
  });

  return { currentBooths };
};
export default useBoothListData;
