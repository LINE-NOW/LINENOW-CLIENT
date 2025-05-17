import Flex from "../flex/Flex";
import InputText from "./InputText";

interface InputTextButtonProps extends React.ComponentProps<typeof InputText> {
  // button?: React.ComponentProps<typeof Button>;
}

const InputTextButton = (props: InputTextButtonProps) => {
  const { children, ...inputProps } = props;
  // const { onClick, disabled = false, type = "button", ...buttonProps } = button;

  return (
    <Flex direction="row" gap="0.5rem" width="100%">
      <InputText {...inputProps} />
      {children}
    </Flex>
  );
};
export default InputTextButton;
