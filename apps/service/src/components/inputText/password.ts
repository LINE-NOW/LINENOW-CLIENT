const passwordInputProps: React.ComponentProps<"input"> = {
  required: true,
  type: "password",
  pattern: "[0-9]*",
  maxLength: 6,
  inputMode: "numeric",
  autoComplete: "new-password",
};

export default passwordInputProps;
