import { Flex } from "@linenow/core/components";
import * as S from "./WaitingDetailComponents.styled";
import WaitingDetailCautionItem from "./WaitingDetailCautionItem";
import SectionTitle from "@components/title/SectionTitle";
import { IMAGE } from "@constants/image";

const WaitingDetailCaution = () => {
  const contents = [
    {
      text: "본인의 차례가 왔을 때 입장하지 않으실 경우, 반드시 입장 취소 버튼을 눌러주세요.\n입장 취소 하지 않고 노쇼할 경우, 전체 부스 대기가 취소돼요.\n노쇼 3회 누적 시 금일 라인나우 이용이 제한돼요.",
      imgSrc: IMAGE.NOTICE_NO_SHOW,
    },
    {
      text: "동시에 최대 3개의 부스만 대기할 수 있어요. 새로운 부스에 대기하시려면 기존 대기 중인 부스 중 하나를 반드시 취소해 주세요.",
      imgSrc: IMAGE.NOTICE_MAX_WAITING,
    },
    {
      text: "입장 차레 시 부스 입장 가능 시간이 부여됩니다. 반드시 10분 이내로 부스에 입장해주세요.\n10분이 지나면 입장이 제한됩니다.",
      imgSrc: IMAGE.NOTICEE_DUE_TIME,
    },
  ];

  const sectionStyle: React.ComponentProps<typeof Flex> = {
    as: "section",
    direction: "column",
    gap: "0.5rem",
    padding: "1.25rem 1rem 1.75rem 1rem",
  };

  return (
    <>
      <Flex {...sectionStyle}>
        <SectionTitle
          title={`라인나우 대기 유의사항`}
          description={`입장 시간을 준수하지 않으면 대기가 자동 취소됩니다.\n아래 유의사항을 꼭 읽어주세요.`}
        />
        <S.WaitingDetailCautionItemContainer>
          {contents.map((content, index) => (
            <WaitingDetailCautionItem
              key={index}
              content={content.text}
              imgSrc={content.imgSrc}
            />
          ))}
        </S.WaitingDetailCautionItemContainer>
      </Flex>
    </>
  );
};

export default WaitingDetailCaution;
