import { atom } from "jotai";
import { ModalProps } from "../components/modal/Modal";

export interface ModalAtom {
  isOpen: boolean;
  props?: ModalProps;
}

export const modalAtom = atom<ModalAtom>({
  isOpen: false,
  props: undefined,
});
