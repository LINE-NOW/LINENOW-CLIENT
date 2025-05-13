import * as S from "./MainPage.styled";
import MainNavigation from "./_components/mainNavigation/MainNavigation";
import { Switch, Toast } from "@linenow/core/components";

// hooks
import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainBoothList from "@pages/main/_hooks/useBoothList";
import RefetchButton from "@components/refetchButton/RefetchButton";

// apis
import MainBoothListHeader from "./_components/boothList/MainBoothListHeader";
import useToastFromLocation from "@hooks/useToastFromLocation";

import {
  MyLocationButton,
  FestivalLocation,
} from "@pages/main/_components/map/MainLocationButton";
import { SelectedBoothCard } from "./_components/map/MainSelectedBoothCard";
import { useBoothViewState } from "./_hooks/useBoothViewState";

const MainPage = () => {
  const { viewType, mainViewTypeSwitchProps } = useMainViewType();
  const { getBoothListHeaderChildren, BoothList } = useMainBoothList();
  const { isBoothSelected } = useBoothViewState();
  const { showToast, toastMessage } = useToastFromLocation();

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
      <SelectedBoothCard />

      {/* floating button */}
      <div css={S.getFloatingButtonWrapperStyle(viewType)}>
        {/* 새로고침 버튼 */}
        <RefetchButton
          css={S.getFloatingButtonStyle("refetch", isBoothSelected)}
          queries={queries}
        />

        {viewType === "map" && (
          <>
            <MyLocationButton
              css={S.getFloatingButtonStyle("my_location", isBoothSelected)}
            />
            <FestivalLocation
              css={S.getFloatingButtonStyle(
                "festival_location",
                isBoothSelected
              )}
            />
          </>
        )}

        {/* list, map 토글 버튼 */}
        <Switch
          css={S.getFloatingButtonStyle("switch", isBoothSelected)}
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
