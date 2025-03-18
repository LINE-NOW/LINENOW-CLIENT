import BoothThumbnail from "./BoothThumbnail";
import { Chip, Flex } from "@linenow/core/components";

import { Booth } from "@interfaces/booth";
import { SerializedStyles } from "@emotion/react";

type BoothThumbnailProps = React.ComponentProps<typeof BoothThumbnail>;

export interface BoothThumbnailBadgeProps
  extends BoothThumbnailProps,
    Pick<Booth, "isOperated" | "isWaiting" | "totalWaitingTeams"> {
  css?: SerializedStyles;
}

const BoothThumbnailBadge = (props: BoothThumbnailBadgeProps) => {
  const {
    isOperated,
    isWaiting,
    totalWaitingTeams,
    css,
    ...boothThumbnailProps
  } = props;

  return (
    <Flex as="section" gap="0.5rem" direction="column" width="100%" css={css}>
      <BoothThumbnail {...boothThumbnailProps} />

      {/* 배지 리스트 */}
      <Flex gap="0.5rem" justifyContent="end" width="100%">
        {isOperated === "not_started" ? (
          <Chip variant="grayLight">운영 전</Chip>
        ) : (
          <>
            {isWaiting && <Chip variant="lime">대기 중</Chip>}
            <Chip variant="blueLight">대기 {totalWaitingTeams}팀</Chip>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default BoothThumbnailBadge;
