import * as S from "./FaqQuestionList.styled";
import { useState } from "react";
import { FAQ_LIST } from "@constants/faq";

interface FaqListProps {
  isFold: boolean;
}

export const FaqQuestionList = () => {
  const [faqList, setFaqList] = useState<FaqListProps[]>(
    Array(FAQ_LIST.length).fill({ isFold: true }) // 모든 질문이 접힌 상태로 설정
  );

  return (
    <S.FaqQuestionListWrapper>
      <S.FaqQuestionListTitle>자주 묻는 질문</S.FaqQuestionListTitle>
      {Array.isArray(FAQ_LIST) &&
        FAQ_LIST.length > 0 &&
        FAQ_LIST.map((data, index) => (
          <S.FaqListCard key={index}>
            <S.FaqQuestionListCard
              onClick={() =>
                setFaqList((prevFaqList) =>
                  prevFaqList.map((faq, i) =>
                    i === index ? { ...faq, isFold: !faq.isFold } : faq
                  )
                )
              }
            >
              <S.FaqQuestionListCardTextWrapper>
                <S.FaqQuestionTextQA>Q.</S.FaqQuestionTextQA>
                <S.FaqQuestionTextMain>{data.question}</S.FaqQuestionTextMain>
              </S.FaqQuestionListCardTextWrapper>
              {faqList[index].isFold ? (
                <img src="/icons/drop_blue.svg" alt="내리는 버튼" />
              ) : (
                <img src="/icons/up_blue.svg" alt="올리는 버튼" />
              )}
            </S.FaqQuestionListCard>

            {/* 카드 아래에 답변을 표시 */}
            {!faqList[index].isFold && (
              <S.FaqAnswerListCard>
                <S.FaqQuestionListCardTextWrapper>
                  <S.FaqQuestionTextQA>A.</S.FaqQuestionTextQA>
                  <S.FaqQuestionTextMain>{data.answer}</S.FaqQuestionTextMain>
                </S.FaqQuestionListCardTextWrapper>
              </S.FaqAnswerListCard>
            )}
          </S.FaqListCard>
        ))}
    </S.FaqQuestionListWrapper>
  );
};
