import useSingupForm from "@pages/signup/_hooks/useSignupForm";

import { InputText, InputTextContainer } from "@linenow/core/components";
import phoneInputProps from "@components/inputText/phone";
import SignupFormStepPassword from "./SingupFormStepPassword";

const SignupFormStepUser = () => {
  const { register } = useSingupForm();

  const phonenumberValidation = (value: string) => {
    const phonePattern = /^010-\d{4}-\d{4}$/;
    return phonePattern.test(value) || "전화번호를 올바르게 작성해주세요";
  };

  const phoneInput: React.ComponentProps<"input"> = {
    ...phoneInputProps,
    ...register("phonenumber", {
      rules: [phonenumberValidation],
    }),
  };

  return (
    <>
      {/* 이름 */}
      <InputTextContainer label="이름">
        <InputText
          required
          maxLength={12}
          placeholder="홍길동"
          {...register("name")}
        />
      </InputTextContainer>

      {/* 전화번호 */}
      <InputTextContainer
        label="전화번호"
        description={`기입하신 전화번호로 고객님께 대기 관련 문자 메세지가 전송됩니다.
                          신중하게 입력해주세요.`}
      >
        <InputText {...phoneInput} />
      </InputTextContainer>

      {/* 비밀번호 */}
      <SignupFormStepPassword />
    </>
  );
};

export default SignupFormStepUser;
