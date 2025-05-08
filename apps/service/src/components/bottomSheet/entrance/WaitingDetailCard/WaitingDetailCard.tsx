import * as S from "./WaitingDetailCard.styled";
import BoothThumbnailCompact from "@components/booth/BoothThumbnailCompact";
import { Flex, Label } from "@linenow/core/components";

const WaitingDetaiCard = () => {
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
        <Label as={"caption"} font="body2" color="blackLight">
          나의 대기 번호
        </Label>
        <Label font="head1_b" color="blue">
          005
        </Label>
      </Flex>

      <BoothThumbnailCompact
        boothID={1}
        name={"동국대학교"}
        location={"팔정도"}
        thumbnail="http://linenow-backend.store/media/booth_2/IMG_8242.jpeg"
        css={S.getBoothCardStyle}
      />

      <Flex direction="column" gap="0.25rem" width="100%">
        <Flex direction="row" justifyContent="space-between" width="100%">
          <Label font="body2" color="blackLight">
            이용인원
          </Label>
          <Label font="body2_b" color="blackLight">
            4명
          </Label>
        </Flex>

        <Label font="caption" color="gray">
          * 다인원의 경우 대기 순서가 뒤로 밀릴 수 있습니다.
        </Label>
      </Flex>
    </Flex>
  );
};

export default WaitingDetaiCard;
