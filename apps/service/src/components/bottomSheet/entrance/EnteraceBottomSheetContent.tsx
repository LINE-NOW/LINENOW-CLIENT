import * as S from "../BottomSheetContent.styled";

import { Button, ButtonLayout, Flex, Label } from "@linenow/core/components";
import EnteranceButton from "@components/button/EnteranceButton";
import WaitingDetailCard from "./WaitingDetailCard/WaitingDetailCard";
import NoticeCard from "./NoticeCard/NoticeCard";
import { useGetWaitingBooth } from "@hooks/apis/waiting";

interface EnteranceBottomSheetContentProps {
  enteringID: number;
  hasOtherWaitings: boolean;
}
const EnteranceBottomSheetContent = (
  props: EnteranceBottomSheetContentProps
) => {
  const { hasOtherWaitings, enteringID } = props;
  const { data: entering } = useGetWaitingBooth(enteringID);

  return (
    <S.BottomSheetContentWrapper>
      {/* 타이틀 */}
      <S.BottomSheetTitleWrapper>
        <Label font="head1" color="black" children={`지금 입장해주세요!`} />
        <Label
          font="body1"
          color="blackLight"
          children={`제한 시간 10분 내로 부스에 입장해주세요.
            입장하지 않으실 경우 반드시 입장 취소 버튼을 눌러주세요. 
          입장 취소 없이 노쇼할 경우, 전체 부스 대기가 취소돼요.`}
        />
      </S.BottomSheetTitleWrapper>

      <Flex direction="column" gap="0.75rem" padding="0 0 0.25rem 0">
        {/* 다른 대기가 있는 경우 */}
        {hasOtherWaitings && <NoticeCard />}
        {/* 대기 상세 */}
        {entering && (
          <WaitingDetailCard
            waitingID={entering.waitingID}
            wiaitngNum={entering.wiaitngNum}
            personCount={entering.personCount}
            booth={{ ...entering.booth }}
          />
        )}
      </Flex>

      {/* 버튼 */}
      <ButtonLayout colCount={1}>
        <EnteranceButton />
        <Button variant="outline">입장 취소하기</Button>
      </ButtonLayout>
    </S.BottomSheetContentWrapper>
  );
};

export default EnteranceBottomSheetContent;
