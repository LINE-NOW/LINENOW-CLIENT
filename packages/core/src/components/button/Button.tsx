import { Children } from "react";
import { getVariantStyle, Variant } from "../../styles/variant";
import * as S from "./Button.styled";

export type ButtonSize = "large" | "medium";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: ButtonSize;
  width?: string;
}

const Button = ({
  variant = "blue",
  size = "large",
  width = "100%",
  children,
  ...buttonProps
}: ButtonProps) => {
  const childCount = Children.count(children);
  return (
    <S.ButtonWrapper
      css={[
        getVariantStyle(variant),
        S.getSizeStyle(size, width),
        S.getAlignStyle(childCount),
      ]}
      {...buttonProps}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
