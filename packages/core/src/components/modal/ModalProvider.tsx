// components
import * as S from "./Modal.styled";
import Modal from "./Modal";

// hooks
import useModal from "../../hooks/useModal";

const ModalProvider = () => {
  const { modal } = useModal();
  const { isOpen, props } = modal;
  if (isOpen && props != undefined) {
    return (
      <S.ModalBackground>
        <Modal {...props} />
      </S.ModalBackground>
    );
  }
  return;
};

export default ModalProvider;
