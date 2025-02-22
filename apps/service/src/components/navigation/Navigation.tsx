import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./Navigation.styled";
import { IconButton } from "@components/button/CustomButton";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getNavigationTitle = () => {
    if (location.pathname.startsWith("/waiting/")) {
      return <S.NavigationLabel>나의 줄서기 정보</S.NavigationLabel>;
    }

    switch (location.pathname) {
      case "/my-waiting":
        return <S.NavigationLabel>나의 줄서기</S.NavigationLabel>;
      case "/setting":
        return <S.NavigationLabel>설정</S.NavigationLabel>;
      case "/login":
        return <S.NavigationLabel>로그인</S.NavigationLabel>;
      case "/signup":
        return <S.NavigationLabel>회원가입</S.NavigationLabel>;
      default:
        return null;
    }
  };

  const handleBackButton = () => {
    // location.key가 없으면 이전 페이지가 없다고 판단하고, 홈으로 이동
    if (location.key !== "default") {
      window.history.back();
    } else {
      navigate("");
    }
  };

  return (
    <S.NavigationWrapper>
      <IconButton
        onClick={handleBackButton}
        icon="left_gray"
        iconSize="1.5rem"
      />
      {getNavigationTitle()}
    </S.NavigationWrapper>
  );
};

export default Navigation;
