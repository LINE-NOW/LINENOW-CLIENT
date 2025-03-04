// component
import Button from "../button/Button";
import ButtonLayout from "../buttonLayout/ButtonLayout";
import * as S from "./Modal.styled";

export interface ModalProps {
  title?: string;
  sub?: string;
  secondButton?: Omit<React.ComponentProps<typeof Button>, "size" | "variant">;
  primaryButton?: Omit<React.ComponentProps<typeof Button>, "size">;
}

const Modal = (modal: ModalProps) => {
  return (
    <S.ModalContainer>
      {/* 텍스트 부분 */}
      <S.ModalTextWrapper>
        <S.ModalTextTitle>{modal.title}</S.ModalTextTitle>
        <S.ModalTextSub>{modal.sub}</S.ModalTextSub>
      </S.ModalTextWrapper>

      {/* 버튼 부분 */}
      <ButtonLayout colCount={2}>
        <Button
          onClick={() => {
            // closeModal;
            modal.secondButton?.onClick;
          }}
          size="large"
          variant="outline"
          {...modal.secondButton}
        >
          {modal.secondButton?.children || "이전으로"}
        </Button>

        <Button
          onClick={() => {
            // closeModal;
            modal.primaryButton?.onClick;
          }}
          size="large"
          variant="blue"
          {...modal.primaryButton}
        >
          {modal.primaryButton?.children || "확인"}
        </Button>
      </ButtonLayout>
    </S.ModalContainer>
  );
};

export default Modal;
