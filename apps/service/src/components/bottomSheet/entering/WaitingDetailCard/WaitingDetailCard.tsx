import * as S from "./WaitingDetailCard.styled";
import BoothThumbnailCompact from "@components/booth/BoothThumbnailCompact";
import { useGetWaitingBooth } from "@hooks/apis/waiting";

import { Flex, Label } from "@linenow/core/components";

interface WaitingDetailCardProps {
  waitingID: number;
}

const WaitingDetailCard = (props: WaitingDetailCardProps) => {
  const { waitingID } = props;
  const { data: waiting, isLoading } = useGetWaitingBooth(waitingID);

  if (isLoading) return <div>로딩중</div>;
  if (!waiting) return <div>없음</div>;
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
          {waiting.waitingNum}
        </Label>
      </Flex>

      <BoothThumbnailCompact css={S.getBoothCardStyle} {...waiting.booth} />

      <Flex direction="column" gap="0.25rem" width="100%">
        <Flex direction="row" justifyContent="space-between" width="100%">
          <Label font="body2" color="blackLight">
            이용인원
          </Label>
          <Label font="body2_b" color="blackLight">
            {waiting.personCount}명
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
