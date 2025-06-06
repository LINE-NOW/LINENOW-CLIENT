// MultipleEnteringContent.tsx
import { Button } from "@linenow/core/components";
import BoothList from "@components/bottomSheet/entering/boothList/BoothList";
import BoothCard from "@components/bottomSheet/entering/boothList/BoothCard";

import { useModal } from "@linenow/core/hooks";
import { useModalCancelAllEntering } from "@components/modal/waiting";
import EnteringBottomSheetContent from "./EnteringBottSheetContent";

interface Props {
  enterings: React.ComponentProps<typeof BoothCard>[];
  waitings: React.ComponentProps<typeof BoothCard>[];
}

const MultipleEnteringContent = ({ enterings, waitings }: Props) => {
  const { openModal } = useModal();
  const cancelAllEnteringModal = useModalCancelAllEntering();

  return (
    <EnteringBottomSheetContent
      title="어떤 부스에 입장하시겠어요?"
      description={`현재 ${enterings.length}개의 부스에 입장 차례가 왔어요.\n이용하실 부스를 선택해주세요.\n선택하신 부스 외, 다른 부스의 대기는 자동으로 취소돼요.`}
      content={
        <BoothList>
          {enterings.map((waiting, index) => (
            <BoothCard
              waitingID={waiting.waitingID}
              waitingStatus="entering"
              confirmedAt={waiting.confirmedAt}
              key={`entering-${index}`}
              booth={waiting.booth}
            />
          ))}
          {waitings.map((waiting, index) => (
            <BoothCard
              waitingStatus="waiting"
              waitingTeamsAhead={waiting.waitingTeamsAhead}
              key={`waiting-${index}`}
              booth={waiting.booth}
            />
          ))}
        </BoothList>
      }
      buttons={
        <Button
          variant="outline"
          onClick={() => openModal(cancelAllEnteringModal)}
        >
          모든 입장 가능 부스 대기 취소하기
        </Button>
      }
    />
  );
};

export default MultipleEnteringContent;
