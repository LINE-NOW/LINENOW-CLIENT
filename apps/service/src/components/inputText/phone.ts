// phone
import { formatPhonenumber } from "@utils/format";

const handlePhonenumberOnInput = (e: React.FormEvent<HTMLInputElement>) => {
  const inputElement = e.currentTarget;
  inputElement.value = formatPhonenumber(inputElement.value);
};

const phoneInputProps: React.ComponentProps<"input"> = {
  type: "mobile tel",
  autoComplete: "tel",
  placeholder: "010-1234-5678",
  onInput: handlePhonenumberOnInput,
  required: true,
  pattern: "[0-9-]*",
  minLength: 13,
  maxLength: 13,
  inputMode: "numeric",
};

export default phoneInputProps;
