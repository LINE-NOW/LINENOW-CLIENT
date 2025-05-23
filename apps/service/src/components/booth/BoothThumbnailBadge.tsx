import BoothThumbnail from "./BoothThumbnail";
import { Chip, Flex } from "@linenow/core/components";

import { Booth } from "@interfaces/booth";
import { SerializedStyles } from "@emotion/react";
import { BoothWaiting } from "@interfaces/waiting";
import ChipSkeleton from "@components/skeleton/Chip.Skeleton";

type BoothThumbnailProps = React.ComponentProps<typeof BoothThumbnail>;

export interface BoothThumbnailBadgeProps
  extends BoothThumbnailProps,
    Pick<Booth, "operatingStatus" | "totalWaitingTeams">,
    Pick<BoothWaiting, "waitingStatus"> {
  isFetching?: boolean;
  css?: SerializedStyles;
}

const BoothThumbnailBadge = (props: BoothThumbnailBadgeProps) => {
  const {
    operatingStatus,
    waitingStatus,
    totalWaitingTeams,
    css,
    isFetching = false,
    ...boothThumbnailProps
  } = props;

  const getBadgeList = () => {
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
          {totalWaitingTeams === 0
            ? `대기 없음`
            : `대기 ${totalWaitingTeams}팀`}
        </Chip>
      </>
    );
  };

  return (
    <Flex as="section" gap="0.5rem" direction="column" width="100%" css={css}>
      <BoothThumbnail {...boothThumbnailProps} />

      {/* 배지 리스트 */}
      <Flex gap="0.5rem" justifyContent="end" width="100%">
        {getBadgeList()}
      </Flex>
    </Flex>
  );
};

export default BoothThumbnailBadge;
