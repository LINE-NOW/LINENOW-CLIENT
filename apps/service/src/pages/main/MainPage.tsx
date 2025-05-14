import { QueryKey } from "@tanstack/react-query";

// apis
import { useGetBooths, useGetBoothsWaiting } from "@hooks/apis/booth";

// hooks
import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainBoothList from "@pages/main/_hooks/useBoothList";
import RefetchButton from "@components/refetchButton/RefetchButton";
import useToastFromLocation from "@hooks/useToastFromLocation";

// components
import { Switch, Toast } from "@linenow/core/components";

import * as S from "./MainPage.styled";
import MainNavigation from "./_components/mainNavigation/MainNavigation";
import MainBoothListHeader from "./_components/boothList/MainBoothListHeader";
import { useGetWaitings } from "@hooks/apis/waiting";
import { QUERY_KEY } from "@hooks/apis/query";

const MainPage = () => {
  useGetWaitings("waiting");
  useGetBooths();
  useGetBoothsWaiting();

  const { viewType, mainViewTypeSwitchProps } = useMainViewType();
  const { getBoothListHeaderChildren, BoothList } = useMainBoothList();
  const { showToast, toastMessage } = useToastFromLocation();

  // refetch queries
  const queries: QueryKey[] = [
    QUERY_KEY.BOOTHS_WAITING(),
    QUERY_KEY.WAITINGS(),
  ];

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

        {/* list, map 토글 버튼 */}
        <Switch
          css={S.getFloatingButtonStyle("switch")}
          {...mainViewTypeSwitchProps}
        />
      </div>

      {/* toast */}
      {showToast && (
        <Toast position="bottom" duration={1}>
          {toastMessage}
        </Toast>
      )}
    </>
  );
};

export default MainPage;
