import { useBottomSheet } from "../../hooks";
import { CommonButton } from "../buttonExtension/ButtonExtension";
import Icon from "../icon/Icon";
import * as S from "./BottomSheet.styled";

export interface BottomSheetProps extends React.PropsWithChildren {
  isCloseButton?: boolean;
}

const BottomSheet = (props: BottomSheetProps) => {
  const { children, isCloseButton = false } = props;
  const { closeBottomSheet } = useBottomSheet();
  return (
    <S.BottonSheetWrapper>
      {isCloseButton && (
        <CommonButton css={[S.getCloseButtonStyle]} onClick={closeBottomSheet}>
          <Icon icon={"x"} color="grayLight" />
        </CommonButton>
      )}
      {children}
    </S.BottonSheetWrapper>
  );
};

export default BottomSheet;
