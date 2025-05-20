import AuthForm from "./_components/AuthForm";
import { AuthFormProvider } from "./_hooks/useAuthForm";

const AuthPage = () => {
  return (
    <AuthFormProvider>
      <AuthForm />
    </AuthFormProvider>
  );
};

export default AuthPage;
