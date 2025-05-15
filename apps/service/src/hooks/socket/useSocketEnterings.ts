import { useCallback } from "react";
import useEnteringBottomSheet from "../useEntering";
import useWebSocket from "./useSocket";
import { mapToWaiting } from "@utils/mapToWaiting";

const useSocketEnterings = () => {
  const { openEnteringWithFullData } = useEnteringBottomSheet();

  const handleSocketMessage = useCallback(
    (data: any) => {
      const enteringWaitings = data?.data?.entering_waitings;

      if (Array.isArray(enteringWaitings) && enteringWaitings.length > 0) {
        const validEnterings = enteringWaitings
          .filter((waiting) => waiting.waiting_status === "entering")
          .map(mapToWaiting);

        if (validEnterings.length > 0) {
          openEnteringWithFullData(validEnterings);
        }
      }
    },
    [openEnteringWithFullData]
  );

  useWebSocket(handleSocketMessage);
};

export default useSocketEnterings;
