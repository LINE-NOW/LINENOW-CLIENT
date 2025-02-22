import useBottomsheet from "./useBottomsheet";
import { ReactNode } from "react";

// boothID의 타입을 string으로 명시
const useEntranceBottomsheet = () => {
  const { openBottomsheet, closeBottomsheet } = useBottomsheet();

  // Entrance 바텀시트를 여는 함수
  const openEntrance = (children?: ReactNode) => {
    openBottomsheet({ children: children });
  };

  const closeEntrace = () => {
    closeBottomsheet();
    // /api/v1/waitings/{waitingid}/cancel로 취소 요청 처리
  };

  return { openEntrance, closeEntrace };
};

export default useEntranceBottomsheet;
