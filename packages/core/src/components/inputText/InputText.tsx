import * as S from "./InputText.styled";

interface InputTextProps extends React.ComponentProps<"input"> {}

const InputText = (props: InputTextProps) => {
  const { type = "text", ...inputProps } = props;
  return (
    <label css={[S.getInputTextFieldStyle()]}>
      <input type={type} css={S.getInputStyle()} {...inputProps} />
    </label>
  );
};

export default InputText;
