import BoothThumbnail from "./BoothThumbnail";
import { Flex } from "@linenow/core/components";

import { SerializedStyles } from "@emotion/react";

type BoothThumbnailProps = React.ComponentProps<typeof BoothThumbnail>;

export interface BoothThumbnailBadgeProps extends BoothThumbnailProps {
  css?: SerializedStyles;
  badges: React.ReactNode;
}

const BoothThumbnailBadge = (props: BoothThumbnailBadgeProps) => {
  const { css, badges, ...boothThumbnailProps } = props;

  return (
    <Flex as="section" gap="0.5rem" direction="column" width="100%" css={css}>
      <BoothThumbnail {...boothThumbnailProps} />

      {/* 배지 리스트 */}
      <Flex gap="0.5rem" justifyContent="end" width="100%">
        {badges}
      </Flex>
    </Flex>
  );
};

export default BoothThumbnailBadge;
