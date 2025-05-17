import { useCountdown, useToast } from "@linenow/core/hooks";

const AuthButtonCountLabel = (props: {
  setReset: () => void;
  expireAt: string;
}) => {
  const { presentToast } = useToast();

  const timeoverAction = () => {
    presentToast("인증번호 시간이 만료되었어요.");
    setReset();
  };

  const { setReset, expireAt } = props;
  const { getString } = useCountdown({
    targetDate: expireAt,
    timeoverAction: timeoverAction,
  });

  const expireDate = new Date(expireAt);
  if (expireDate <= new Date()) {
    timeoverAction();
  }

  if (isNaN(expireDate.getTime())) return;
  return <>만료까지 {getString("MMSS")}</>;
};
export default AuthButtonCountLabel;
