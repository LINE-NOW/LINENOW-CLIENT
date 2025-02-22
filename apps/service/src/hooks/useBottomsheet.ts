import { useAtom } from "jotai";
import { bottomsheetAtom } from "@atoms/bottomsheet";
import { BottomsheetProps } from "@components/bottomsheet/Bottomsheet";

const useBottomsheet = () => {
  const [bottomsheet, setBottomseheet] = useAtom(bottomsheetAtom);

  const openBottomsheet = (
    bottomsheetProps: Omit<BottomsheetProps, "isOpen">
  ) => {
    setBottomseheet({ isOpen: true, ...bottomsheetProps });
  };

  const closeBottomsheet = () => {
    setBottomseheet({ isOpen: false });
  };

  return { openBottomsheet, closeBottomsheet, bottomsheet };
};

export default useBottomsheet;
