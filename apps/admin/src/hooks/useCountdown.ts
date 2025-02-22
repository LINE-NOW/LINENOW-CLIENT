import { useEffect, useState } from "react";

type countdownFormat = "MMSS";

interface Countdown {
  leftTotal: number;

  leftMinutes: number;
  leftSeconds: number;
}

interface useCountdownProps {
  targetDate: string;
}

const useCountdown = ({ targetDate }: useCountdownProps) => {
  const [countdown, setCountdown] = useState<Countdown>(
    calculateTime(targetDate)
  );
  const [isCountdownOver, setIsCountDownOver] = useState<boolean>(false);

  useEffect(() => {
    if (calculateTime(targetDate).leftTotal > 0) {
      const intervalId = setInterval(() => {
        const newCountdown = calculateTime(targetDate);
        setCountdown(newCountdown);

        if (newCountdown.leftTotal <= 0) {
          clearInterval(intervalId);
          setIsCountDownOver(true);
          console.log(newCountdown.leftTotal);
          history.go(0);
          return;
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [targetDate]);

  const getTime = (format: countdownFormat) => {
    switch (format) {
      case "MMSS":
        return `${countdown.leftMinutes}:${countdown.leftSeconds}`;
      default:
        return `${countdown.leftMinutes}분 ${countdown.leftSeconds}초`;
    }
  };

  return { countdown, getTime, isCountdownOver };
};

export default useCountdown;

// 목표 날짜까지의 남은 시간을 계산하는 함수
function calculateTime(targetDate: string): Countdown {
  const now = new Date();
  const target = new Date(targetDate);

  const leftTotal = Math.max(target.getTime() - now.getTime(), 0);
  const leftMinutes = Math.floor(leftTotal / (1000 * 60));
  const leftSeconds = Math.floor((leftTotal % (1000 * 60)) / 1000);
  return { leftTotal, leftMinutes, leftSeconds };
}
