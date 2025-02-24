// component
import { PropsWithChildren } from "react";
import * as S from "./Modal.styled";

interface ModalProviderProps extends PropsWithChildren {}
const ModalProvider = ({ children }: ModalProviderProps) => {
  return <S.ModalBackground>{children}</S.ModalBackground>;
};

export default ModalProvider;
