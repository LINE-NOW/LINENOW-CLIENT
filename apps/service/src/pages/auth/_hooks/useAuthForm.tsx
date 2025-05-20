import {
  usePostAuthenticate,
  usePostRegistration,
  usePostRegistrationMessage,
} from "@hooks/apis/user";
import { FormProvider } from "@hooks/form/useForm";
import useMultiForm, { Step } from "@hooks/form/useMultiForm";

import AuthFormPhonenumber from "../_components/AuthFormPhonenumber";
import AuthFormSMS from "../_components/AuthFormSMS";
import AuthFormName from "../_components/AuthFormName";
import { useBottomSheet } from "@linenow/core/hooks";
import AgreeBottomSheetContent from "@components/bottomSheet/\bsignup/AgreeBottomSheetContent";

interface AuthFormData {
  name: string;
  phonenumber: string;
  authentication: string;
}

const initialValues: AuthFormData = {
  name: "",
  phonenumber: "",
  authentication: "",
};

type AuthFormProviderProps = React.PropsWithChildren;

export const AuthFormProvider = (props: AuthFormProviderProps) => {
  const { children } = props;

  return (
    <FormProvider<AuthFormData> useFormProps={{ initialValues }}>
      {children}
    </FormProvider>
  );
};

const useAuthForm = () => {
  const { mutateAsync: postAuthenticate } = usePostAuthenticate();
  const { mutateAsync: postSMS } = usePostRegistrationMessage();
  const { mutate: postRegistration } = usePostRegistration();

  const { openBottomSheet } = useBottomSheet();
  const openAgreeBottomSheet = () => {
    openBottomSheet({
      children: <AgreeBottomSheetContent onClick={handleAuth} />,
    });
  };

  const handleLogin = async () => {
    // 회원인 경우 로그인 진행
    // 회원이 아닐 경우 다음 단계로 넘어감 (회원 가입)
    try {
      await postAuthenticate({
        phonenumber: form.values.phonenumber,
        smsCode: form.values.authentication,
      });
    } catch (e: any) {
      const error = e as Error;

      console.log(error.message);
      const isGuest = error.message === "IS_GUEST";
      if (isGuest) {
        console.log("로그인");
        form.setNextStepIndex();
      }
    }
  };

  const handleAuth = async () => {
    if (form.values.phonenumber) {
      await postSMS(form.values.phonenumber);
      form.setNextStepIndex();
    }
  };

  const handleSingup = async () => {
    console.log(form.isFormValidate);
    if (form.values.name) {
      postRegistration({
        name: form.values.name,
        phonenumber: form.values.phonenumber,
      });
    }
  };

  const steps: Step<AuthFormData>[] = [
    {
      content: <AuthFormPhonenumber />,
      nextButtonProps: {
        children: "전화번호 인증하기",
        onClick: openAgreeBottomSheet,
      },
      keys: ["phonenumber"],
    },
    {
      content: <AuthFormSMS />,
      nextButtonProps: { children: "확인", onClick: handleLogin },
      keys: ["authentication"],
    },
    {
      content: <AuthFormName />,
      nextButtonProps: {
        variant: "lime",
        children: "회원가입 완료하기",
        onClick: handleSingup,
      },
      keys: ["name"],
    },
  ];

  const form = useMultiForm<AuthFormData>({ steps });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return {
    ...form,
    submitForm,
  };
};

export default useAuthForm;
