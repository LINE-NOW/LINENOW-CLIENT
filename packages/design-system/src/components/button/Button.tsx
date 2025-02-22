import { getVarientStyle, Varient } from "../../styles/varient";
import * as S from "./Button.styled";

export type ButtonSize = "large" | "medium";

interface ButtonProps extends React.PropsWithChildren {
  variant?: Varient;
  size?: ButtonSize;
}

const Button = (props: ButtonProps) => {
  const { variant = "blue", size = "large", children } = props;
  return (
    <S.ButtonWrapper css={[getVarientStyle(variant), S.getSizeStyle(size)]}>
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
