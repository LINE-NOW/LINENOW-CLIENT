import { useBottomSheet } from "@linenow/core/hooks";
import WaitingCardNotice from "./WaitingCardNotice";
import LoginBottomSheetContent from "@components/bottomSheet/login/LoginBottomSheetContent";

const WaitingCardLogin = () => {
  const { openBottomSheet } = useBottomSheet();
  const openLoginBottomSheet = () =>
    openBottomSheet({ children: <LoginBottomSheetContent /> });

  return (
    <WaitingCardNotice
      titleLabel={"라인나우로 편하게 대기해보세요!"}
      descriptionLabel={"로그인 후 이용하실 수 있습니다."}
      button={{ variant: "lime", children: "전화번호로 로그인하기" }}
      onClick={openLoginBottomSheet}
    />
  );
};
export default WaitingCardLogin;
