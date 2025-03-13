import * as S from "./Booth.styled";

import { Flex, Icon, IconLabel, Label } from "@linenow/core/components";
import { Booth } from "@interfaces/booth";

export interface BoothThumbnailCompactProps
  extends Pick<Booth, "boothID" | "thumbnail" | "name" | "location">,
    React.ComponentPropsWithoutRef<"section"> {
  isRightIconVisible?: boolean;
}

const BoothThumbnailCompact = (props: BoothThumbnailCompactProps) => {
  const { isRightIconVisible = true, ...booth } = props;

  return (
    <Flex as="section" gap="0.5rem" width="100%" alignItem="center" {...props}>
      <Flex
        as="img"
        src={booth.thumbnail}
        css={S.getImageStyle("3rem", "0.25rem")}
      />
      <Flex direction="column" flexGrow={1} gap="0.25rem">
        <Label font="body2" color="blackLight">
          {booth.name}
        </Label>
        <IconLabel
          icon="location_pin"
          iconProps={{ size: 16, color: "grayLight" }}
          gap="0.125rem"
          font="body3"
          color="gray"
          ellipsis
        >
          {booth.location}
        </IconLabel>
      </Flex>
      {isRightIconVisible && <Icon icon="right" color="gray" />}
    </Flex>
  );
};

export default BoothThumbnailCompact;
