import { Button } from "@linenow/core/components";
import { useMemo, useState } from "react";
import useForm, { TFromDataField } from "./useForm";

export interface Step<TFormData> {
  content: React.ReactNode;
  nextButtonProps: React.ComponentProps<typeof Button>;
  keys: (keyof TFormData)[];
}

export interface UseMultiFormProps<TFormData> {
  steps: Step<TFormData>[];
}

const useMultiForm = <TFormData extends TFromDataField>(
  props: UseMultiFormProps<TFormData>
) => {
  const { steps } = props;
  const form = useForm<TFormData>();

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const setNextStepIndex = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const setPrevStepIndex = () => {
    setCurrentStepIndex(currentStepIndex - 1);
  };

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

  return {
    ...form,
    nextButtonProps,
    CurrentContent,
    isStepValidate,
    setNextStepIndex,
    setPrevStepIndex,
  };
};

export default useMultiForm;
