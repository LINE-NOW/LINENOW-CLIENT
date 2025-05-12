import * as S from "./MainPage.styled";
import MainNavigation from "./_components/mainNavigation/MainNavigation";
import { Switch } from "@linenow/core/components";

// hooks
import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainBoothList from "@pages/main/_hooks/useBoothList";
import RefetchButton from "@components/refetchButton/RefetchButton";

// apis

import MainBoothListHeader from "./_components/boothList/MainBoothListHeader";

const MainPage = () => {
  const { viewType, mainViewTypeSwitchProps } = useMainViewType();
  const { getBoothListHeaderChildren, BoothList } = useMainBoothList();

  // refetch queries
  const queries = [["need value"]];

  return (
    <>
      <MainNavigation>
        <MainBoothListHeader>
          {getBoothListHeaderChildren()}
        </MainBoothListHeader>
      </MainNavigation>

      <BoothList />

      {/* floating button */}
      <div css={S.getFloatingButtonWrapperStyle(viewType)}>
        {/* 새로고침 버튼 */}
        <RefetchButton
          css={S.getFloatingButtonStyle("refetch")}
          queries={queries}
        />

        {/* TODO: viewType에 따라 버튼 두 개 분기 */}

        {/* list, map 토글 버튼 */}
        <Switch
          css={S.getFloatingButtonStyle("switch")}
          {...mainViewTypeSwitchProps}
        />
      </div>
    </>
  );
};

export default MainPage;
