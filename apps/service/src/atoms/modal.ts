import { atom } from "jotai";

// props
import { ModalProps } from "@components/modal/Modal";

export const modalAtom = atom<ModalProps>({
  isOpen: false,
});
