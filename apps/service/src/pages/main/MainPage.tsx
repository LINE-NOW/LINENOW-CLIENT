import MainNavigation from "./_components/mainNavigation/MainNavigation";

// hook
import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainBoothList from "@pages/main/_hooks/useBoothList";
import RefetchButton from "@components/refetchButton/RefetchButton";
import { BOOTH_QUERY_KEY } from "@apis/domains/booth/queries";

const MainPage = () => {
  const { MainViewTypeSwitch, viewType } = useMainViewType();
  const { BoothListHeader, BoothList, currentSortBoothOption } =
    useMainBoothList();

  const queries = [[BOOTH_QUERY_KEY.BOOTHS, currentSortBoothOption], []];

  return (
    <>
      <MainNavigation>
        <BoothListHeader />
      </MainNavigation>

      <BoothList />

      <RefetchButton queries={queries} />
      <MainViewTypeSwitch />
    </>
  );
};

export default MainPage;
