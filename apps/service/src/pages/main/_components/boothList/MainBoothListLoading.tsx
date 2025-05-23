import BoothItemSkeleton from "@components/skeleton/BoothItem.Skeleton";
import { Flex } from "@linenow/core/components";

const MainBoothListLoading = () => {
  return (
    <Flex direction="column" gap="0.25rem" padding="1rem 0rem">
      <BoothItemSkeleton />
      <BoothItemSkeleton />
      <BoothItemSkeleton />
    </Flex>
  );
};

export default MainBoothListLoading;
