import * as S from "./MainPage.styled";
import MainNavigation from "./_components/mainNavigation/MainNavigation";
import { Switch } from "@linenow/core/components";

// hooks
import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainBoothList from "@pages/main/_hooks/useBoothList";
import RefetchButton from "@components/refetchButton/RefetchButton";

// apis
import MainBoothListHeader from "./_components/boothList/MainBoothListHeader";

import {
  MyLocationButton,
  FestivalLocation,
} from "@pages/main/_components/map/MainLocationButton";
import { SelectedBoothCard } from "./_components/map/MainSelectedBoothCard";

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

        {viewType === "map" && (
          <>
            <MyLocationButton css={S.getFloatingButtonStyle("my_location")} />
            <FestivalLocation
              css={S.getFloatingButtonStyle("festival_location")}
            />
            <SelectedBoothCard />
          </>
        )}

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
