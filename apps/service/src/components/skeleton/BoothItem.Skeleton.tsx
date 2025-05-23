import * as S from "./Skeleton.styled";
import { Flex } from "@linenow/core/components";

const BoothItemSkeleton = () => {
  return (
    <Flex
      direction="column"
      padding="0.75rem 1.25rem 1rem 1.25rem"
      gap="0.5rem"
    >
      <Flex gap="0.5rem" alignItem="center">
        <div css={[S.getSkeletonStyle("4.5rem", "4.5rem")]} />
        <Flex direction="column" flexGrow={1} gap="0.5rem">
          <div css={[S.getSkeletonStyle("100%", "2.5rem")]} />
          <div css={[S.getSkeletonStyle("40%", "1rem")]} />
        </Flex>
      </Flex>
      <Flex height="1.5rem" width="100%" justifyContent="end">
        <div css={[S.getSkeletonStyle("4rem", "1.5rem")]} />
      </Flex>
    </Flex>
  );
};

export default BoothItemSkeleton;
