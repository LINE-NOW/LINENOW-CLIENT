import { css, Theme } from "@emotion/react";
import * as S from "./Skeleton.styled";

import { Flex } from "@linenow/core/components";

const WaitingCardSkeleton = () => {
  return (
    <Flex
      direction="column"
      padding="0.75rem"
      gap="0.75rem"
      css={containerStyle}
    >
      <div css={[S.getSkeletonStyle("100%", "3rem")]} />
      <div css={[S.getSkeletonStyle("100%", "3.25rem")]} />
    </Flex>
  );
};
export default WaitingCardSkeleton;

const containerStyle = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.backgroundColors.blackLight};
  border-radius: 0.75rem;
`;
