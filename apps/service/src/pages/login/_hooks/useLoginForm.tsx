import { usePostLogin } from "@hooks/apis/user";
import useForm, { FormProvider } from "@hooks/form/useForm";

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

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.isFormValidate)
      postLogin({
        phonenumber: form.values.phonenumber,
        password: form.values.password,
      });
  };

  return {
    ...form,
    submitForm,
  };
};

export default useLoginForm;
