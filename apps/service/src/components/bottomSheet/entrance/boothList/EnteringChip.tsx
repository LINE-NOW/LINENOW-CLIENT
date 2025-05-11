import { Chip } from "@linenow/core/components";
import { useCountdown } from "@linenow/core/hooks";
import { getEnteringTime } from "@utils/calculate";

interface EnteringChipProps {
  confirmedAt?: string;
}
const EnteringChip = (props: EnteringChipProps) => {
  const { confirmedAt = "" } = props;

  const { getString, isCountdownOver } = useCountdown({
    targetDate: getEnteringTime(confirmedAt),
  });

  if (isCountdownOver) return <Chip variant="grayLight">시간종료</Chip>;
  return (
    <Chip variant="limeLight" width="3rem">
      {getString("MMSS")}
    </Chip>
  );
};
export default EnteringChip;
