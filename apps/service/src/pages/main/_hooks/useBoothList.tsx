import MainBoothList from "../_components/boothList/MainBoothList";
import { Flex, Label, Select } from "@linenow/core/components";

import useSortBooths from "./useSortBooths";
import useMainViewType from "./useMainViewType";
import MainMap from "../_components/map/MainMap";

const useMainBoothList = () => {
  const { viewType } = useMainViewType();
  // booth list api
  const {
    sortBoothOptions,
    currentSortBoothOption,
    handleSortBoothOptionChange,
  } = useSortBooths();

  // 부스 목록 정렬 옵션 선택
  const BoothOptionSelect = () => (
    <Select
      options={sortBoothOptions}
      value={currentSortBoothOption}
      onChange={handleSortBoothOptionChange}
    />
  );

  // 고민 좀 해보기...
  const getBoothListHeaderChildren = () =>
    viewType === "list" && (
      <Flex justifyContent="space-between">
        <Label font="body3" color="gray">
          N개의 부스
        </Label>

        <BoothOptionSelect />
      </Flex>
    );

  const BoothList = () =>
    viewType === "list" ? (
      <MainBoothList />
    ) : (
      <MainMap latitude={37.5584809} longitude={127.0004067} />
    );

  return { getBoothListHeaderChildren, BoothList, currentSortBoothOption };
};

export default useMainBoothList;
