import { useAtom } from "jotai";

import { modalAtom } from "../atoms/modal";
import { ModalProps } from "../components/modal/Modal";

const useModal = () => {
  const [modal, setModal] = useAtom(modalAtom);

  const openModal = (props: ModalProps) => {
    setModal({
      isOpen: true,
      props: props,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      props: undefined,
    });
  };

  return { openModal, closeModal, modal };
};

export default useModal;
