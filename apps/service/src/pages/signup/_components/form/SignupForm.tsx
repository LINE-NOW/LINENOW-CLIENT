import useSingupForm from "@pages/signup/_hooks/useSignupForm";

//components
import { Button, Flex } from "@linenow/core/components";
import BottomButton from "@components/bottomButton/BottomButton";
import SignupFormStepName from "./steps/SinupFormStepName";
import SignupFormStepPhone from "./steps/SignupFormStepPhone";
import SignupFormStepPassword from "./steps/SingupFormStepPassword";

const SingupForm = () => {
  const { isFormValidate, submitForm } = useSingupForm();

  return (
    <Flex
      as="form"
      direction="column"
      gap="2rem"
      padding="1.25rem"
      onSubmit={submitForm}
    >
      {/* form */}
      <SignupFormStepName />
      <SignupFormStepPhone />
      <SignupFormStepPassword />

      {/* submit */}
      <BottomButton>
        <Button type="submit" disabled={!isFormValidate} onClick={() => {}}>
          회원가입하기
        </Button>
      </BottomButton>
    </Flex>
  );
};
export default SingupForm;
