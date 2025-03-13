import { Link } from "react-router-dom";

import * as S from "./MainBoothList.styled";
import BoothThumbnailBadge, {
  BoothThumbnailBadgeProps,
} from "@components/booth/BoothThumbnailBadge";

export interface MainBoothListItemProps extends BoothThumbnailBadgeProps {
  isLast?: boolean;
}

const MainBoothListItem = (props: MainBoothListItemProps) => {
  const { isLast = false, ...booth } = props;
  return (
    <Link to={`/booth/${booth.boothID}`} css={S.getBoothListItemStyle(isLast)}>
      <BoothThumbnailBadge {...booth} />
    </Link>
  );
};

export default MainBoothListItem;
