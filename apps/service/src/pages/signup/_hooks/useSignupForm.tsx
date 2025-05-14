import { usePostRegistration } from "@hooks/apis/user";
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

  const { mutate: postRegistration } = usePostRegistration();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log();
    if (form.isFormValidate)
      postRegistration({
        name: form.values.name,
        phonenumber: form.values.phonenumber,
        smsCode: form.values.authentication,
        password: form.values.password,
        passwordConfirm: form.values.passwordConfirm,
      });
  };
  return { ...form, submitForm };
};

export default useSingupForm;
