import { usePostLogin } from "@hooks/apis/user";
import useForm, { FormProvider } from "@hooks/form/useForm";
import { Button } from "@linenow/core/components";

export interface LoginFormData {
  phonenumber: string;
  password: string;
}

const initialValues: LoginFormData = {
  phonenumber: "",
  password: "",
};

type LoginFormProviderProps = React.PropsWithChildren;

export const LoginFormProvider = (props: LoginFormProviderProps) => {
  const { children } = props;
  return (
    <FormProvider<LoginFormData> useFormProps={{ initialValues }}>
      {children}
    </FormProvider>
  );
};

const useLoginForm = () => {
  const form = useForm<LoginFormData>();
  const { mutate: postLogin } = usePostLogin();

  const submitForm = () => {
    if (form.isFormValidate)
      postLogin({
        phonenumber: form.values.phonenumber,
        password: form.values.password,
      });
  };

  // submit button
  const SubmitButton = () => (
    <Button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        submitForm();
      }}
      disabled={!form.isFormValidate}
    >
      로그인하기
    </Button>
  );

  return {
    ...form,
    SubmitButton,
  };
};

export default useLoginForm;
