import * as S from "../BottomSheetContent.styled";

import { Button, ButtonLayout, Flex, Label } from "@linenow/core/components";
import EnteranceButton from "@components/button/EnteranceButton";
import WaitingDetaiCard from "./WaitingDetailCard/WaitingDetailCard";
import NoticeCard from "./NoticeCard/NoticeCard";

const EnteranceBottomSheetContent = () => {
  return (
    <S.BottomSheetContentWrapper>
      {/* 타이틀 */}
      <S.BottomSheetTitleWrapper>
        <Label font="head1" color="black">
          지금 입장해주세요!
        </Label>
        <Label font="body1" color="blackLight">
          제한 시간 10분 내로 부스에 입장해주세요. <br />
          입장 시간을 초과하시면 대기가 자동 취소됩니다.
        </Label>
      </S.BottomSheetTitleWrapper>

      <Flex direction="column" gap="0.75rem" padding="0 0 0.25rem 0">
        {/* 다른 대기가 있는 경우 */}
        <NoticeCard />
        {/* 대기 상세 */}
        <WaitingDetaiCard />
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
