import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./Navigation.styled";
import { CommonButton, Flex, Icon } from "@linenow/core/components";
import { ROUTE } from "@constants/route";
import { IMAGE } from "@constants/image";

const Navigation = () => {
  const location = useLocation();
  const checkPrevDomainIsLinenow = () => {
    return !(location.key === "default" && location.pathname !== ROUTE.DEFAULT);
  };

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
    if (checkPrevDomainIsLinenow()) {
      window.history.back();
    } else {
      navigate(ROUTE.DEFAULT);
    }
  };

  return (
    <S.NavigationWrapper>
      <Flex>
        <CommonButton onClick={handleBackButton}>
          <Icon icon="left" color="gray" />
        </CommonButton>
        {checkPrevDomainIsLinenow() || (
          <img
            src={IMAGE.NAVIGATION_ON_BOARDING}
            css={S.getFloatingOnBoardingStyle}
            onClick={() => {
              navigate(ROUTE.DEFAULT);
            }}
          />
        )}
      </Flex>

      {getNavigationTitle()}
    </S.NavigationWrapper>
  );
};

export default Navigation;
