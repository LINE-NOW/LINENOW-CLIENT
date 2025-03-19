import useForm from "../useForm";
import { SignupFormData } from "..";

import { InputText, InputTextContainer } from "@linenow/core/components";

const SignupFormStepName = () => {
  const { register } = useForm<SignupFormData>();

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
