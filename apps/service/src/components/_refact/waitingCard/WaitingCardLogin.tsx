import { useBottomSheet } from "@linenow/core/hooks";
import * as S from "./WaitingCard.styled";

// hooks

import WaitingCardMypage from "./WaitingCardLayout";

import { Button } from "@linenow/core/components";

import LoginBottomSheetContent from "@components/bottomSheet/login/LoginBottomSheetContent";

const WaitingCardLogin = () => {
  const { openBottomSheet } = useBottomSheet();

  const handleOpenBottomSheetButton = () => {
    openBottomSheet({ children: <LoginBottomSheetContent /> });
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

      <Button variant="lime" onClick={handleOpenBottomSheetButton}>
        로그인하고 이용하기
      </Button>
    </WaitingCardMypage>
  );
};

export default WaitingCardLogin;
