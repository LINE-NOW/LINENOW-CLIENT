import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";

import BoothThumbnailBadge, {
  BoothThumbnailBadgeProps,
} from "@components/booth/BoothThumbnailBadge";
import useBoothListData from "@pages/main/_hooks/useBoothListData";

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
  const { currentBooths } = useBoothListData();

  if (!selectedBoothId || currentBooths.length === 0) return null;

  const booth = currentBooths.find((b) => b.boothID === selectedBoothId);

  if (!booth) return null;

  const badgeProps: BoothThumbnailBadgeProps = {
    ...booth,
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
