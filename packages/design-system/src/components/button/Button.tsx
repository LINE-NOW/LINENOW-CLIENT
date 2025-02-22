import { getVariantStyle, Variant } from "../../styles/variant";
import * as S from "./Button.styled";

export type ButtonSize = "large" | "medium";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: ButtonSize;
}

const Button = (props: ButtonProps) => {
  const { variant = "blue", size = "large", children, ...buttonProps } = props;
  return (
    <S.ButtonWrapper
      css={[getVariantStyle(variant), S.getSizeStyle(size)]}
      {...buttonProps}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
