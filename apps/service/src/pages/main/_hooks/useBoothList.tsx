import MainBoothList from "../_components/boothList/MainBoothList";

import { Flex, Label } from "@linenow/core/components";

import useMainViewType from "./useMainViewType";
import MainMap from "../_components/map/MainMap";
import useBoothListData from "./useBoothListData";

import useSortBooths from "./useSortBooths";

const useMainBoothList = () => {
  const { currentSortBoothOption, OptionSelect } = useSortBooths();
  const { viewType } = useMainViewType();
  const { currentBooths } = useBoothListData({
    option: currentSortBoothOption,
  });

  const getBoothListHeaderChildren = () =>
    viewType === "list" && (
      <Flex justifyContent="space-between">
        <Label font="body3" color="gray">
          {currentBooths.length}개의 부스
        </Label>
        <OptionSelect />
      </Flex>
    );

  const BoothList = () =>
    viewType === "list" ? (
      <MainBoothList booths={currentBooths} />
    ) : (
      <MainMap booths={currentBooths} />
    );

  return {
    getBoothListHeaderChildren,
    BoothList,
  };
};

export default useMainBoothList;
