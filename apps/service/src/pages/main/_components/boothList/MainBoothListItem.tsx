import { Link } from "react-router-dom";

import * as S from "./MainBoothList.styled";
import BoothThumbnailBadge, {
  BoothThumbnailBadgeProps,
} from "@components/booth/BoothThumbnailBadge";
import { ROUTE } from "@constants/route";

export interface MainBoothListItemProps extends BoothThumbnailBadgeProps {
  isLast?: boolean;
}

const MainBoothListItem = (props: MainBoothListItemProps) => {
  const { isLast = false, ...booth } = props;
  return (
    <Link
      to={ROUTE.BOOTH_DETAIL(booth.boothID)}
      css={S.getBoothListItemStyle()}
    >
      <BoothThumbnailBadge {...booth} />
    </Link>
  );
};

export default MainBoothListItem;
