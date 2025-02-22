import * as S from "./LoginPage.styled";
import InputText from "@components/inputText/InputText";
import useForm from "@hooks/useForm";
import Button from "@components/button/Button";

import {
  initialLoginValues,
  LoginFormValues,
  loginValidateConfigs,
} from "./LoginValidateConfig";
import validateConfigs from "@utils/validateConfig";
import { usePostLogin } from "@hooks/apis/auth";

const LoginPage = () => {
  const getErrors = (values: LoginFormValues) => {
    const errors = validateConfigs(loginValidateConfigs, values);
    return errors;
  };

  const { mutate: postLogin } = usePostLogin();

  const handleSubmitButton = () => {
    postLogin({ username: values.phonenumber, password: values.password });
  };

  const { values, errors, isValid, handleChange } = useForm<LoginFormValues>({
    initialValues: initialLoginValues,
    getErrors,
  });

  const getInputTextProps = (key: keyof LoginFormValues) => {
    return {
      name: key,
      onChange: handleChange,
      regex: loginValidateConfigs[key].regex,
      minLength: loginValidateConfigs[key].minLength,
      maxLength: loginValidateConfigs[key].maxLength,
      errorMessage: errors[key],
      valu: values[key],
    };
  };

  return (
    <S.LoginPageWrapper>
      <S.LoginPageTextInputWrapper>
        <InputText
          {...getInputTextProps("phonenumber")}
          label="전화번호"
          placeholder="01012345678"
          onChange={handleChange}
        />
        <InputText
          {...getInputTextProps("password")}
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        />
      </S.LoginPageTextInputWrapper>
      <Button disabled={!isValid} onClick={handleSubmitButton}>
        로그인 하기
      </Button>
    </S.LoginPageWrapper>
  );
};
export default LoginPage;
