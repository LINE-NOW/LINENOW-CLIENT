import { useAtom } from "jotai";
import { modalAtom } from "../atoms/modal";
import Modal, { ModalProps } from "../components/modal/Modal";
import ModalProvider from "../components/modal/ModalProvider";

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

  const ModalElement = () => (
    <ModalProvider>
      <Modal {...modal} />
    </ModalProvider>
  );

  return { openModal, closeModal, modal, ModalElement };
};

export default useModal;
