import { useCallback } from "react";
import useEnteringBottomSheet from "../useEntering";
import useWebSocket from "./useSocket";
import { mapToWaiting } from "@utils/mapToWaiting";

const useSocketEnterings = () => {
  const { openEnteringWithFullData, openCancelBottomSheet } =
    useEnteringBottomSheet();

  const handleSocketMessage = useCallback(
    (data: any) => {
      const enteringWaitings = data?.data?.entering_waitings;

      const canceled =
        data?.data?.waiting_status === "canceled" ? data.data : null;

      //입장 알림
      if (Array.isArray(enteringWaitings) && enteringWaitings.length > 0) {
        const validEnterings = enteringWaitings
          .filter((waiting) => waiting.waiting_status === "entering")
          .map(mapToWaiting);

        if (validEnterings.length > 0) {
          openEnteringWithFullData(validEnterings);
        }
      }

      if (canceled) {
        const mapped = mapToWaiting(canceled);
        // console.log("❌ 대기 취소 소켓 메시지:", mapped);
        openCancelBottomSheet(mapped);
      }
    },

    [openEnteringWithFullData, openCancelBottomSheet]
  );

  useWebSocket(handleSocketMessage);
};

export default useSocketEnterings;
