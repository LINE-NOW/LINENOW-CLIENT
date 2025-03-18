import * as S from "./MainPage.styled";
import MainNavigation from "./_components/mainNavigation/MainNavigation";
import { Switch } from "@linenow/core/components";

// hooks
import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainBoothList from "@pages/main/_hooks/useBoothList";
import RefetchButton from "@components/refetchButton/RefetchButton";

// apis
import { BOOTH_QUERY_KEY } from "@apis/domains/booth/queries";
import { WAITING_QUERY_KEY } from "@apis/domains/waiting/queries";
import MainBoothListHeader from "./_components/boothList/MainBoothListHeader";

const MainPage = () => {
  const { viewType, mainViewTypeSwitchProps } = useMainViewType();
  const { getBoothListHeaderChildren, BoothList, currentSortBoothOption } =
    useMainBoothList();

  // refetch queries
  const queries = [
    [BOOTH_QUERY_KEY.BOOTHS, currentSortBoothOption],
    [WAITING_QUERY_KEY.NOW_WAITINGS],
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
    </>
  );
};

export default MainPage;
