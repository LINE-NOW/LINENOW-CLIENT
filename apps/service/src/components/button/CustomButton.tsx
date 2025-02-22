import IconLabel, { IconLabelProps } from "@components/label/IconLabel";
import * as S from "./CustomButton.styled";
import { Link } from "react-router-dom";
import Chip, { ChipProps } from "@components/chip/Chip";

interface CommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface LinkButtonProps {
  to: string;
}

// IconButton
interface IconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  iconSize: string;
  // touchSize?: string;
}

type IconLinkButtonProps = IconProps & LinkButtonProps;
export const IconLinkButton = ({ to, icon, iconSize }: IconLinkButtonProps) => {
  return (
    <Link to={to}>
      <S.IconButtonWrapper $iconSize={iconSize}>
        <img src={`/icons/icon_${icon}.svg`} />
      </S.IconButtonWrapper>
    </Link>
  );
};

type IconButtonProps = IconProps & CommonButtonProps;
export const IconButton = ({
  onClick,
  icon,
  iconSize,
  ...props
}: IconButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
      <S.IconButtonWrapper $iconSize={iconSize}>
        <img src={`/icons/icon_${icon}.svg`} />
      </S.IconButtonWrapper>
    </button>
  );
};

type IconLableLinkButtonProps = IconLabelProps & LinkButtonProps;
export const IconLabelLinkButton = ({
  to,
  ...props
}: IconLableLinkButtonProps) => {
  return (
    <Link to={to}>
      <IconLabel {...props} />
    </Link>
  );
};

// ChipButton
type ChipButtonProps = ChipProps & CommonButtonProps;
export const ChipButton = ({
  disabled,
  onClick,
  ...props
}: ChipButtonProps) => {
  return (
    <S.CustomButtonWrapper onClick={onClick} {...props}>
      <Chip scheme={disabled ? "grayLight" : props.scheme} {...props} />
    </S.CustomButtonWrapper>
  );
};
