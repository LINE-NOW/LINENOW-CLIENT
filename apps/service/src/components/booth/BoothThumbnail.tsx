import { Booth } from "@interfaces/booth";

import * as S from "./Booth.styled";
import { Flex, IconLabel, Label } from "@linenow/core/components";

export interface BoothThumbnailProps
  extends Pick<
      Booth,
      "boothID" | "name" | "description" | "location" | "thumbnail"
    >,
    React.ComponentPropsWithRef<"section"> {}

const BoothThumbnail = (props: BoothThumbnailProps) => {
  const {
    children,
    boothID,
    name,
    description,
    location,
    thumbnail,
    ...attributes
  } = props;

  return (
    <Flex
      as="section"
      gap="0.5rem"
      alignItem="center"
      width="100%"
      {...attributes}
    >
      {/* 이미지 */}
      <Flex
        as="img"
        // src={thumbnail}
        alt={`${name}의 대표 이미지`}
        css={S.getImageStyle("4.5rem", "0.25rem")}
      />

      {/* 부스정보 */}
      <Flex gap="0.5rem" direction="column" flexGrow={1} flexShrink={1}>
        <Flex direction="column" width="100%">
          <Label font="head3" color="black" ellipsis={true}>
            {name}
          </Label>
          <Label font="body2" color="blackLight" ellipsis={true}>
            {description}
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
          {location}
        </IconLabel>
      </Flex>
    </Flex>
  );
};

export default BoothThumbnail;
