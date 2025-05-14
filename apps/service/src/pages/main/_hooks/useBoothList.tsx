import MainBoothList from "../_components/boothList/MainBoothList";

import { Flex, Label } from "@linenow/core/components";

import useMainViewType from "./useMainViewType";
import MainMap from "../_components/map/MainMap";
import { useBoothList } from "../_components/boothList/useBoothList";

const useMainBoothList = () => {
  const { viewType } = useMainViewType();
  const { currentBooths } = useBoothList();

  // 고민 좀 해보기...
  const getBoothListHeaderChildren = () =>
    viewType === "list" && (
      <Flex justifyContent="space-between">
        <Label font="body3" color="gray">
          {currentBooths.length}개의 부스
        </Label>
      </Flex>
    );

  const BoothList = () =>
    viewType === "list" ? <MainBoothList /> : <MainMap />;

  return {
    getBoothListHeaderChildren,
    BoothList,
    currentSortBoothOption,
  };
};

export default useMainBoothList;
