import * as S from "./WaitingCard.styled";

// hooks
import Button from "@components/button/Button";
import WaitingCardMypage from "./WaitingCardLayout";
import useBottomsheet from "@hooks/useBottomsheet";
import LoginBottomsheetContent from "@components/login/LoginBottomsheetContent";

const WaitingCardLogin = () => {
  const { openBottomsheet } = useBottomsheet();

  const handleOpenBottomSheetButton = () => {
    openBottomsheet({ children: <LoginBottomsheetContent /> });
  };

  return (
    <WaitingCardMypage waitingTitle="라인나우로 간편하게 대기하세요">
      <S.BoothInformationWrapper>
        <S.BoothInformationImage src="images/image_icon.png" />
        <S.BoothInformaitonLabelWrapper>
          <S.BoothInformationNameLabel>line now</S.BoothInformationNameLabel>
          <S.BoothInformationPositionLabel>
            라인나우와 함께 대기 줄 서기를 등록하세요!
          </S.BoothInformationPositionLabel>
        </S.BoothInformaitonLabelWrapper>
      </S.BoothInformationWrapper>

      <Button scheme="lime" onClick={handleOpenBottomSheetButton}>
        로그인하고 이용하기
      </Button>
    </WaitingCardMypage>
  );
};

export default WaitingCardLogin;
