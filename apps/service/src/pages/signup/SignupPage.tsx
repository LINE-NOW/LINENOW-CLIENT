import { Flex } from "@linenow/core/components";

import { FormProvider } from "./_components/form/useForm";

import SingupForm from "./_components/form/SignupForm";
import { SignupFormData } from "./_components/form";
import SignupFormButton from "./_components/form/SignupFormButton";

const SignupPage = () => {
  return (
    <FormProvider<SignupFormData>
      useFormProps={{
        initialValues: {
          name: "",
          phonenumber: "",
          authentication: "",
          password: "",
          passwordConfirm: "",
        },
      }}
    >
      <Flex as="form" direction="column" gap="2rem" padding="1.25rem">
        <SingupForm />
        <SignupFormButton />
      </Flex>
    </FormProvider>
  );
};

export default SignupPage;
