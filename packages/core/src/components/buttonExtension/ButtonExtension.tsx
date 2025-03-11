import { Link } from "react-router-dom";
import * as S from "./ButtonExtension.styled";

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
  const { onClick, children, disabled, ...buttonProps } = props;
  return (
    <button css={[S.getTextButtonStyle()]} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
};
