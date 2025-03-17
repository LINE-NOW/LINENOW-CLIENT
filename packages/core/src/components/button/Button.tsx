import { Children } from "react";
import { getVariantStyle, Variant } from "../../styles/variant";
import * as S from "./Button.styled";

export type ButtonSize = "large" | "medium";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: ButtonSize;
  width?: string;
}

const Button = (props: ButtonProps) => {
  const {
    variant = "blue",
    size = "large",
    width = "100%",
    children,
    onClick,
    ...buttonProps
  } = props;

  const childCount = Children.count(children);

  return (
    <button
      css={[
        getVariantStyle(variant),
        S.getSizeStyle(size, width),
        S.getAlignStyle(childCount),
        onClick && S.getAnimation(),
      ]}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
