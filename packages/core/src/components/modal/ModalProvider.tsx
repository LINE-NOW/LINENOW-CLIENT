// components
import Modal from "./Modal";
import FixedContainer from "../fixedContainer/FixedContainer";

// hooks
import useModal from "../../hooks/useModal";

const ModalProvider = () => {
  const { modal } = useModal();
  const { isOpen, props } = modal;

  if (isOpen && props != undefined) {
    return (
      <FixedContainer justifyContent="center">
        <Modal {...props} />
      </FixedContainer>
    );
  }
  return;
};

export default ModalProvider;
