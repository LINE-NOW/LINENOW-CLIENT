import { atom } from "jotai";
import { ModalProps } from "../components/modal/Modal";

export const modalAtom = atom<ModalProps>({
  isOpen: false,
});
