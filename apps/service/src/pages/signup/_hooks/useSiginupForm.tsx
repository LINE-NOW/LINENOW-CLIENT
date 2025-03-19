import { Button } from "@linenow/core/components";
import { SignupFormData } from "../_components/form";
import useForm from "../_components/form/useForm";

const useSignupForm = () => {
  const { submitFrom, isFormValidate } = useForm<SignupFormData>();

  const SubmitButton = () => {
    return (
      <Button type="submit" onClick={submitFrom} disabled={!isFormValidate}>
        회원가입하기
      </Button>
    );
  };

  return { SubmitButton };
};

export default useSignupForm;
