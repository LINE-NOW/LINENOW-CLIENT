import * as S from "./WaitingCard.styled";

import { Waiting } from "@interfaces/waiting";
import { Link } from "react-router-dom";

import BoothThumbnailCompact from "@components/booth/BoothThumbnailCompact";
import { Button, Flex } from "@linenow/core/components";

export interface WaitingCardProps
  extends Pick<
    Waiting,
    "waitingID" | "waitingStatus" | "waitingTeamsAhead" | "booth"
  > {}

interface Config {
  type?: "black" | "white";
  disabled?: boolean;
  button: React.ComponentProps<typeof Button>;
}

const WaitingCard = (props: WaitingCardProps) => {
  const { waitingID, waitingStatus, booth } = props;

  const getConfig = (): Config => {
    switch (waitingStatus) {
      case "ready_to_confirm":
        return {
          button: { variant: "lime", children: "시간 내 입장해주세요" },
        };
      case "waiting":
        return {
          button: { variant: "blueLight", children: "내 앞으로 지금" },
        };
      case "canceled":
        return {
          button: {
            variant: "grayLight",
            children: "대기가 취소 되었어요",
          },
        };
      case "time_over_canceled":
        return {
          button: {
            variant: "grayLight",
            children: "대기 시간이 초과 되었어요",
          },
        };
      default:
        return {
          button: {
            children: "이런건 없음...",
          },
        };
    }
  };

  const { disabled = false, type = "white", button: buttonProps } = getConfig();

  return (
    <Link to={`/waiting/${waitingID}`}>
      <Flex
        as="section"
        direction="column"
        gap="0.75rem"
        css={[S.getWaitingCardStyle(type)]}
      >
        <BoothThumbnailCompact
          css={[S.getBoothThumbnailStyle(disabled)]}
          {...booth}
        />
        <Button {...buttonProps} />
      </Flex>
    </Link>
  );
};
export default WaitingCard;
