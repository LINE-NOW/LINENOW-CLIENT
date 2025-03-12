import { useAtom } from "jotai";
import { bottomSheetAtom } from "../atoms/bottomSheet";
import { BottomSheetProps } from "../components/bottomSheet/BottomSheet";

const useBottomSheet = () => {
  const [bottomSheet, setBottomseheet] = useAtom(bottomSheetAtom);

  const openBottomSheet = (content: BottomSheetProps) => {
    setBottomseheet({ isOpen: true, ...content });
  };

  const closeBottomSheet = () => {
    setBottomseheet({ isOpen: false });
  };

  return { openBottomSheet, closeBottomSheet, bottomSheet };
};

export default useBottomSheet;
