import { Button } from "@linenow/core/components";
import { useCountdown, useToast } from "@linenow/core/hooks";
import { getEnteringTime } from "@utils/calculate";

interface EnteranceButtonProps {
  canClick?: boolean;
  confirmedAt?: string;
}
const EnteranceButton = (props: EnteranceButtonProps) => {
  const { presentToast } = useToast();
  const { confirmedAt = "", canClick = false } = props;

  const { getString, isCountdownOver } = useCountdown({
    targetDate: getEnteringTime(confirmedAt),
  });

  const onClick = canClick
    ? () => presentToast("지금 입장해주세요!")
    : undefined;

  return (
    <Button variant="lime" disabled={isCountdownOver} onClick={onClick}>
      <span>시간 내에 입장해주세요</span>
      <span>{isCountdownOver ? "시간종료" : getString("MMSS")}</span>
    </Button>
  );
};

export default EnteranceButton;
