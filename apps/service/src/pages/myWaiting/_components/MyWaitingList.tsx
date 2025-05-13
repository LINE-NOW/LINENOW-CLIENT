// components
import { Flex } from "@linenow/core/components";
import WaitingCard from "@components/waitingCard/WaitingCard";
import Notice from "@components/notice/Notice";
import { useGetWaitings } from "@hooks/apis/waiting";

interface MyWaitingListProps {
  type: "waiting" | "finished";
}

const MyWaitingList = (props: MyWaitingListProps) => {
  const { type } = props;
  const { data: waitings = [] } = useGetWaitings(type);

  return (
    <Flex direction="column" gap="1.5rem">
      {/* 공지사항 */}
      {type === "waiting" && (
        <Notice
          children={`입장을 의사가 없을시 대기를 꼭 취소해주세요.\n노쇼가 확인 될 경우 라인나우 이용이 제한돼요.`}
        />
      )}

      {/* 대기 목록 */}
      {waitings.length === 0 && <div>EMPTY VIEW</div>}
      {waitings.map((waiting, index) => (
        <WaitingCard key={index} {...waiting} />
      ))}
    </Flex>
  );
};

export default MyWaitingList;
