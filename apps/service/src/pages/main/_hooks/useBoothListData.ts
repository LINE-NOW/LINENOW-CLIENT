import BoothThumbnailBadge from "@components/booth/BoothThumbnailBadge";
import { QUERY_KEY } from "@hooks/apis/query";

import { Booth } from "@interfaces/booth";

import { BoothWaiting } from "@interfaces/waiting";
import { useQueryClient } from "@tanstack/react-query";

interface UseBoothListDataProps {
  option: string;
}
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

const useBoothListData = (props: UseBoothListDataProps) => {
  const { option } = props;
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

  const combinedBooths: BoothItem[] = booths.map((booth): BoothItem => {
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

  const getSortOption = (a: number = 0, b: number = 0) => {
    if (option === "DESC") return b - a;
    else if (option === "ASC") return a - b;
    return 0;
  };

  // 정렬 기준:
  // 0. 이름 가나다순
  // 1. waitingStatus === "waiting" 우선
  // 2. operatingStatus !== "operating" 맨 뒤로
  // 3. totalWaitingTeams 기준 정렬 (내림차순 or 오름차순 설정 가능)
  const currentBooths = combinedBooths.sort((a, b) => {
    // 1. waitingStatus === "waiting" 우선 정렬
    if (a.waitingStatus === "waiting" && b.waitingStatus !== "waiting")
      return -1;
    if (a.waitingStatus !== "waiting" && b.waitingStatus === "waiting")
      return 1;

    // 2. operatingStatus !== "operating" 맨 뒤로
    if (a.operatingStatus === "operating" && b.operatingStatus !== "operating")
      return -1;
    if (a.operatingStatus !== "operating" && b.operatingStatus === "operating")
      return 1;

    // 3. totalWaitingTeams 기준 오름차순 (작은 수가 먼저)
    // 내림차순으로 바꾸려면 b.totalWaitingTeams - a.totalWaitingTeams
    const waitingCompare = getSortOption(
      a.totalWaitingTeams,
      b.totalWaitingTeams
    );

    if (waitingCompare !== 0) return waitingCompare;
    return a.name.localeCompare(b.name, "ko");
  });
  return { currentBooths };
};
export default useBoothListData;
