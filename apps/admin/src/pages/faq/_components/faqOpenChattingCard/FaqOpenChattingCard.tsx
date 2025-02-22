import * as S from "./FaqOpenChattingCard.styled";

export const FaqOpenChattingCard = () => {
  return (
    <S.FaqOpenChattingCardWrapper>
      <S.FaqOpenChattingCardOnlineWrapper>
        <img src="/icons/counselor.svg" alt="상담아이콘" />
        <S.FaqOpenChattingCardOnlineText>
          1:1 온라인 문의
        </S.FaqOpenChattingCardOnlineText>
      </S.FaqOpenChattingCardOnlineWrapper>
      <S.FaqOpenChattingKakaoBtn
        onClick={() => {
          window.location.href = "https://open.kakao.com/o/gV5NsYSg";
        }}
      >
        <S.FaqOpenChattingKakaoWrapper>
          <img src="/icons/kakao_kakao.svg" alt="상담아이콘" />
          카카오톡 오픈채팅방 링크
        </S.FaqOpenChattingKakaoWrapper>
      </S.FaqOpenChattingKakaoBtn>
    </S.FaqOpenChattingCardWrapper>
  );
};
