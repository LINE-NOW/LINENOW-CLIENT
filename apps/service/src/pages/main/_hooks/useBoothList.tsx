import MainBoothList from "../_components/boothList/MainBoothList";

import { Flex, Label } from "@linenow/core/components";

import useMainViewType from "./useMainViewType";
import MainMap from "../_components/map/MainMap";
import useBoothListData from "./useBoothListData";

const useMainBoothList = () => {
  const { viewType } = useMainViewType();
  const { currentBooths } = useBoothListData();

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
