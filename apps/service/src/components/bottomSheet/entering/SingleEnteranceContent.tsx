// SingleEnteranceContent.tsx
import { Button, Flex } from "@linenow/core/components";
import NoticeCard from "@components/bottomSheet/entering/NoticeCard/NoticeCard";
import WaitingDetailCard from "@components/bottomSheet/entering/WaitingDetailCard/WaitingDetailCard";
import EnteranceButton from "@components/button/EnteranceButton";
import EnteranceBottomSheetContent from "@components/bottomSheet/entering/EnteraceBottomSheetContent";
import { useModal } from "@linenow/core/hooks";
import { useModalCancelEntering } from "@components/modal/waiting";
import { Waiting } from "@interfaces/waiting";

interface Props extends Pick<Waiting, "confirmedAt" | "waitingID"> {
  isWaiting: boolean;
}

const SingleEnteranceContent = ({
  confirmedAt,
  waitingID,
  isWaiting,
}: Props) => {
  const { openModal } = useModal();
  const cancelEnteranceModal = useModalCancelEntering();

  return (
    <EnteranceBottomSheetContent
      title="지금 입장해주세요!"
      description={`제한 시간 10분 내로 부스에 입장해주세요.\n입장하지 않으실 경우 반드시 입장 취소 버튼을 눌러주세요.\n입장 취소 없이 노쇼할 경우, 전체 부스 대기가 취소돼요.`}
      content={
        <Flex direction="column" gap="0.75rem" padding="0 0 0.25rem 0">
          {isWaiting && <NoticeCard />}
          <WaitingDetailCard waitingID={waitingID} />
        </Flex>
      }
      buttons={
        <>
          <EnteranceButton confirmedAt={confirmedAt} canClick={true} />
          <Button
            variant="outline"
            onClick={() => openModal(cancelEnteranceModal)}
          >
            입장 취소하기
          </Button>
        </>
      }
    />
  );
};

export default SingleEnteranceContent;
