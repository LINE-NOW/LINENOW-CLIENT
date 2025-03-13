import { Booth } from "@interfaces/booth";

import * as S from "./Booth.styled";
import { Flex, IconLabel, Label } from "@linenow/core/components";

export interface BoothThumbnailProps
  extends Pick<
      Booth,
      "boothID" | "name" | "description" | "location" | "thumbnail"
    >,
    React.ComponentPropsWithoutRef<"section"> {}

const BoothThumbnail = (props: BoothThumbnailProps) => {
  const { children, ...booth } = props;

  return (
    <Flex as="section" gap="0.5rem" alignItem="center" width="100%" {...props}>
      {/* 이미지 */}
      <img
        src={booth.thumbnail}
        alt={`${booth.name}의 대표 이미지`}
        css={S.getImageStyle("4.5rem", "0.25rem")}
      />

      {/* 부스정보 */}
      <Flex gap="0.5rem" direction="column" flexGrow={1}>
        <Flex direction="column" width="100%">
          <Label font="head3" color="black" ellipsis={true}>
            {booth.name}
          </Label>
          <Label font="body2" color="blackLight" ellipsis={true}>
            {booth.description}
          </Label>
        </Flex>

        <IconLabel
          icon="location_pin"
          iconProps={{ size: 16, color: "grayLight" }}
          gap="0.125rem"
          font="body3"
          color="gray"
          ellipsis={true}
        >
          {booth.location}
        </IconLabel>
      </Flex>
    </Flex>
  );
};

export default BoothThumbnail;
