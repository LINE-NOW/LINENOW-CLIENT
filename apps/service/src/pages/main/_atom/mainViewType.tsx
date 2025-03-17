import { atom } from "jotai";
import { MainViewType } from "../types";

export const mainViewTypeAtom = atom<MainViewType>("list");
