import * as S from "./BoothDetailNotice.styled";
import { Title } from "../common/style";
import { Booth } from "@interfaces/booth";

interface BoothDetailContentProps {
  booth: Booth;
}

export const BoothDetailNotice = ({ booth }: BoothDetailContentProps) => {
  return (
    <S.BoothDetailNoticeWrapper>
      <Title>부스 유의사항</Title>
      <S.BoothDetailNoticeArticle>{booth.notice}</S.BoothDetailNoticeArticle>
    </S.BoothDetailNoticeWrapper>
  );
};
