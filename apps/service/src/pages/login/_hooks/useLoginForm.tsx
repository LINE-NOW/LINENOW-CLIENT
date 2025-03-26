import useForm, { FormProvider } from "@hooks/form/useForm";

export interface LoginFormData {
  phone: string;
  password: string;
}

const initialValues: LoginFormData = {
  phone: "",
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
  return useForm<LoginFormData>();
};

export default useLoginForm;
