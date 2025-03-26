//components
import { Flex, Separator } from "@linenow/core/components";
import SectionTitle from "@components/title/SectionTitle";
import MyWaitingList from "./_components/MyWaitingList";

const MyWaitingPage = () => {
  const sectionStyle: React.ComponentProps<typeof Flex> = {
    as: "section",
    direction: "column",
    gap: "0.5rem",
    padding: "1.25rem 1rem 1.75rem 1rem",
  };

  return (
    <>
      {/* 대기중 목록 */}
      <Flex {...sectionStyle}>
        <SectionTitle
          title={`대기 중인 부스`}
          desciption={`최대 3개 부스까지 동시에 대기 가능해요.\n새 부스를 예약하실 경우 기존 대기 중 하나를 취소해주세요.`}
        />

        <MyWaitingList />
      </Flex>

      <Separator height={8} />

      {/* 대기취소, 입장완료 목록 */}
      <Flex {...sectionStyle}>
        <MyWaitingList />
      </Flex>
    </>
  );
};

export default MyWaitingPage;
