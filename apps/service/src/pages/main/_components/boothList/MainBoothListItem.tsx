import { Link } from "react-router-dom";

import * as S from "./MainBoothList.styled";
import BoothThumbnailBadge from "@components/booth/BoothThumbnailBadge";
import { ROUTE } from "@constants/route";
import { BoothThumbnail } from "@interfaces/booth";
import getBadges from "@components/booth/getBadges";

export interface MainBoothListItemProps extends BoothThumbnail {
  isFetching: boolean;
}

const MainBoothListItem = (props: MainBoothListItemProps) => {
  const { isFetching, ...booth } = props;
  return (
    <Link
      to={ROUTE.BOOTH_DETAIL(booth.boothID)}
      css={S.getBoothListItemStyle()}
    >
      <BoothThumbnailBadge
        boothID={booth.boothID}
        thumbnail={booth.thumbnail}
        name={booth.name}
        description={booth.description}
        location={booth.location}
        badges={getBadges({
          isFetching: isFetching,
          operatingStatus: booth.operatingStatus,
          totalWaitingTeams: booth.totalWaitingTeams,
          waitingStatus: booth.waitingStatus,
        })}
      />
    </Link>
  );
};

export default MainBoothListItem;
