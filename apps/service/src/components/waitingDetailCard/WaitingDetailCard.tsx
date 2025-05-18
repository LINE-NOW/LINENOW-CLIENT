import { css } from "@emotion/react";
import * as S from "./WaitingDetailCard.styled";
import BoothThumbnailCompact from "@components/booth/BoothThumbnailCompact";
import { Waiting } from "@interfaces/waiting";

import { Flex, Label } from "@linenow/core/components";
import { Link } from "react-router-dom";

interface WaitingDetailCardProps
  extends Pick<Waiting, "waitingID" | "booth" | "waitingNum" | "personCount"> {}

const WaitingDetailCard = (props: WaitingDetailCardProps) => {
  const { waitingNum, personCount, booth } = props;

  return (
    <Flex
      as="section"
      direction="column"
      alignItem="center"
      padding="0.75rem 1rem 1rem 1rem"
      gap="0.75rem"
      css={S.getContainerStyle}
    >
      <Flex
        as="div"
        direction="column"
        alignItem="center"
        gap="0.25rem"
        padding="0.5rem 0rem 0rem 0rem"
      >
        <Label font="body2" color="blackLight">
          나의 대기 번호
        </Label>
        <Label font="head1_b" color="blue">
          {waitingNum}
        </Label>
      </Flex>

      <Link
        to={`/booth/${booth.boothID}`}
        css={[
          css`
            width: 100%;
          `,
        ]}
      >
        <BoothThumbnailCompact css={S.getBoothCardStyle} {...booth} />
      </Link>

      <Flex direction="column" gap="0.25rem" width="100%">
        <Flex direction="row" justifyContent="space-between" width="100%">
          <Label font="body2" color="blackLight">
            이용인원
          </Label>
          <Label font="body2_b" color="blackLight">
            {personCount}명
          </Label>
        </Flex>

        <Label font="caption" color="gray">
          * 다인원의 경우 대기 순서가 뒤로 밀릴 수 있습니다.
        </Label>
      </Flex>
    </Flex>
  );
};

export default WaitingDetailCard;
