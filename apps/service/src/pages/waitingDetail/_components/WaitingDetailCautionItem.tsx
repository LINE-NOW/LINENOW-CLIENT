import * as S from "./WaitingDetailCaution.styled";

interface WaitingDetailCautionItemProps {
  content: React.ReactNode;
  imgSrc: string;
}

const WaitingDetailCautionItem = ({
  content,
  imgSrc,
}: WaitingDetailCautionItemProps) => {
  return (
    <S.WaitingDetailCautionItemWrapper>
      <S.WaitingDetailCautionItemImg src={imgSrc} />
      <S.WaitingDetailCautionItemContent>
        {content}
      </S.WaitingDetailCautionItemContent>
    </S.WaitingDetailCautionItemWrapper>
  );
};

export default WaitingDetailCautionItem;
