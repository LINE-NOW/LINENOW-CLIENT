import { Flex } from "@linenow/core/components";
import * as S from "./Skeleton.styled";
import BottomButton from "@components/bottomButton/BottomButton";

const BoothPageSkeleton = () => {
  return (
    <>
      <Flex width="100%" gap="2rem" direction="column">
        <div css={[S.getSkeletonStyle("100%", "400px")]} />
        <Flex direction="column" padding="1rem 1rem 1.5rem 1rem" gap="1.5rem">
          <div css={[S.getSkeletonStyle("100%", "5rem")]} />
          <div css={[S.getSkeletonStyle("100%", "3rem")]} />
          <div css={[S.getSkeletonStyle("100%", "3rem")]} />
        </Flex>
      </Flex>
      <BottomButton>
        <div css={[S.getSkeletonStyle("100%", "3.25rem")]} />
      </BottomButton>
    </>
  );
};

export default BoothPageSkeleton;
