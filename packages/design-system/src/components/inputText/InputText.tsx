import * as S from "./InputText.styled";

import Label from "../label/Label";
import Icon from "../icon/Icon";

type IconProps = React.ComponentProps<typeof Icon>;

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  label?: string;
  rightIcon?: IconProps;
  errorMessage?: string;
  rightIconClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const InputText = (props: InputTextProps) => {
  const {
    width = "100%",
    label,
    rightIcon,
    rightIconClick,
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

      <S.InputTextField>
        <input
          type={type}
          placeholder={props.placeholder}
          css={S.getInputStyle()}
        />

        {rightIcon && (
          // TODO:- button component화 필요
          <button onClick={rightIconClick}>
            <Icon {...rightIcon} />
          </button>
        )}
      </S.InputTextField>
      {errorMessage && (
        <Label font="caption" css={S.getErrorLabelStyle()}>
          {label}
        </Label>
      )}
    </section>
  );
};

export default InputText;
