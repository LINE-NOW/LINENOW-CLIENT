import { useState, useEffect } from "react";
import useEntranceBottomsheet from "./useEntrance";

const useTimer = (initialMinutes: number, initialSeconds: number) => {
  const { closeEntrace } = useEntranceBottomsheet(); // useEntranceBottomsheet 사용
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else if (minutes > 0 && seconds === 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      }
    }, 1000);

    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      closeEntrace(); // 타이머가 끝날 때 closeEntrace 호출
    }

    return () => clearInterval(timer); // 타이머가 동작 중일 때만 clearInterval 호출
  }, [minutes, seconds, closeEntrace]); // closeEntrace를 의존성 배열에 추가

  return { minutes, seconds };
};

export default useTimer;
