import * as S from "./FaqPage.styled";
import {
  FaqOpenChattingCard,
  FaqTextCard,
  FaqQuestionList,
} from "./_components";

const FaqPage = () => {
  return (
    <S.FaqWrapper>
      <S.FaqMainZone>
        <FaqTextCard />
        <FaqOpenChattingCard />
      </S.FaqMainZone>
      <S.SeparatorLine />
      <FaqQuestionList />
    </S.FaqWrapper>
  );
};

export default FaqPage;
