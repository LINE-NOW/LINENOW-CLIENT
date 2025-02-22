import * as S from "./WaitingDetailCaution.styled";
import WaitingDetailCautionItem from "./WaitingDetailCautionItem";
import { SUBTITLE, TITLE } from "@constants/waitingCaution";

const WaitingDetailCaution = () => {
  const contents = [
    {
      text: "대기차례가 오면 SMS 알림 문자가 발송됩니다.\n3분 이내에 반드시 ‘입장 확정’을 눌러주세요.\n미확정 시에 대기가 자동 취소됩니다.",
      imgSrc: "/images/image_waitingDetailCaution1.png",
    },
    {
      text: "입장 확정 시 부스 입장 가능 시간이 부여됩니다.\n반드시 10분 이내에 부스로 입장해주세요.\n10분이 지나면 입장이 제한됩니다.",
      imgSrc: "/images/image_waitingDetailCaution2.png",
    },
  ];

  return (
    <S.WaitingDetailCautionWrapper>
      <S.WaitingDetailCautionTitle>
        {TITLE}
        <S.WaitingDetailCautionSubTitle>
          {SUBTITLE}
        </S.WaitingDetailCautionSubTitle>
      </S.WaitingDetailCautionTitle>
      <S.WaitingDetailCautionItemContainer>
        {contents.map((content, index) => (
          <WaitingDetailCautionItem
            key={index}
            content={content.text}
            imgSrc={content.imgSrc}
          />
        ))}
      </S.WaitingDetailCautionItemContainer>
    </S.WaitingDetailCautionWrapper>
  );
};

export default WaitingDetailCaution;
