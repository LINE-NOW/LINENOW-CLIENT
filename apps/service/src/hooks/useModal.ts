import { useAtom } from "jotai";
import { modalAtom } from "@atoms/modal";
import { ModalProps } from "@components/modal/Modal";

const useModal = () => {
  const [modal, setModal] = useAtom(modalAtom);

  const openModal = (modalProps: Omit<ModalProps, "isOpen">) => {
    setModal({ isOpen: true, ...modalProps });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
    });
  };

  return { openModal, closeModal, modal };
};

export default useModal;
