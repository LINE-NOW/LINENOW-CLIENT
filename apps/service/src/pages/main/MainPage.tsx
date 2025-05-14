// hooks
import useAuth from "@hooks/useAuth";
import {
  useGetMainDataGuest,
  useGetMainDataUser,
} from "./_hooks/useGetMainData";

import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainBoothList from "@pages/main/_hooks/useBoothList";
import RefetchButton from "@components/refetchButton/RefetchButton";

// apis
// components
import { Switch } from "@linenow/core/components";

import * as S from "./MainPage.styled";
import MainNavigation from "./_components/mainNavigation/MainNavigation";
import MainBoothListHeader from "./_components/boothList/MainBoothListHeader";

import {
  MyLocationButton,
  FestivalLocation,
} from "@pages/main/_components/map/MainLocationButton";

const MainPage = () => {
  const { isLogin } = useAuth();

  const { viewType, mainViewTypeSwitchProps } = useMainViewType();
  const { getBoothListHeaderChildren, BoothList } = useMainBoothList();

  // refetch queries
  const { queries } = isLogin ? useGetMainDataUser() : useGetMainDataGuest();

  return (
    <>
      <MainNavigation>
        <MainBoothListHeader>
          {getBoothListHeaderChildren()}
        </MainBoothListHeader>
      </MainNavigation>

      <BoothList />
      {/* <SelectedBoothCard /> */}

      {/* floating button */}
      <div css={S.getFloatingButtonWrapperStyle(viewType)}>
        {/* 새로고침 버튼 */}
        <RefetchButton
          css={S.getFloatingButtonStyle("refetch", viewType)}
          queries={queries}
        />

        {viewType === "map" && (
          <>
            <MyLocationButton
              css={S.getFloatingButtonStyle("my_location", viewType)}
            />
            <FestivalLocation
              css={S.getFloatingButtonStyle("festival_location", viewType)}
            />
          </>
        )}

        {/* list, map 토글 버튼 */}
        <Switch
          css={S.getFloatingButtonStyle("switch", viewType)}
          {...mainViewTypeSwitchProps}
        />
      </div>
    </>
  );
};

export default MainPage;
