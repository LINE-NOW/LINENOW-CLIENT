import { ReactNode } from "react";
import { ButtonWrapper } from "@components/button/Button.styled";

// type
import { SchemeType, ShapeType } from "@linenow-types/style";

// 버튼의 크기 type
export type ButtonSizeType = "large" | "medium";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSizeType;
  width?: string;
  scheme?: SchemeType;
  shape?: ShapeType;
  children?: ReactNode;
}

const Button = ({
  disabled,
  onClick,
  size = "large",
  width = "100%",
  scheme = "blue",
  shape = "fill",
  children,

  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      disabled={disabled}
      $isDisabled={disabled}
      $size={size}
      $width={width}
      $scheme={scheme}
      $shape={shape}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
