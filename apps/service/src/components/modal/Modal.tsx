// component
import * as S from "./Modal.styled";

// hook
import useModal from "@hooks/useModal";
import { Button, ButtonLayout } from "@linenow/design-system";

type ButtonProps = Omit<React.ComponentProps<typeof Button>, "size" | "shape">;

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
        <ButtonLayout colCount={2}>
          <Button
            onClick={closeModal}
            size="large"
            variant="outline"
            {...modal.secondButton}
          >
            {modal.secondButton?.children || "이전으로"}
          </Button>

          <Button
            onClick={closeModal}
            size="large"
            variant="blue"
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
