import LoginForm from "./_components/form/LoginForm";
import { LoginFormProvider } from "./_hooks/useLoginForm";

const LoginPage = () => {
  return (
    <LoginFormProvider>
      <LoginForm />
    </LoginFormProvider>
  );
};
export default LoginPage;
