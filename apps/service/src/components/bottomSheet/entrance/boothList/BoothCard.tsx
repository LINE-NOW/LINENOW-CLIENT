import BoothThumbnailCompact from "@components/booth/BoothThumbnailCompact";
import { Waiting } from "@interfaces/waiting";

import { Chip, Flex } from "@linenow/core/components";
interface BoothCardProps
  extends React.ComponentProps<typeof BoothThumbnailCompact>,
    Pick<Waiting, "confirmedAt"> {}

const BoothCard = (props: BoothCardProps) => {
  const { confirmedAt, ...waiting } = props;
  return (
    <Flex gap="0.75rem" padding="1rem 0.5rem" width="100%" alignItem="center">
      <BoothThumbnailCompact isRightIconVisible={false} {...waiting} />
      <Chip variant="limeLight">{confirmedAt}</Chip>
    </Flex>
  );
};
export default BoothCard;
