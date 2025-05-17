import useSingupForm from "@pages/signup/_hooks/useSignupForm";

//components
import { Button, Flex } from "@linenow/core/components";

import BottomButton from "@components/bottomButton/BottomButton";

const SingupForm = () => {
  const { CurrentContent, nextButtonProps, submitForm } = useSingupForm();

  return (
    <Flex
      as="form"
      direction="column"
      gap="2rem"
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
export default SingupForm;
