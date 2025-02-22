import * as S from "./InputText.styled";
import Button, { ButtonProps } from "@components/button/Button";

interface InputTextButtonProps extends Omit<ButtonProps, "size" | "shape"> {}

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  label?: string;
  description?: string;
  currentCount?: number;
  count?: number;
  button?: InputTextButtonProps;
  regex?: RegExp;
  errorMessage?: string;
}

const InputText = ({
  width = "100%",
  label,
  description,
  currentCount,
  count,
  button,
  errorMessage,
  type = "text",
  regex,
  ...props
}: InputTextProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (regex) {
      const value = e.target.value;
      if (!regex.test(value)) {
        // 패턴에 맞지 않는 마지막 입력 제거
        e.target.value = value.slice(0, -1);
      }
    }
    props.onInput?.(e);
  };

  return (
    <S.InputTextWrapper $width={width}>
      {(label || description) && (
        <S.InputTextLabelWrapper>
          {label && <S.InputTextLabel>{label}</S.InputTextLabel>}
          {description && (
            <S.InputDescriptionLabel>{description}</S.InputDescriptionLabel>
          )}
        </S.InputTextLabelWrapper>
      )}

      <S.InputTextFiledWrapper>
        <S.InputTextField $disabled={props.disabled || false}>
          <input
            disabled={props.disabled}
            type={type}
            placeholder={props.placeholder}
            onInput={handleInput}
            {...props}
          />
        </S.InputTextField>
        {button && (
          <Button style={{ width: "auto" }} size="medium" {...button} />
        )}
      </S.InputTextFiledWrapper>

      {(errorMessage || count) && (
        <S.InputTextBottomLabelWrapper>
          {errorMessage && (
            <S.InputTextErrorLabel>{errorMessage}</S.InputTextErrorLabel>
          )}
          {count && (
            <S.InputTextCountLabel>
              {currentCount}/{count}
            </S.InputTextCountLabel>
          )}
        </S.InputTextBottomLabelWrapper>
      )}
    </S.InputTextWrapper>
  );
};

export default InputText;
