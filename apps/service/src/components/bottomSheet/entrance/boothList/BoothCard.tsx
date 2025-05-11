import BoothThumbnailCompact from "@components/booth/BoothThumbnailCompact";
import { Waiting } from "@interfaces/waiting";

import { Chip, Flex } from "@linenow/core/components";
import EnteringChip from "./EnteringChip";

interface BoothCardProps
  extends React.ComponentProps<typeof BoothThumbnailCompact>,
    Partial<
      Pick<Waiting, "confirmedAt" | "waitingTeamsAhead" | "waitingStatus">
    > {}

const BoothCard = (props: BoothCardProps) => {
  const { confirmedAt, waitingTeamsAhead, waitingStatus, ...booth } = props;

  return (
    <Flex gap="0.75rem" padding="1rem 0.5rem" width="100%" alignItem="center">
      <BoothThumbnailCompact isRightIconVisible={false} {...booth} />
      {waitingStatus === "waiting" && (
        <Chip variant="blueLight">{`대기${waitingTeamsAhead}팀`}</Chip>
      )}
      {waitingStatus === "entering" && (
        <EnteringChip confirmedAt={confirmedAt} />
      )}
    </Flex>
  );
};
export default BoothCard;
