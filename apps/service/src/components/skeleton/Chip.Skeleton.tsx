import * as S from "./Skeleton.styled";

interface ChipSkeletonProps {
  width?: string;
}
const ChipSkeleton = (props: ChipSkeletonProps) => {
  const { width = "4rem" } = props;
  return <div css={[S.getSkeletonStyle(width, "1.5rem")]} />;
};

export default ChipSkeleton;
