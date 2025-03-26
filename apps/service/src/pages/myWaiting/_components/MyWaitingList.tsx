// components
import { Flex } from "@linenow/core/components";
import WaitingCard from "@components/waitingCard/WaitingCard";
import Notice from "@components/notice/Notice";

// dummy
import { dummyFinishedWaitingsResponse, dummyWaitingsResponse } from "./dummy";

interface MyWaitingListProps {
  type: "waiting" | "finished";
}

const MyWaitingList = (props: MyWaitingListProps) => {
  const { type } = props;
  // const { data: waitings = [], isLoading, isError } = useGetWaitings(type);

  const waitings =
    type === "waiting" ? dummyWaitingsResponse : dummyFinishedWaitingsResponse;

  return (
    <Flex direction="column" gap="1.5rem">
      {/* 공지사항 */}
      {type === "waiting" && (
        <Notice
          children={`입장을 의사가 없을시 대기를 꼭 취소해주세요.\n노쇼가 확인 될 경우 라인나우 이용이 제한돼요.`}
        />
      )}

      {/* 대기 목록 */}
      {waitings.map((waiting, index) => (
        <WaitingCard key={index} {...waiting} />
      ))}
    </Flex>
  );
};

export default MyWaitingList;
