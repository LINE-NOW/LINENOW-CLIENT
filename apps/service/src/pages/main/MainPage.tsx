import MainNavigation from "./_components/mainNavigation/MainNavigation";

// hook
import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainBoothList from "@pages/main/_hooks/useBoothList";

const MainPage = () => {
  const { MainViewTypeSwitch } = useMainViewType();
  const { BoothListHeader, BoothList } = useMainBoothList();

  return (
    <>
      <MainNavigation>
        <BoothListHeader />
      </MainNavigation>

      <BoothList />

      <MainViewTypeSwitch />
    </>
  );
};

export default MainPage;
