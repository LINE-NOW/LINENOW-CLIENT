import { Link } from "react-router-dom";
import * as S from "./ButtonExtension.styled";
import Label from "../label/Label";

interface CommonButtonProps extends React.ComponentProps<"button"> {}

interface LinkButtonProps extends React.ComponentProps<typeof Link> {
  disabled?: boolean;
}

export const LinkButton = (props: LinkButtonProps) => {
  const { to, children, disabled = false } = props;
  return (
    <Link to={to} css={disabled || S.getAnimation()}>
      {children}
    </Link>
  );
};

export const CommonButton = (props: CommonButtonProps) => {
  const { onClick, children, disabled, ...buttonProps } = props;
  return (
    <button
      css={(onClick && disabled) || S.getAnimation()}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export const TextButton = (props: CommonButtonProps) => {
  const {
    onClick,
    children,
    disabled,
    type = "button",
    ...buttonProps
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      css={[S.getButtonStyle(), onClick && S.getAnimation()]}
      {...buttonProps}
    >
      <Label font="button2" color="gray" css={[S.getTextButtonStyle()]}>
        {children}
      </Label>
    </button>
  );
};
