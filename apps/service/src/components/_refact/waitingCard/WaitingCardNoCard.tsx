import * as S from "./WaitingCard.styled";
import WaitingCardMypage from "./WaitingCardLayout";

const WaitingCardNoCard = () => {
  return (
    <WaitingCardMypage waitingTitle="아직 줄을 서지 않았어요!">
      <S.WaitingCardNoCardContent>
        <S.WaitingCardNoCardImg src="/images/image_waitingNoCard.png" />
        <span>라인나우와 함께 웨이팅을 해봐요!</span>
      </S.WaitingCardNoCardContent>
    </WaitingCardMypage>
  );
};

export default WaitingCardNoCard;
