import { Button } from "@linenow/core/components";

interface EnteranceButtonProps {
  targetTime?: string;
}
const EnteranceButton = (props: EnteranceButtonProps) => {
  const { targetTime } = props;

  const formatDateToMMSS = () => {
    const date = targetTime ? new Date(targetTime) : new Date();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  return (
    <Button variant="blueLight">
      <span>내 앞으로 지금</span>
      <span>{formatDateToMMSS()}</span>
    </Button>
  );
};

export default EnteranceButton;
