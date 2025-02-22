import * as S from "./FaqTextCard.styled";

export const FaqTextCard = () => {
  return (
    <S.FaqTextWrapper>
      <S.FaqTitle>무엇을 도와드릴까요?</S.FaqTitle>
      <S.FaqNoticeText>
        궁금하신 내용을 자주 묻는 질문에서 찾아보세요.
        <br />
        찾는 내용이 없을 경우, 라인나우 카카오톡으로 문의 바랍니다.
      </S.FaqNoticeText>
      <S.FaqEnableText>
        상담 가능 시간
        <br />
        평일 10:00 - 22:30
      </S.FaqEnableText>
    </S.FaqTextWrapper>
  );
};
