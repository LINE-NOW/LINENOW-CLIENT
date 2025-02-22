import { CommonButton } from "@components/button/ButtonExtension";
import * as S from "./InputText.styled";
import Icon, { IconProps } from "@components/icon/Icon";

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  label?: string;
  rightIcon?: IconProps;
  errorMessage?: string;
  rightIconClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const InputText = ({
  width = "100%",
  label,
  rightIcon,
  rightIconClick,
  errorMessage,
  type = "text",
  ...props
}: InputTextProps) => {
  return (
    <S.InputTextWrapper $width={width}>
      {label && <S.InputTextLable>{label}</S.InputTextLable>}

      <S.InputTextField>
        <input type={type} placeholder={props.placeholder} {...props} />

        {rightIcon && (
          <CommonButton onClick={rightIconClick}>
            <Icon {...rightIcon} />
          </CommonButton>
        )}
      </S.InputTextField>
      {errorMessage && (
        <S.InputTextErrorLable>{errorMessage}</S.InputTextErrorLable>
      )}
    </S.InputTextWrapper>
  );
};

export default InputText;
