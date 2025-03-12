import { useBottomSheet } from "@linenow/core/hooks";
import { ReactNode } from "react";

// boothID의 타입을 string으로 명시
const useEntranceBottomSheet = () => {
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  // Entrance 바텀시트를 여는 함수
  const openEntrance = (children?: ReactNode) => {
    openBottomSheet({ children: children });
  };

  const closeEntrace = () => {
    closeBottomSheet();
    // /api/v1/waitings/{waitingid}/cancel로 취소 요청 처리
  };

  return { openEntrance, closeEntrace };
};

export default useEntranceBottomSheet;
