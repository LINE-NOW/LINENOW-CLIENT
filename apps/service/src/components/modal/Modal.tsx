// component
import * as S from "./Modal.styled";

import Button, { ButtonProps } from "@components/button/Button";
import ButtonLayout from "@components/button/ButtonLayout";

// hook
import useModal from "@hooks/useModal";

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  sub?: string;
  secondButton?: Omit<ButtonProps, "size" | "shape">;
  primaryButton?: Omit<ButtonProps, "size" | "shape">;
}

const Modal = () => {
  const { closeModal, modal } = useModal();

  return modal.isOpen ? (
    <S.ModalBackground>
      <S.ModalContainer>
        {/* 텍스트 부분 */}
        <S.ModalTextWrapper>
          <S.ModalTextTitle>{modal.title}</S.ModalTextTitle>
          <S.ModalTextSub>{modal.sub}</S.ModalTextSub>
        </S.ModalTextWrapper>

        {/* 버튼 부분 */}
        <ButtonLayout $col={2}>
          <Button
            onClick={closeModal}
            size="large"
            scheme="grayLight"
            shape="outline"
            {...modal.secondButton}
          >
            {modal.secondButton?.children || "이전으로"}
          </Button>

          <Button
            onClick={closeModal}
            size="large"
            scheme="blue"
            shape="fill"
            {...modal.primaryButton}
          >
            {modal.primaryButton?.children || "확인"}
          </Button>
        </ButtonLayout>
      </S.ModalContainer>
    </S.ModalBackground>
  ) : null;
};

export default Modal;
