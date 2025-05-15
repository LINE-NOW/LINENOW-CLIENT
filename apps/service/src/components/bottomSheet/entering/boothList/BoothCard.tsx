import BoothThumbnailCompact from "@components/booth/BoothThumbnailCompact";
import { Waiting } from "@interfaces/waiting";

import { Chip, Flex } from "@linenow/core/components";
import EnteringChip from "./EnteringChip";
import { useModal } from "@linenow/core/hooks";
import { useModalConfirmEntering } from "@components/modal/waiting";
import { css } from "@emotion/react";

interface BoothCardProps
  extends Partial<
    Pick<
      Waiting,
      "waitingID" | "confirmedAt" | "waitingTeamsAhead" | "waitingStatus"
    >
  > {
  booth: React.ComponentProps<typeof BoothThumbnailCompact>;
}

const BoothCard = (props: BoothCardProps) => {
  const {
    waitingID = 0,
    confirmedAt,
    waitingTeamsAhead,
    waitingStatus,
    booth,
  } = props;
  const { openModal } = useModal();
  const confirmEnteringModal = useModalConfirmEntering(waitingID, booth.name);
  const onClick = () =>
    waitingStatus === "entering" && openModal(confirmEnteringModal);

  return (
    <Flex
      gap="0.75rem"
      padding="1rem 0.5rem"
      width="100%"
      alignItem="center"
      onClick={onClick}
      css={[
        css`
          opacity: ${waitingStatus === "waiting" ? 0.3 : 1};
        `,
      ]}
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
