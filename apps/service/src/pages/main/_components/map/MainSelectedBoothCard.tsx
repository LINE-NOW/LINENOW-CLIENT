import { useAtomValue } from "jotai";
import { css } from "@emotion/react";
import { selectedBoothAtom } from "@pages/main/_atom/selectedBooth";
import BoothThumbnailBadge, {
  BoothThumbnailBadgeProps,
} from "@components/booth/BoothThumbnailBadge";
import { Link } from "react-router-dom";
import { Theme } from "@emotion/react";
import { useBoothList } from "../boothList/useBoothList";

const getBoothListItemStyle = () => (theme: Theme) => {
  return css`
    padding: 0.75rem 1.25rem 1rem 1.25rem;

    background-color: ${theme.backgroundColors.white};

    &:hover {
      box-shadow: none;
      border-radius: 0.5rem;
    }
  `;
};

export const SelectedBoothCard = () => {
  const selectedBoothID = useAtomValue(selectedBoothAtom);
  const { booths, currentWaitings } = useBoothList();

  if (!selectedBoothID || booths.length === 0) return null;

  const booth = booths.find((b) => b.boothID === selectedBoothID);
  const waiting = currentWaitings[selectedBoothID];

  if (!booth || !waiting) return null;

  const badgeProps: BoothThumbnailBadgeProps = {
    ...booth,
    ...waiting,
  };

  return (
    <Link to={`/booth/${booth.boothID}`} css={() => getBoothListItemStyle()}>
      <BoothThumbnailBadge {...badgeProps} />
    </Link>
  );
};
