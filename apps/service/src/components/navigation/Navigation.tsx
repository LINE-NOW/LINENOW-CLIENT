import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./Navigation.styled";
import { CommonButton, Icon } from "@linenow/core/components";
import { ROUTE } from "@constants/route";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getNavigationTitle = () => {
    if (location.pathname.startsWith(ROUTE.WAITING_DETAIL())) {
      return <S.NavigationLabel>나의 대기</S.NavigationLabel>;
    }

    switch (location.pathname) {
      case ROUTE.MY_WAITING:
        return <S.NavigationLabel>나의 대기</S.NavigationLabel>;
      case ROUTE.SETTING:
        return <S.NavigationLabel>설정</S.NavigationLabel>;
      case ROUTE.LOGIN:
        return <S.NavigationLabel>로그인/회원가입</S.NavigationLabel>;

      default:
        return null;
    }
  };

  const handleBackButton = () => {
    // location.key가 없으면 이전 페이지가 없다고 판단하고, 홈으로 이동
    if (location.key !== "default") {
      window.history.back();
    } else {
      navigate(ROUTE.DEFAULT);
    }
  };

  return (
    <S.NavigationWrapper>
      <CommonButton onClick={handleBackButton}>
        <Icon icon="left" color="gray" />
      </CommonButton>

      {getNavigationTitle()}
    </S.NavigationWrapper>
  );
};

export default Navigation;
