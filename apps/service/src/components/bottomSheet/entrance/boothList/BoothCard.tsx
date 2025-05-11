import BoothThumbnailCompact from "@components/booth/BoothThumbnailCompact";
import { Waiting } from "@interfaces/waiting";

import { Chip, Flex } from "@linenow/core/components";
import EnteringChip from "./EnteringChip";
import { useModal } from "@linenow/core/hooks";
import { useModalConfirmEntrance } from "@components/modal/waiting";

interface BoothCardProps
  extends React.ComponentProps<typeof BoothThumbnailCompact>,
    Partial<
      Pick<
        Waiting,
        "waitingID" | "confirmedAt" | "waitingTeamsAhead" | "waitingStatus"
      >
    > {}

const BoothCard = (props: BoothCardProps) => {
  const {
    waitingID = 0,
    confirmedAt,
    waitingTeamsAhead,
    waitingStatus,
    ...booth
  } = props;
  const { openModal } = useModal();
  const confirmEnteranceModal = useModalConfirmEntrance(waitingID, booth.name);
  const onClick = () =>
    waitingStatus === "entering" && openModal(confirmEnteranceModal);

  return (
    <Flex
      gap="0.75rem"
      padding="1rem 0.5rem"
      width="100%"
      alignItem="center"
      onClick={onClick}
    >
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
