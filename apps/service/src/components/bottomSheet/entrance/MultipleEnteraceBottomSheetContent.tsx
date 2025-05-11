import * as S from "../BottomSheetContent.styled";

import { Button, ButtonLayout, Flex, Label } from "@linenow/core/components";
import BoothList from "./boothList/BoothList";
interface MultipleEnteranceBottomSheetContentProps {
  enterings: [];
  waitings: [];
}

const MultipleEnteranceBottomSheetContent = (
  props: MultipleEnteranceBottomSheetContentProps
) => {
  const { enterings, waitings } = props;
  return (
    <S.BottomSheetContentWrapper>
      {/* 타이틀 */}
      <S.BottomSheetTitleWrapper>
        <Label
          font="head1"
          color="black"
          children={`어떤 부스에 입장하시겠어요?`}
        />
        <Label
          font="body1"
          color="blackLight"
          children={`현재 ${enterings.length}개의 부스에 입장 차례가 왔어요.
                    이용하실 부스를 선택해주세요. 
                    선택하신 부스 외, 다른 부스의 대기는 자동으로 취소돼요.`}
        />
      </S.BottomSheetTitleWrapper>

      <Flex direction="column" gap="0.75rem" padding="0 0 0.25rem 0">
        {/* 대기 상세 */}
        <BoothList waitings={waitings} enterings={enterings} />
      </Flex>

      {/* 버튼 */}
      <ButtonLayout colCount={1}>
        <Button variant="outline">입장 차례인 부스 모두 취소할게요.</Button>
      </ButtonLayout>
    </S.BottomSheetContentWrapper>
  );
};

export default MultipleEnteranceBottomSheetContent;
