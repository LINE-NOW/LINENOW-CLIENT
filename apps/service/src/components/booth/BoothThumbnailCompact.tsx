import * as S from "./Booth.styled";

import { Icon, IconLabel, Label } from "@linenow/core/components";
import { Booth } from "@interfaces/booth";

export interface BoothThumbnailCompactProps
  extends Pick<Booth, "boothID" | "thumbnail" | "name" | "location"> {
  isRightIconVisible: boolean;
}

const BoothThumbnailCompact = (props: BoothThumbnailCompactProps) => {
  const { isRightIconVisible, ...booth } = props;
  return (
    <section
      css={S.getFlexStyle({
        gap: "0.5rem",
        width: "100%",
        alignItem: "center",
      })}
    >
      <img src={props.thumbnail} css={S.getImageStyle("3rem", "0.25rem")} />
      <div
        css={S.getFlexStyle({
          gap: "0.25rem",
          direction: "column",
          flexGrow: 1,
        })}
      >
        <Label font="body2" color="blackLight">
          {booth.name}
        </Label>
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
      </div>
      {isRightIconVisible && <Icon icon="right" color="gray" />}
    </section>
  );
};

export default BoothThumbnailCompact;
