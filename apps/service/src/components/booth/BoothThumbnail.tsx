import { Booth } from "@interfaces/booth";

import * as S from "./Booth.styled";
import { Flex, IconLabel, Label } from "@linenow/core/components";
import { IMAGE } from "@constants/image";
import React from "react";

export interface BoothThumbnailProps
  extends Pick<
      Booth,
      "boothID" | "name" | "description" | "location" | "thumbnail"
    >,
    React.ComponentPropsWithRef<"section"> {}

const BoothThumbnail = (props: BoothThumbnailProps) => {
  const thumbnail =
    props.thumbnail === "" ? IMAGE.DEFAULT_BOOTH_THUMBNAIL : props.thumbnail;

  const { children, boothID, name, description, location, ...attributes } =
    props;

  console.log(boothID + "booth Thumbnail 리렌더링");

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
        src={thumbnail}
        loading={"lazy"}
        alt={`${name} 부스의 썸네일 사진`}
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

const areEqual = (prev: BoothThumbnailProps, next: BoothThumbnailProps) => {
  return prev.boothID === next.boothID;
};

export default React.memo(BoothThumbnail, areEqual);
