import { atom } from "jotai";
import { EntranceProps } from "@components/entrance/Entrance";

export const entranceBottomSheetAtom = atom<
  Omit<EntranceProps, "isOpen"> & { location?: string }
>();
