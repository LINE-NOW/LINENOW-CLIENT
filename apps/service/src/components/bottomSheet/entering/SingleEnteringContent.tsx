// SingleEnteringContent.tsx
import { Button, Flex } from "@linenow/core/components";
import NoticeCard from "@components/bottomSheet/entering/NoticeCard/NoticeCard";

import { useModal } from "@linenow/core/hooks";
import { useModalCancelEntering } from "@components/modal/waiting";
import { Waiting } from "@interfaces/waiting";
import EnteringBottomSheetContent from "./EnteringBottSheetContent";
import EnteringButton from "@components/button/EnteringButton";
import WaitingDetailCard from "@components/waitingDetailCard/WaitingDetailCard";
import { useGetWaitingBooth } from "@hooks/apis/waiting";

interface Props extends Pick<Waiting, "confirmedAt" | "waitingID"> {
  isWaiting: boolean;
}

const SingleEnteringContent = (props: Props) => {
  const { confirmedAt, waitingID, isWaiting } = props;

  const { openModal } = useModal();
  const cancelEnteringModal = useModalCancelEntering();

  const { data: waiting } = useGetWaitingBooth(waitingID);

  return (
    <EnteringBottomSheetContent
      title="지금 입장해주세요!"
      description={`제한 시간 10분 내로 부스에 입장해주세요.\n입장 시간을 초과하시면 대기가 자동 취소됩니다.`}
      content={
        <Flex direction="column" gap="0.75rem" padding="0 0 0.25rem 0">
          {isWaiting && <NoticeCard />}
          {waiting && <WaitingDetailCard {...waiting} />}
        </Flex>
      }
      buttons={
        <>
          <EnteringButton confirmedAt={confirmedAt} canClick={true} />
          <Button
            variant="outline"
            onClick={() => openModal(cancelEnteringModal)}
          >
            입장 취소하기
          </Button>
        </>
      }
    />
  );
};

export default SingleEnteringContent;
