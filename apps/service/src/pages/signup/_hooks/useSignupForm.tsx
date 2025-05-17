import {
  usePostRegistration,
  usePostRegistrationMessage,
} from "@hooks/apis/user";
import { SignupFormData } from "../_components/form";
import useForm, { FormProvider } from "@hooks/form/useForm";
import React, { useMemo, useState } from "react";

import { Button } from "@linenow/core/components";
import { useBottomSheet } from "@linenow/core/hooks";
import AgreeBottomSheetContent from "@components/bottomSheet/\bsignup/AgreeBottomSheetContent";
import SignupFormStepUser from "../_components/form/steps/SinupFormStepUser";
import SignupFormStepAuth from "../_components/form/steps/SinupFormStepAuth";

const initialValues: SignupFormData = {
  name: "",
  phonenumber: "",
  authentication: "",
  password: "",
  passwordConfirm: "",
};

type SignupFormProviderProps = React.PropsWithChildren;

export const SignupFormProvider = (props: SignupFormProviderProps) => {
  const { children } = props;
  return (
    <FormProvider<SignupFormData> useFormProps={{ initialValues }}>
      {children}
    </FormProvider>
  );
};

interface StepProps {
  content: React.ReactNode;
  nextButtonProps: React.ComponentProps<typeof Button>;
  keys: (keyof SignupFormData)[];
}

const useSingupForm = () => {
  const form = useForm<SignupFormData>();

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const setNextStepIndex = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const { mutateAsync: sendAuth } = usePostRegistrationMessage();
  const { mutate: postRegistration } = usePostRegistration();

  const { openBottomSheet } = useBottomSheet();

  const presentIndex1 = async () => {
    if (form.values.phonenumber === "") return;
    await sendAuth(form.values.phonenumber);
    setNextStepIndex();
  };

  const openAgreeBottomSheet = () => {
    openBottomSheet({
      children: <AgreeBottomSheetContent onClick={presentIndex1} />,
    });
  };

  const steps: StepProps[] = [
    {
      content: <SignupFormStepUser key={"user"} />,
      nextButtonProps: {
        children: "전화번호 인증하기",
        onClick: openAgreeBottomSheet,
      },
      keys: ["name", "phonenumber", "password", "passwordConfirm"],
    },
    {
      content: <SignupFormStepAuth key={"auth"} />,
      nextButtonProps: {
        type: "submit",
        children: "인증하기",
        onClick: () => {},
      },
      keys: ["authentication"],
    },
  ];

  const CurrentContent = useMemo(
    () => steps[currentStepIndex].content,
    [currentStepIndex]
  );
  const currentKeys = steps[currentStepIndex].keys;

  const isStepValidate = currentKeys.every((key) => {
    return !form.formState[key].isError;
  });

  const nextButtonProps: React.ComponentProps<typeof Button> = {
    disabled: !isStepValidate,
    ...steps[currentStepIndex].nextButtonProps,
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.isFormValidate)
      postRegistration({
        name: form.values.name,
        phonenumber: form.values.phonenumber,
        smsCode: form.values.authentication,
        password: form.values.password,
        passwordConfirm: form.values.passwordConfirm,
      });
  };

  return {
    ...form,
    nextButtonProps,
    CurrentContent,
    isStepValidate,
    submitForm,
  };
};

export default useSingupForm;
