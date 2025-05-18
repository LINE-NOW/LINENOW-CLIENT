import * as S from "./MainMap.styled";
import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";

import BoothThumbnailBadge, {
  BoothThumbnailBadgeProps,
} from "@components/booth/BoothThumbnailBadge";
import useBoothListData from "@pages/main/_hooks/useBoothListData";
import { Switch } from "@linenow/core/components";
import useMainViewType from "@pages/main/_hooks/useMainViewType";
import { FestivalLocation, MyLocationButton } from "./MainLocationButton";
import RefetchButton from "@components/refetchButton/RefetchButton";
import { ROUTE } from "@constants/route";

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
  const { mainViewTypeSwitchProps } = useMainViewType();

  if (selectedBoothId === null || currentBooths.length === 0)
    return (
      <div css={S.getFloatingButtonWrapperStyle("list")}>
        <Switch
          css={S.getFloatingButtonStyle("switch", "list")}
          {...mainViewTypeSwitchProps}
        />
        <MyLocationButton
          css={S.getFloatingButtonStyle("my_location", "list")}
        />
        <FestivalLocation
          css={S.getFloatingButtonStyle("festival_location", "list")}
        />

        <RefetchButton
          queries={[
            ["booths"],
            ["waitings-waiting"],
            ["booths-waiting"],
            ["booths-location"],
          ]}
          css={S.getFloatingButtonStyle("refetch", "list")}
        />
      </div>
    );

  const booth = currentBooths.find((b) => b.boothID === selectedBoothId);

  if (!booth) return null;

  const badgeProps: BoothThumbnailBadgeProps = { ...booth };
  return (
    <>
      <div css={S.getFloatingButtonWrapperStyle("map")}>
        <Switch
          css={S.getFloatingButtonStyle("switch", "map")}
          {...mainViewTypeSwitchProps}
        />
        <MyLocationButton
          css={S.getFloatingButtonStyle("my_location", "map")}
        />
        <FestivalLocation
          css={S.getFloatingButtonStyle("festival_location", "map")}
        />
        <RefetchButton
          queries={[
            ["booths"],
            ["waitings-waiting"],
            ["booths-waiting"],
            ["booths-location"],
          ]}
          css={S.getFloatingButtonStyle("refetch", "map")}
        />
      </div>
      <Link
        to={ROUTE.BOOTH_DETAIL(booth.boothID)}
        css={(theme) => css`
          ${getSelectedBoothCardStyle()(theme)}
          ${getBoothListItemStyle()(theme)}
        `}
      >
        <BoothThumbnailBadge {...badgeProps} />
      </Link>
    </>
  );
};
