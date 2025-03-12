import * as S from "./BottomSheet.styled";

export interface BottomSheetProps extends React.PropsWithChildren {}

const BottomSheet = (props: BottomSheetProps) => {
  const { children } = props;
  return <S.BottonSheetWrapper>{children}</S.BottonSheetWrapper>;
};

export default BottomSheet;
