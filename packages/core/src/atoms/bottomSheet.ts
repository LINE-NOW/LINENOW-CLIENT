import { atom } from "jotai";
import { BottomSheetProps } from "../components/bottomSheet/BottomSheet";

export interface BottomSheetAtom extends BottomSheetProps {
  isOpen: boolean;
}

// props
export const bottomSheetAtom = atom<BottomSheetAtom>({ isOpen: false });
