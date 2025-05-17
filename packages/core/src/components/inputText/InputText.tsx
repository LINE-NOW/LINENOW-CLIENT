import Flex from "../flex/Flex";
import Label from "../label/Label";
import * as S from "./InputText.styled";

interface InputTextProps extends React.ComponentProps<"input"> {
  error?: string;
}

const InputText = (props: InputTextProps) => {
  const {
    type = "text",
    pattern,
    onInput,
    error,
    children,
    ...inputProps
  } = props;

  // 정규식에 맞게 입력을 받음
  const checkPattern = (e: React.FormEvent<HTMLInputElement>) => {
    const inputElement = e.currentTarget;
    const regex = new RegExp(`^${pattern}$`);

    if (!regex.test(inputElement.value)) {
      inputElement.value = inputElement.value.slice(0, -1);
      return;
    }
  };

  const handleOnInput = (e: React.FormEvent<HTMLInputElement>) => {
    pattern && checkPattern(e);
    onInput && onInput(e);
  };

  return (
    <Flex direction="column" gap="0.125rem" width="100%" flexShrink={1}>
      <label
        css={[
          S.getInputTextFieldStyle(),
          error && S.getInpuTextFieldErrorStyle(),
        ]}
      >
        <input
          type={type}
          css={S.getInputStyle()}
          onInput={handleOnInput}
          {...inputProps}
        />
        {children}
      </label>
      {error && (
        <Label font="caption" color="red" padding="0rem 0.25rem">
          {error}
        </Label>
      )}
    </Flex>
  );
};

export default InputText;
