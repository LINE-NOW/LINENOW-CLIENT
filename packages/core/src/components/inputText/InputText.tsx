import * as S from "./InputText.styled";

import Label from "../label/Label";
import Icon from "../icon/Icon";
import { CommonButton } from "../buttonExtension/ButtonExtension";

type IconButtonProps = React.ComponentProps<typeof Icon> &
  React.ComponentProps<typeof CommonButton>;

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  label?: string;
  rightIconButton?: IconButtonProps;
  errorMessage?: string;
}

const InputText = (props: InputTextProps) => {
  const {
    width = "100%",
    label,
    rightIconButton,
    errorMessage,
    type = "text",
    ...inputProps
  } = props;
  return (
    <section css={[S.getWrapperStyle(width)]}>
      {label && (
        <Label font="head3" color="blue" css={S.getLabelStyle()}>
          {label}
        </Label>
      )}

      <label css={[S.getInputTextFieldStyle()]}>
        <input
          type={type}
          placeholder={props.placeholder}
          css={S.getInputStyle()}
          {...inputProps}
        />

        {rightIconButton && (
          <CommonButton onClick={rightIconButton.onClick}>
            <Icon {...rightIconButton} />
          </CommonButton>
        )}
      </label>

      {errorMessage && (
        <Label font="caption" css={S.getErrorLabelStyle()}>
          {errorMessage}
        </Label>
      )}
    </section>
  );
};

export default InputText;
