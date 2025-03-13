import * as S from "./WaitingCard.styled";
import { ReactNode } from "react";

// interfaces
interface waitingCardMypageProps {
  waitingTitle: ReactNode;
  children?: ReactNode;
}

const WaitingCardLayout = ({
  waitingTitle,
  children,
}: waitingCardMypageProps) => {
  return (
    <S.WaitingCardWrapper>
      {/* 상단 타이틀 */}
      <S.WaitingCardTitleWrapper>
        <S.WaitingCardTitleLabel>{waitingTitle} </S.WaitingCardTitleLabel>
      </S.WaitingCardTitleWrapper>

      <S.WaitingCardContentWrapper>{children}</S.WaitingCardContentWrapper>
    </S.WaitingCardWrapper>
  );
};

export default WaitingCardLayout;
