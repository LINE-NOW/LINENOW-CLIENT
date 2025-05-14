import * as S from "./Booth.styled";

import { Flex, Icon, IconLabel, Label } from "@linenow/core/components";
import { Booth } from "@interfaces/booth";
import React from "react";
import { DEFAULT_BOOTH_THUMBNAIL } from "@constants/image";

export interface BoothThumbnailCompactProps
  extends Pick<Booth, "boothID" | "thumbnail" | "name" | "location">,
    React.ComponentPropsWithoutRef<"section"> {
  isRightIconVisible?: boolean;
}

const BoothThumbnailCompact = (props: BoothThumbnailCompactProps) => {
  const thumbnail =
    props.thumbnail === "" ? DEFAULT_BOOTH_THUMBNAIL : props.thumbnail;

  const {
    isRightIconVisible = true,
    boothID,
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
      <Flex
        as="img"
        src={thumbnail}
        alt={`${name} 부스의 썸네일 사진`}
        loading={"lazy"}
        css={S.getImageStyle("3rem", "0.25rem")}
      />
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

function areEqual(
  prevProps: BoothThumbnailCompactProps,
  nextProps: BoothThumbnailCompactProps
) {
  return prevProps.boothID === nextProps.boothID;
}

export default React.memo(BoothThumbnailCompact, areEqual);
