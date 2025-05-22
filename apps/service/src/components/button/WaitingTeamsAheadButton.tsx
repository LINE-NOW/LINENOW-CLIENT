import { ROUTE } from "@constants/route";
import { Button } from "@linenow/core/components";
import { useNavigate } from "react-router-dom";

interface WaitingTeamsAheadButtonProps {
  waitingID?: number;
  waitingTeamsAhead?: number;
}
const WaitingTeamsAheadButton = (props: WaitingTeamsAheadButtonProps) => {
  const navigate = useNavigate();
  const { waitingID, waitingTeamsAhead = 0 } = props;
  const navigateWaitingDetail = waitingID
    ? () => {
        navigate(ROUTE.WAITING_DETAIL(waitingID));
      }
    : undefined;
  return (
    <Button variant="blueLight" onClick={navigateWaitingDetail}>
      <span>내 앞으로 지금</span>
      <span>{waitingTeamsAhead}팀</span>
    </Button>
  );
};

export default WaitingTeamsAheadButton;
