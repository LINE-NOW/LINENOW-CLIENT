import BottomButton from "@components/bottomButton/BottomButton";
import useForm from "./useForm";
import { Button } from "@linenow/core/components";

const SignupFormButton = () => {
  const { isFormValidate, submitFrom } = useForm();
  return (
    <BottomButton>
      <Button type="submit" disabled={!isFormValidate} onClick={submitFrom}>
        회원가입하기
      </Button>
    </BottomButton>
  );
};

export default SignupFormButton;
