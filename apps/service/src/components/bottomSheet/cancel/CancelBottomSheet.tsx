import { Button, ButtonLayout, Label } from "@linenow/core/components";
import * as S from "../BottomSheetContent.styled";

import { useBottomSheet } from "@linenow/core/hooks";
import WaitingCard from "@components/waitingCard/WaitingCard";
import { Waiting } from "@interfaces/waiting";

interface CancelBottomSheetContentProps
  extends React.ComponentProps<typeof WaitingCard>,
    Pick<Waiting, "canceledAt"> {}

const CancelBottomSheetContent = (props: CancelBottomSheetContentProps) => {
  const { canceledAt = "", ...waiting } = props;
  const { closeBottomSheet } = useBottomSheet();

  const getCanceledString = () => {
    const trimmed = canceledAt.slice(0, 19);
    const date = new Date(trimmed);

    const formatted = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
    return formatted;
  };
  return (
    <S.BottomSheetContentWrapper>
      {/* 타이틀 */}
      <S.BottomSheetTitleWrapper>
        <Label font="head1" color="black">
          대기가 취소되었어요.
        </Label>
        <Label font="body1" color="blackLight">
          {getCanceledString()} 부스 대기가 취소되었어요.
        </Label>
      </S.BottomSheetTitleWrapper>

      <WaitingCard {...waiting} isOpacity={false} />

      {/* 버튼 */}
      <ButtonLayout colCount={1}>
        <Button onClick={closeBottomSheet} variant="outline">
          확인했어요.
        </Button>
      </ButtonLayout>
    </S.BottomSheetContentWrapper>
  );
};

export default CancelBottomSheetContent;
