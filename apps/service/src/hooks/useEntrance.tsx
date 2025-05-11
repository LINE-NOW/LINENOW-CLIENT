// hooks
import { useMemo } from "react";
import { useBottomSheet } from "@linenow/core/hooks";
import { useGetWaitings } from "./apis/waiting";

// components
import { Button, Flex } from "@linenow/core/components";
import NoticeCard from "@components/bottomSheet/entrance/NoticeCard/NoticeCard";
import WaitingDetailCard from "@components/bottomSheet/entrance/WaitingDetailCard/WaitingDetailCard";
import BoothList from "@components/bottomSheet/entrance/boothList/BoothList";
import BoothCard from "@components/bottomSheet/entrance/boothList/BoothCard";
import EnteranceButton from "@components/button/EnteranceButton";
import EnteranceBottomSheetContent from "@components/bottomSheet/entrance/EnteraceBottomSheetContent";

const useEntranceBottomSheet = () => {
  const { data = [] } = useGetWaitings("waiting");
  // const [waitings, setWaitings] = useState<typeof data>([]);
  // const [enterings, setEnterings] = useState<typeof data>([]);

  const waitings = useMemo(
    () => data.filter((w) => w.waitingStatus === "waiting"),
    [data]
  );
  const enterings = useMemo(
    () => data.filter((w) => w.waitingStatus === "entering"),
    [data]
  );

  const isSingleEntering = enterings.length === 1;
  const hasWaiting = waitings.length > 0;

  const title = isSingleEntering
    ? "지금 입장해주세요!"
    : "어떤 부스에 입장하시겠어요?";

  const description = isSingleEntering
    ? `제한 시간 10분 내로 부스에 입장해주세요.\n입장하지 않으실 경우 반드시 입장 취소 버튼을 눌러주세요.\n입장 취소 없이 노쇼할 경우, 전체 부스 대기가 취소돼요.`
    : `현재 ${enterings.length}개의 부스에 입장 차례가 왔어요.\n이용하실 부스를 선택해주세요.\n선택하신 부스 외, 다른 부스의 대기는 자동으로 취소돼요.`;

  const content = isSingleEntering ? (
    <Flex direction="column" gap="0.75rem" padding="0 0 0.25rem 0">
      {/* 다른 대기가 있는 경우 */}
      {hasWaiting && <NoticeCard />}
      {/* 대기 상세 */}
      {<WaitingDetailCard waitingID={enterings[0].waitingID} />}
    </Flex>
  ) : (
    <BoothList>
      {enterings.map((waiting, index) => (
        <BoothCard
          waitingID={waiting.waitingID}
          waitingStatus={"entering"}
          confirmedAt={waiting.confirmedAt}
          key={`entering-${index}`}
          {...waiting.booth}
        />
      ))}
      {waitings.map((waiting, index) => (
        <BoothCard
          waitingStatus={"waiting"}
          waitingTeamsAhead={waiting.waitingTeamsAhead}
          key={`waiting-${index}`}
          {...waiting.booth}
        />
      ))}
    </BoothList>
  );

  const buttons = isSingleEntering ? (
    <>
      <EnteranceButton confirmedAt={enterings[0].confirmedAt} />
      <Button variant="outline">입장 취소하기</Button>
    </>
  ) : (
    <>
      <Button variant="outline">입장 차례인 부스 모두 취소할게요.</Button>
    </>
  );

  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  const openEntrance = () =>
    openBottomSheet({
      children: (
        <EnteranceBottomSheetContent
          title={title}
          description={description}
          content={content}
          buttons={buttons}
        />
      ),
    });
  const closeEntrace = () => closeBottomSheet();

  return { openEntrance, closeEntrace };
};

export default useEntranceBottomSheet;
