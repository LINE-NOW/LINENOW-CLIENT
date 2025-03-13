import { Booth } from "@interfaces/booth";

import * as S from "./Booth.styled";
import { Chip } from "@linenow/core/components";
import BoothThumbnail, { BoothThumbnailProps } from "./BoothThumbnail";
import { SerializedStyles } from "@emotion/react";

export interface BoothThumbnailBadgeProps
  extends BoothThumbnailProps,
    Pick<Booth, "isOperated" | "isWaiting" | "totalWaitingTeams"> {
  css?: SerializedStyles;
}

const BoothThumbnailBadge = (props: BoothThumbnailBadgeProps) => {
  const { isOperated, isWaiting, totalWaitingTeams, css, ...booth } = props;

  return (
    <section
      css={S.getFlexStyle({
        gap: "0.5rem",
        direction: "column",
        width: "100%",
      })}
      {...css}
    >
      <BoothThumbnail {...booth} />

      {/* 배지 리스트 */}
      <div
        css={S.getFlexStyle({
          gap: "0.5rem",
          justifyContent: "end",
          width: "100%",
        })}
      >
        {isOperated == "not_started" ? (
          <Chip variant="grayLight">운영 전</Chip>
        ) : (
          <>
            {isWaiting && <Chip variant="lime">대기 중</Chip>}
            <Chip variant="blueLight">대기 ${totalWaitingTeams}팀</Chip>
          </>
        )}
      </div>
    </section>
  );
};
export default BoothThumbnailBadge;
