import { Button, ButtonLayout, Label } from "@linenow/core/components";
import * as S from "../BottomSheetContent.styled";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "@constants/route";

const LoginBottomSheetContent = () => {
  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate(ROUTE.LOGIN);
  };

  const handleSignipButton = () => {
    navigate(ROUTE.SIGNUP);
  };

  return (
    <S.BottomSheetContentWrapper>
      {/* 타이틀 */}
      <S.BottomSheetTitleWrapper>
        <Label font="head1" color="black">
          로그인이 필요해요
        </Label>
        <Label font="body1" color="blackLight">
          라인나우에 바로 가입하여 대기 줄 서기를 이용하세요 <br />
          전화번호로 간편하게 가입할 수 있어요
        </Label>
      </S.BottomSheetTitleWrapper>

      {/* 버튼 */}
      <ButtonLayout colCount={1}>
        <Button onClick={handleLoginButton} variant="lime">
          전화번호로 로그인하기
        </Button>
        <Button onClick={handleSignipButton} variant="outline">
          라인나우 회원가입하기
        </Button>
      </ButtonLayout>
    </S.BottomSheetContentWrapper>
  );
};

export default LoginBottomSheetContent;
