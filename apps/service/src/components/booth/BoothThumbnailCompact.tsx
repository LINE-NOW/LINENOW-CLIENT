import * as S from "./Booth.styled";

import { Flex, Icon, IconLabel, Label } from "@linenow/core/components";
import { Booth } from "@interfaces/booth";

export interface BoothThumbnailCompactProps
  extends Pick<Booth, "boothID" | "thumbnail" | "name" | "location">,
    React.ComponentPropsWithoutRef<"section"> {
  isRightIconVisible?: boolean;
}

const BoothThumbnailCompact = (props: BoothThumbnailCompactProps) => {
  const {
    isRightIconVisible = true,
    boothID,
    thumbnail,
    name,
    location,
    ...attributes
  } = props;

  return (
    <Flex
      as="section"
      gap="0.5rem"
      width="100%"
      alignItem="center"
      {...attributes}
    >
      <Flex as="img" src={thumbnail} css={S.getImageStyle("3rem", "0.25rem")} />
      <Flex direction="column" flexGrow={1} gap="0.25rem">
        <Label font="body2" color="blackLight">
          {name}
        </Label>
        <IconLabel
          icon="location_pin"
          iconProps={{ size: 16, color: "grayLight" }}
          gap="0.125rem"
          font="body3"
          color="gray"
          ellipsis
        >
          {location}
        </IconLabel>
      </Flex>
      {isRightIconVisible && <Icon icon="right" color="gray" />}
    </Flex>
  );
};

export default BoothThumbnailCompact;
