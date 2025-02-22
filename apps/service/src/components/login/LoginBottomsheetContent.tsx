// components
import * as S from './LoginBottomsheetContent.styled';
import Button from '@components/button/Button';
import ButtonLayout from '@components/button/ButtonLayout';

// hooks
import { useNavigate } from 'react-router-dom';

const LoginBottomsheetContent = () => {
  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate('/login');
  };

  const handleSignipButton = () => {
    navigate('/signup');
  };

  return (
    <S.LoginBottomsheetContentWrapper>
      <S.LoginBottomsheetContentTopWrapper>
        <S.LoginBottomsheetContentTopTitle>
          로그인이 필요해요
        </S.LoginBottomsheetContentTopTitle>
        <S.LoginBottomsheetContentTopSubTitle>
          라인나우에 바로 가입하여 대기 줄 서기를 이용하세요 <br />
          전화번호로 간편하게 가입할 수 있어요
        </S.LoginBottomsheetContentTopSubTitle>
      </S.LoginBottomsheetContentTopWrapper>

      <ButtonLayout $col={1}>
        <Button
          onClick={handleLoginButton}
          style={{ backgroundColor: '#D1FF25', color: '#333740' }}
        >
          전화번호로 로그인하기
        </Button>
        <Button onClick={handleSignipButton} shape="outline" scheme="grayLight">
          라인나우 회원가입하기
        </Button>
      </ButtonLayout>
    </S.LoginBottomsheetContentWrapper>
  );
};

export default LoginBottomsheetContent;
