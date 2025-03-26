// components
import SingupForm from "./_components/form/SignupForm";
import { SignupFormProvider } from "./_hooks/useSignupForm";

const SignupPage = () => {
  return (
    <SignupFormProvider>
      <SingupForm />
    </SignupFormProvider>
  );
};

export default SignupPage;
