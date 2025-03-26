// hookd
import useLoginForm from "@pages/login/_hooks/useLoginForm";

// components
import { InputText, InputTextContainer } from "@linenow/core/components";
import phoneInputProps from "@components/inputText/phone";
import passwordInputProps from "@components/inputText/password";

const LoginForm = () => {
  const { register } = useLoginForm();

  const phoneInput = {
    ...phoneInputProps,
    ...register("phone"),
  };

  const passwordInput = {
    placeholder: "비밀번호를 입력해주세요.",
    ...passwordInputProps,
    ...register("password"),
  };

  return (
    <>
      {/* 아이디 */}
      <InputTextContainer label="전화번호">
        <InputText {...phoneInput} />
      </InputTextContainer>

      {/* 비밀번호 */}
      <InputTextContainer label="비밀번호">
        <InputText {...passwordInput} />
      </InputTextContainer>
    </>
  );
};

export default LoginForm;
