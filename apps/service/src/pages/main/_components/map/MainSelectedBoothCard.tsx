import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useBoothList } from "../boothList/useBoothList";
import BoothThumbnailBadge, {
  BoothThumbnailBadgeProps,
} from "@components/booth/BoothThumbnailBadge";

const getBoothListItemStyle = () => (theme: Theme) =>
  css`
    padding: 0.75rem 1.25rem 1rem 1.25rem;
    background-color: ${theme.backgroundColors.white};

    &:hover {
      box-shadow: none;
      border-radius: 0.5rem;
    }
  `;

const getSelectedBoothCardStyle = () => (theme: Theme) =>
  css`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: ${theme.maxWidth};
    z-index: 1;
    padding: 1rem;
    background-color: ${theme.backgroundColors.white};
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.05);
  `;

type Props = {
  selectedBoothId: number | null;
};

export const SelectedBoothCard = ({ selectedBoothId }: Props) => {
  const { booths, currentWaitings } = useBoothList();

  if (!selectedBoothId || booths.length === 0) return null;

  const booth = booths.find((b) => b.boothID === selectedBoothId);
  const waiting = currentWaitings[selectedBoothId];

  if (!booth || !waiting) return null;

  const badgeProps: BoothThumbnailBadgeProps = {
    ...booth,
    ...waiting,
  };

  return (
    <Link
      to={`/booth/${booth.boothID}`}
      css={(theme) => css`
        ${getSelectedBoothCardStyle()(theme)}
        ${getBoothListItemStyle()(theme)}
      `}
    >
      <BoothThumbnailBadge {...badgeProps} />
    </Link>
  );
};
