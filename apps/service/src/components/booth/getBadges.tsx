import ChipSkeleton from "@components/skeleton/Chip.Skeleton";
import { Booth } from "@interfaces/booth";
import { BoothWaiting } from "@interfaces/waiting";
import { Chip } from "@linenow/core/components";

type GetBadgesParams = Pick<Booth, "operatingStatus" | "totalWaitingTeams"> &
  Pick<BoothWaiting, "waitingStatus"> & { isFetching?: boolean };

const getBadges = (params: GetBadgesParams) => {
  const {
    operatingStatus,
    totalWaitingTeams,
    waitingStatus,
    isFetching = false,
  } = params;

  if (isFetching) return <ChipSkeleton />;

  if (operatingStatus === "not_started") {
    return <Chip variant="grayLight">운영 전</Chip>;
  }

  return (
    <>
      {operatingStatus === "paused" && (
        <Chip variant="grayLight">대기 중지</Chip>
      )}

      {waitingStatus === "waiting" && <Chip variant="blue">대기 중</Chip>}
      {waitingStatus === "entering" && <Chip variant="lime">입장 가능</Chip>}
      <Chip variant="blueLight">
        {totalWaitingTeams === 0 ? `대기 없음` : `대기 ${totalWaitingTeams}팀`}
      </Chip>
    </>
  );
};

export default getBadges;
