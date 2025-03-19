import useForm from "./useForm";

//components
import SignupFormStepName from "./steps/SinupFormStepName";
import SignupFormStepPhone from "./steps/SignupFormStepPhone";
import SignupFormStepPassword from "./steps/SingupFormStepPassword";

import BottomButton from "@components/bottomButton/BottomButton";
import { Button } from "@linenow/core/components";

const SingupForm = () => {
  const { isFormValidate, submitFrom } = useForm();

  const SubmitButton = () => {
    return (
      <BottomButton>
        <Button type="submit" disabled={!isFormValidate} onClick={submitFrom}>
          회원가입하기
        </Button>
      </BottomButton>
    );
  };
  return (
    <>
      {/* form */}
      <SignupFormStepName />
      <SignupFormStepPhone />
      <SignupFormStepPassword />

      {/* submit */}
      <SubmitButton />
    </>
  );
};
export default SingupForm;
