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

const getSelectedBoothCardStyle = () => (theme: Theme) =>
  css`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: ${theme.maxWidth};
    z-index: 1; /* 플로팅 버튼보다 아래 */
    padding: 1rem;
    background-color: ${theme.backgroundColors.white};
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.05);
  `;

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
