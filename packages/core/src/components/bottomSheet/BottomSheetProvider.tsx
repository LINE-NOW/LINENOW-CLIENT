import * as S from "./BottomSheet.styled";
import BottomSheet from "./BottomSheet";
import useBottomSheet from "../../hooks/useBottomSheet";

const BottomSheetProvider = () => {
  const { bottomSheet } = useBottomSheet();
  const { isOpen, ...content } = bottomSheet;

  if (!isOpen) return;
  return (
    <S.BottomSheetBackground>
      <BottomSheet {...content} />
    </S.BottomSheetBackground>
  );
};
export default BottomSheetProvider;
