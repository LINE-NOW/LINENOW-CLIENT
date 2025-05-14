// component
import { useModal } from "../../hooks";
import Button from "../button/Button";
import ButtonLayout from "../buttonLayout/ButtonLayout";
import * as S from "./Modal.styled";

export interface ModalProps {
  title?: string;
  sub?: React.ReactNode;
  content?: React.ReactNode;
  secondButton?: Omit<React.ComponentProps<typeof Button>, "size" | "variant">;
  primaryButton?: Omit<React.ComponentProps<typeof Button>, "size">;
}

const Modal = (props: ModalProps) => {
  const { closeModal } = useModal();
  const {
    secondButton = { onClick: closeModal, children: "이전으로" },
    primaryButton = { onClick: closeModal, children: "확인" },
    ...modal
  } = props;

  return (
    <S.ModalContainer>
      {/* 텍스트 부분 */}
      <S.ModalTextWrapper>
        <S.ModalTextTitle>{modal.title}</S.ModalTextTitle>
        <S.ModalTextSub>{modal.sub}</S.ModalTextSub>
      </S.ModalTextWrapper>
      {modal.content && (
        <S.ModalContentContainer>{modal.content}</S.ModalContentContainer>
      )}
      {/* 버튼 부분 */}
      <ButtonLayout colCount={2}>
        <Button
          onClick={() => {
            closeModal();
            secondButton.onClick;
          }}
          size="large"
          variant="outline"
          {...secondButton}
        >
          {secondButton.children}
        </Button>

        <Button
          onClick={primaryButton.onClick}
          size="large"
          variant="blue"
          {...primaryButton}
        >
          {primaryButton.children}
        </Button>
      </ButtonLayout>
    </S.ModalContainer>
  );
};

export default Modal;
