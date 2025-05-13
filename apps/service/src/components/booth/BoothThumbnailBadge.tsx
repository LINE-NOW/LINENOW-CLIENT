import BoothThumbnail from "./BoothThumbnail";
import { Chip, Flex } from "@linenow/core/components";

import { Booth } from "@interfaces/booth";
import { SerializedStyles } from "@emotion/react";
import { BoothWaiting } from "@interfaces/waiting";

type BoothThumbnailProps = React.ComponentProps<typeof BoothThumbnail>;

export interface BoothThumbnailBadgeProps
  extends BoothThumbnailProps,
    Pick<Booth, "operatingStatus" | "totalWaitingTeams">,
    Pick<BoothWaiting, "waitingStatus"> {
  css?: SerializedStyles;
}

const BoothThumbnailBadge = (props: BoothThumbnailBadgeProps) => {
  const {
    operatingStatus,
    waitingStatus,
    totalWaitingTeams,
    css,
    ...boothThumbnailProps
  } = props;

  const getBadgeList = () => {
    if (operatingStatus === "not_started") {
      return <Chip variant="grayLight">운영 전</Chip>;
    }

    return (
      <>
        {operatingStatus === "paused" && (
          <Chip variant="grayLight">대기 중지</Chip>
        )}

        {(waitingStatus === "waiting" || waitingStatus === "entered") && (
          <Chip variant="lime">대기 중</Chip>
        )}
        <Chip variant="blueLight">대기 {totalWaitingTeams}팀</Chip>
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
