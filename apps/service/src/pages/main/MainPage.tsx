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
import { useAtomValue } from "jotai";
import { isSelectedBoothAtom } from "./_atom/selectedBooth";

const MainPage = () => {
  const { viewType, mainViewTypeSwitchProps } = useMainViewType();
  const { getBoothListHeaderChildren, BoothList } = useMainBoothList();

  const { isLogin } = useAuth();

  // refetch queries
  const { queries } = isLogin ? useGetMainDataUser() : useGetMainDataGuest();
  const selectedBoothStatus = useAtomValue(isSelectedBoothAtom);
  console.log(selectedBoothStatus);

  return (
    <>
      <MainNavigation>
        <MainBoothListHeader>
          {getBoothListHeaderChildren()}
        </MainBoothListHeader>
      </MainNavigation>

      <BoothList />

      {viewType === "list" && (
        <div css={S.getFloatingButtonWrapperStyle(viewType)}>
          <RefetchButton
            css={S.getFloatingButtonStyle("refetch")}
            queries={queries}
          />

          <Switch
            css={S.getFloatingButtonStyle("switch")}
            {...mainViewTypeSwitchProps}
          />
        </div>
      )}
    </>
  );
};

export default MainPage;
