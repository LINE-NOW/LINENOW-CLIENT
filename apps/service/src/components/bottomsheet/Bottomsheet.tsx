import { ReactNode, useEffect } from "react";

// component
import {
  BottomsheetBackground,
  BottomsheetContainer,
} from "./Bottomsheet.styled";

// hook
import useBottomsheet from "@hooks/useBottomsheet";
import { useLocation } from "react-router-dom";

export interface BottomsheetProps {
  isOpen: boolean;
  children?: ReactNode;
}

const Bottomsheet = () => {
  const { bottomsheet, closeBottomsheet } = useBottomsheet();

  const location = useLocation();

  useEffect(() => {
    closeBottomsheet(); // 주소가 변경될 때 바텀 시트를 닫음
  }, [location.pathname]); // location.pathname이 변경될 때마다 실행

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeBottomsheet();
    }
  };

  return bottomsheet.isOpen ? (
    <BottomsheetBackground onClick={handleBackgroundClick}>
      <BottomsheetContainer>{bottomsheet.children}</BottomsheetContainer>
    </BottomsheetBackground>
  ) : null;
};

export default Bottomsheet;
