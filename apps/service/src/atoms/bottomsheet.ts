import { atom } from "jotai";

// props
import { BottomsheetProps } from "@components/bottomsheet/Bottomsheet";

export const bottomsheetAtom = atom<BottomsheetProps>({
  isOpen: false,
});
