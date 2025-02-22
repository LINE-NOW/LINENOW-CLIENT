import { useEffect } from "react";
import { useGetNowWaitings } from "./apis/waiting";
import useEntranceBottomsheet from "./useEntrance";
import { Entrance } from "@components/entrance/Entrance";
import { Waiting } from "@interfaces/waiting"; // Waiting 타입을 가져와 사용
import useAuth from "./useAuth";
import { useLocation } from "react-router-dom";

const useCheckWaitingStatus = () => {
  const location = useLocation();
  const { isLogin } = useAuth();
  const { data: nowWaitings } = useGetNowWaitings(
    isLogin,
    "check_waiting_status"
  );

  const { openEntrance } = useEntranceBottomsheet();

  useEffect(() => {
    if (nowWaitings && nowWaitings.length > 0) {
      nowWaitings.forEach((waiting: Waiting) => {
        if (waiting.waitingStatus === "ready_to_confirm" && waiting.booth) {
          openEntrance(
            <Entrance
              waitingID={waiting.waitingID}
              targetTime={waiting.confirmDueTime || ""}
            />
          );
        }
      });
    }
  }, [nowWaitings, location.pathname]); // 경로와 대기 상태에 따라 재실행
};

export default useCheckWaitingStatus;
