//components
import { Button, Flex } from "@linenow/core/components";

import BottomButton from "@components/bottomButton/BottomButton";
import useAuthForm from "../_hooks/useAuthForm";

const AuthForm = () => {
  const { CurrentContent, nextButtonProps, submitForm, setNextStepIndex } =
    useAuthForm();

  return (
    <Flex
      as="form"
      direction="column"
      gap="0.5rem"
      padding="1.25rem"
      onSubmit={submitForm}
    >
      {/* form */}
      {CurrentContent}

      <BottomButton>
        <Button {...nextButtonProps} />
      </BottomButton>
    </Flex>
  );
};
export default AuthForm;
