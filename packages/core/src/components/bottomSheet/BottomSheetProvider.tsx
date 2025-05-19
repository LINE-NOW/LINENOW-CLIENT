import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import BottomSheet from "./BottomSheet";
import FixedContainer from "../fixedContainer/FixedContainer";

// hooks
import useBottomSheet from "../../hooks/useBottomSheet";

const BottomSheetProvider = () => {
  const { bottomSheet, closeBottomSheet } = useBottomSheet();
  const { isOpen, ...content } = bottomSheet;

  const location = useLocation();
  useEffect(() => {
    closeBottomSheet();
  }, [location.pathname]);

  if (!isOpen) return;
  return (
    <FixedContainer
      justifyContent="end"
      zIndex={101}
      closeContainer={closeBottomSheet}
    >
      <BottomSheet {...content} />
    </FixedContainer>
  );
};
export default BottomSheetProvider;
