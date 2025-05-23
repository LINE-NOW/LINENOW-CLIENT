import { Flex, Label } from "@linenow/core/components";

import useMainViewType from "./useMainViewType";

import useBoothListData from "./useBoothListData";

import useSortBooths from "./useSortBooths";
import { useIsFetching } from "@tanstack/react-query";
import { QUERY_KEY } from "@hooks/apis/query";
import MainBoothListLoading from "../_components/boothList/MainBoothListLoading";
import MainBoothList from "../_components/boothList/MainBoothList";
import MainMap from "../_components/map/MainMap";

const useMainBoothList = () => {
  const { currentSortBoothOption, OptionSelect } = useSortBooths();
  const { viewType } = useMainViewType();
  const { currentBooths } = useBoothListData({
    option: currentSortBoothOption,
  });

  const isBoothsFetching = useIsFetching({ queryKey: QUERY_KEY.BOOTHS() });

  const isFirstLoading = isBoothsFetching === 1 && currentBooths.length === 0;
  const getBoothListHeaderChildren = () =>
    viewType === "list" && (
      <Flex justifyContent="space-between">
        <Label font="body3" color="gray">
          {currentBooths.length}개의 부스
        </Label>
        <OptionSelect />
      </Flex>
    );

  const BoothList = () => {
    if (isFirstLoading) return <MainBoothListLoading />;

    if (viewType === "list") return <MainBoothList booths={currentBooths} />;
    else if (viewType === "map") return <MainMap booths={currentBooths} />;
  };

  return {
    getBoothListHeaderChildren,
    BoothList,
  };
};

export default useMainBoothList;
