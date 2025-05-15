import { useCallback } from "react";
import useEnteringBottomSheet from "../useEntering";
import useWebSocket from "./useSocket";
import { mapToWaiting } from "@utils/mapToWaiting";

const useSocketEnterings = () => {
  //TODO: 대기 취소 바텀시트 머지 후 주석 해제
  // const { openEnteringWithFullData, openCancelBottomSheet } =
  const { openEnteringWithFullData } = useEnteringBottomSheet();

  const handleSocketMessage = useCallback(
    (data: any) => {
      const enteringWaitings = data?.data?.entering_waitings;
      //TODO: 대기 취소 바텀시트 머지 후 주석 해제
      // const canceled =
      //   data?.data?.waiting_status === "canceled" ? data.data : null;

      //입장 알림
      if (Array.isArray(enteringWaitings) && enteringWaitings.length > 0) {
        const validEnterings = enteringWaitings
          .filter((waiting) => waiting.waiting_status === "entering")
          .map(mapToWaiting);

        if (validEnterings.length > 0) {
          openEnteringWithFullData(validEnterings);
        }
      }

      //TODO: 대기 취소 바텀시트 머지 후 주석 해제
      //   if (canceled) {
      //     const mapped = mapToWaiting(canceled);
      //     console.log("❌ 대기 취소 소켓 메시지:", mapped);
      //     openCancelBottomSheet(mapped);
      //   }
    },

    //TODO: 대기 취소 바텀시트 머지 후 주석 해제
    // [openEnteringWithFullData, openCancelBottomSheet]
    [openEnteringWithFullData]
  );

  useWebSocket(handleSocketMessage);
};

export default useSocketEnterings;
