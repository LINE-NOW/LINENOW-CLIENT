import { atom } from "jotai";
import { EntranceProps } from "@components/entrance/Entrance";

export const entranceBottomsheetAtom = atom<
  Omit<EntranceProps, "isOpen"> & { location?: string }
>();
