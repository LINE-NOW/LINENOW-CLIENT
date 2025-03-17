import MainBoothList from "../_components/boothList/MainBoothList";
import MainBoothListHeader from "../_components/boothList/MainBoothListHeader";
import { Flex, Label, Select } from "@linenow/core/components";

import { useGetBoothList } from "@hooks/apis/boothList";
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

  const { data: booths = [], isLoading: boothsIsLoading } = useGetBoothList({
    ordering: currentSortBoothOption,
  });

  const BoothListSelect = () => (
    <Select
      options={sortBoothOptions}
      value={currentSortBoothOption}
      onChange={handleSortBoothOptionChange}
    />
  );

  const BoothListHeader = () => (
    <MainBoothListHeader>
      {viewType === "list" && (
        <Flex justifyContent="space-between">
          <Label font="body3" color="gray">
            {booths.length}개의 부스
          </Label>

          <BoothListSelect />
        </Flex>
      )}
    </MainBoothListHeader>
  );

  const BoothList = () =>
    viewType === "list" ? (
      <MainBoothList booths={booths} isLoading={boothsIsLoading} />
    ) : (
      <MainMap />
    );

  return { BoothListHeader, BoothList };
};

export default useMainBoothList;
