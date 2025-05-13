import { SignupFormData } from "../_components/form";
import useForm, { FormProvider } from "@hooks/form/useForm";

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

const useSingupForm = () => {
  const form = useForm<SignupFormData>();
  const submitForm = () => {
    console.log("signup");
  };
  return { ...form, submitForm };
};

export default useSingupForm;
