import BottomSheet from "./BottomSheet";
import FixedContainer from "../fixedContainer/FixedContainer";

// hooks
import useBottomSheet from "../../hooks/useBottomSheet";

const BottomSheetProvider = () => {
  const { bottomSheet } = useBottomSheet();
  const { isOpen, ...content } = bottomSheet;

  if (!isOpen) return;
  return (
    <FixedContainer justifyContent="end">
      <BottomSheet {...content} />
    </FixedContainer>
  );
};
export default BottomSheetProvider;
