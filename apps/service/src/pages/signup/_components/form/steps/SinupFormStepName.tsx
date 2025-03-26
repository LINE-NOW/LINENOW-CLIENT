import useSingupForm from "@pages/signup/_hooks/useSignupForm";

import { InputText, InputTextContainer } from "@linenow/core/components";

const SignupFormStepName = () => {
  const { register } = useSingupForm();

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
    </>
  );
};

export default SignupFormStepName;
