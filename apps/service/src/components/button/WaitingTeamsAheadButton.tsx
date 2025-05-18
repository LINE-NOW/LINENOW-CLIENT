import { Button } from "@linenow/core/components";

interface WaitingTeamsAheadButtonProps {
  waitingTeamsAhead?: number;
}
const WaitingTeamsAheadButton = (props: WaitingTeamsAheadButtonProps) => {
  const { waitingTeamsAhead = 0 } = props;
  return (
    <Button variant="blueLight">
      <span>내 앞으로 지금</span>
      <span>{waitingTeamsAhead}팀</span>
    </Button>
  );
};

export default WaitingTeamsAheadButton;
