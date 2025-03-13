import { useEffect, useRef, useState } from "react";

import * as S from "./MainPage.styled";
import MainNavigation from "./_components/navigation/MainNavigation";
import MainBoothListHeader from "./_components/boothList/MainBoothListHeader";
import MainBoothList from "./_components/boothList/MainBoothList";

// hook
import useAuth from "@hooks/useAuth";
import useMainNavigation from "@pages/main/_hooks/useMainNavigation";
import { useGetBoothList } from "@hooks/apis/boothList";
import useSortBooths from "./_hooks/useSortBooths";

// constant
import { MAIN_FIXED_COMPONENTS_HEIGHT } from "@constants/style";
import { Switch } from "@linenow/core/components";
import MainMap from "./_components/map/MainMap";

const MainPage = () => {
  const { isLogin } = useAuth();

  const mainBoothListRef = useRef<HTMLDivElement>(null);
  const isFold = useMainNavigation();

  const [mode, setMode] = useState<"list" | "map">("list");
  const oppositeMode = mode === "list" ? "map" : "list";
  const toggleMode = () => {
    setMode(oppositeMode);
  };

  // booth list api
  const {
    sortBoothOptions,
    currentSortBoothOption,
    handleSortBoothOptionChange,
  } = useSortBooths();

  const {
    data: booths,
    isLoading: boothsIsLoading,
    refetch: getBoothListRefetch,
  } = useGetBoothList({ ordering: currentSortBoothOption });

  useEffect(() => {
    getBoothListRefetch();
  }, [isLogin]);

  return (
    <>
      <header css={S.getMainHeaderStyle(mode)}>
        <MainNavigation isFold={isFold} isLogin={isLogin} />
        {mode === "list" && (
          <MainBoothListHeader
            boothCount={booths?.length || 0}
            sortBoothOptions={sortBoothOptions}
            currentSortBoothOption={currentSortBoothOption}
            handleSortBoothOptionChange={handleSortBoothOptionChange}
          />
        )}
      </header>

      {mode === "list" && (
        <>
          <S.MainFixedComponentBackgorund
            style={{
              height: `${
                isFold
                  ? MAIN_FIXED_COMPONENTS_HEIGHT.fold
                  : MAIN_FIXED_COMPONENTS_HEIGHT.unfold
              }`,
            }}
          />
          <MainBoothList
            ref={mainBoothListRef}
            booths={booths}
            isLoading={boothsIsLoading}
          />
        </>
      )}

      {mode === "map" && <MainMap />}

      <Switch icon={oppositeMode} css={S.getSwitchStyle()} onClick={toggleMode}>
        {oppositeMode === "list" ? "목록 보기" : "지도 보기"}
      </Switch>
    </>
  );
};

export default MainPage;
