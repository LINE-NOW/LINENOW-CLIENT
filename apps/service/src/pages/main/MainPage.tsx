// hooks
import useAuth from "@hooks/useAuth";
import {
  useGetMainDataGuest,
  useGetMainDataUser,
} from "./_hooks/useGetMainData";

import useMainViewType from "@pages/main/_hooks/useMainViewType";

import RefetchButton from "@components/refetchButton/RefetchButton";

// apis
// components
import { Flex, Label, Switch } from "@linenow/core/components";

import * as S from "./MainPage.styled";
import MainNavigation from "./_components/mainNavigation/MainNavigation";
import MainBoothListHeader from "./_components/boothList/MainBoothListHeader";
import MainBoothsContent from "./_components/MainBoothsContent";
import useBoothListData from "./_hooks/useBoothListData";

const MainPage = () => {
  const { viewType, mainViewTypeSwitchProps } = useMainViewType();
  const { OptionSelect, currentBooths } = useBoothListData();

  const { isLogin } = useAuth();

  // refetch queries
  const { queries } = isLogin ? useGetMainDataUser() : useGetMainDataGuest();

  return (
    <>
      <MainNavigation>
        <MainBoothListHeader>
          {viewType === "list" && (
            <Flex justifyContent="space-between">
              <Label font="body3" color="gray">
                {currentBooths.length}개의 부스
              </Label>
              <OptionSelect />
            </Flex>
          )}
        </MainBoothListHeader>
      </MainNavigation>

      <MainBoothsContent booths={currentBooths} viewType={viewType} />

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
