import { atom } from "jotai";
import { ToastProps } from "../components/toast/Toast";

export interface ToastAtom extends ToastProps {
  id: number;
}

export const toastsAtom = atom<ToastAtom[]>([]);
