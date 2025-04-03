import useSingupForm from "@pages/signup/_hooks/useSignupForm";

// components
import { InputText, InputTextContainer } from "@linenow/core/components";
import passwordInputProps from "@components/inputText/password";

const SignupFormStepPassword = () => {
  const { register, fieldRefs } = useSingupForm();

  // 검증
  const passwordValidation = (value: string) =>
    value.length === 6 || "비밀번호를 6자리 이상 입력해주세요";

  const passwordConfirmValidation = (value: string) => {
    if (!fieldRefs.password) return "오류가 발생했습니다.";

    const password = fieldRefs.password.value;
    if (password.length !== 6) return true;
    return password === value || "비밀번호가 일치하지 않아요!";
  };

  // props
  const passwordInput = {
    placeholder: "비밀번호를 입력해주세요",
    ...passwordInputProps,
    ...register("password", {
      rules: [passwordValidation],
    }),
  };

  const passwordConfirm = {
    placeholder: "비밀번호를 다시 입력해주세요",
    ...passwordInputProps,
    ...register("passwordConfirm", {
      rules: [passwordConfirmValidation],
    }),
  };

  return (
    <>
      {/* 비밀번호 */}
      <InputTextContainer
        label="비밀번호"
        description={`6자 숫자를 입력해주세요.`}
      >
        <InputText {...passwordInput} />
        <InputText {...passwordConfirm} />
      </InputTextContainer>
    </>
  );
};

export default SignupFormStepPassword;
