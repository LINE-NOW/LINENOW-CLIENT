import { Flex } from "@linenow/core/components";
import * as S from "./WaitingDetailComponents.styled";

interface WaitingCheckModalProps {
  checkedPeople: number;
  boothName: string;
}

const WaitingDetailHead = ({
  checkedPeople,
  boothName,
}: WaitingCheckModalProps) => {
  const sectionStyle: React.ComponentProps<typeof Flex> = {
    as: "section",
    direction: "column",
    gap: "1.25rem",
    padding: "1rem 1.25rem 1.5rem 1.25rem",
  };

  const WaitingDetailkHeadInfo = ({
    title,
    content,
  }: {
    title: string;
    content: string | number;
  }) => (
    <S.WaitignDetailHeadContent>
      <span className="title">{title}</span>
      <span className="content">{content}</span>
    </S.WaitignDetailHeadContent>
  );

  return (
    <Flex {...sectionStyle}>
      <S.WaitignDetailHeadTitle>
        대기 정보를 확인해주세요.
      </S.WaitignDetailHeadTitle>
      <S.WaitignDetailHeadInfoGroup>
        <WaitingDetailkHeadInfo title="부스 이름" content={boothName} />
        <WaitingDetailkHeadInfo
          title="이용인원"
          content={`${checkedPeople}명`}
        />
      </S.WaitignDetailHeadInfoGroup>
    </Flex>
  );
};

export default WaitingDetailHead;
