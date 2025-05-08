import EnteranceBottomSheetContent from "@components/bottomSheet/entrance/EnteraceBottomSheetContent";
import { useBottomSheet } from "@linenow/core/hooks";

// boothID의 타입을 string으로 명시
const useEntranceBottomSheet = () => {
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  const openEntrance = () => {
    openBottomSheet({ children: <EnteranceBottomSheetContent /> });
  };

  const closeEntrace = () => {
    closeBottomSheet();
  };

  return { openEntrance, closeEntrace };
};

export default useEntranceBottomSheet;
