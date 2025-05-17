import { Button, ButtonLayout, Label } from "@linenow/core/components";
import * as S from "../BottomSheetContent.styled";
import { useBottomSheet } from "@linenow/core/hooks";

interface AgreeBottomSheetContentProps {
  onClick: () => void;
}
const AgreeBottomSheetContent = (props: AgreeBottomSheetContentProps) => {
  const { onClick } = props;
  const { closeBottomSheet } = useBottomSheet();
  const handleAgreeButton = () => {
    onClick();
    closeBottomSheet();
  };

  return (
    <S.BottomSheetContentWrapper>
      {/* 타이틀 */}
      <S.BottomSheetTitleWrapper>
        <Label font="head1" color="black">
          이용약관을 확인해주세요
        </Label>
      </S.BottomSheetTitleWrapper>

      <div>
        <div>개인정보 처리 방침</div>
        <div>이용 약관 동의서</div>
      </div>

      {/* 버튼 */}
      <ButtonLayout colCount={1}>
        <Button type="button" onClick={handleAgreeButton} variant="lime">
          인증번호 전송하기
        </Button>
      </ButtonLayout>
    </S.BottomSheetContentWrapper>
  );
};

export default AgreeBottomSheetContent;
