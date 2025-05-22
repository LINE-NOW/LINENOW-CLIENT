import * as S from "./BoothDetailNotice.styled";
import { Booth } from "@interfaces/booth";

interface BoothDetailContentProps {
  booth: Booth;
}

export const BoothDetailNotice = ({ booth }: BoothDetailContentProps) => {
  return (
    <S.BoothDetailNoticeWrapper>
      <S.BoothDetailNoticeArticle>{booth.notice}</S.BoothDetailNoticeArticle>
    </S.BoothDetailNoticeWrapper>
  );
};
