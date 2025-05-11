import { Button } from "@linenow/core/components";
import { useCountdown } from "@linenow/core/hooks";
import { getEnteringTime } from "@utils/calculate";

interface EnteranceButtonProps {
  confirmedAt?: string;
}
const EnteranceButton = (props: EnteranceButtonProps) => {
  const { confirmedAt = "" } = props;

  const { getString, isCountdownOver } = useCountdown({
    targetDate: getEnteringTime(confirmedAt),
  });

  return (
    <Button variant="lime" disabled={isCountdownOver}>
      <span>시간 내에 입장해주세요</span>
      <span>{isCountdownOver ? "시간종료" : getString("MMSS")}</span>
    </Button>
  );
};

export default EnteranceButton;
