import { Link } from "react-router-dom";

import * as S from "./MainBoothList.styled";
import BoothThumbnailBadge, {
  BoothThumbnailBadgeProps,
} from "@components/booth/BoothThumbnailBadge";
import { ROUTE } from "@constants/route";

export interface MainBoothListItemProps extends BoothThumbnailBadgeProps {}

const MainBoothListItem = (props: MainBoothListItemProps) => {
  const { ...booth } = props;
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
