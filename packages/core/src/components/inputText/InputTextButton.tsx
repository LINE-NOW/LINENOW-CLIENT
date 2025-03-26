import Button from "../button/Button";
import Flex from "../flex/Flex";
import InputText from "./InputText";

interface InputTextButtonProps extends React.ComponentProps<typeof InputText> {
  button?: React.ComponentProps<typeof Button>;
}

const InputTextButton = (props: InputTextButtonProps) => {
  const { button = {}, ...inputProps } = props;
  const { onClick, disabled = false, type = "button", ...buttonProps } = button;

  return (
    <Flex direction="row" gap="0.5rem" width="100%">
      <InputText {...inputProps} />
      <Button
        type={type}
        size="medium"
        variant="blueLight"
        width="6.25rem"
        disabled={disabled}
        onClick={onClick}
        {...buttonProps}
      >
        인증번호받기
      </Button>
    </Flex>
  );
};
export default InputTextButton;
