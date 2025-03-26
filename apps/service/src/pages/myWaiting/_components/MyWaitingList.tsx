import { useGetWaitings } from "@hooks/apis/waiting";

// components
import { Flex } from "@linenow/core/components";
import WaitingCard from "@components/waitingCard/WaitingCard";

const MyWaitingList = () => {
  const { data: waitings = [], isLoading, isError } = useGetWaitings();

  return (
    <Flex direction="column" gap="1.5rem">
      <div>
        입장을 의사가 없을시 대기를 꼭 취소해주세요.
        <br /> 노쇼가 확인 될 경우 라인나우 이용이 제한돼요.
      </div>
      {waitings.map((waiting, index) => (
        <WaitingCard key={index} {...waiting} />
      ))}
    </Flex>
  );
};

export default MyWaitingList;
