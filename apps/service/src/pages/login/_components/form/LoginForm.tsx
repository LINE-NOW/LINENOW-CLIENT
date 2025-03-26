// hookd
import useLoginForm from "@pages/login/_hooks/useLoginForm";

// components
import {
  Button,
  ButtonLayout,
  Flex,
  InputText,
  InputTextContainer,
  TextButton,
} from "@linenow/core/components";
import phoneInputProps from "@components/inputText/phone";
import passwordInputProps from "@components/inputText/password";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, isFormValidate } = useLoginForm();

  // submit button
  const SubmitButton = () => (
    <Button type="submit" disabled={!isFormValidate}>
      로그인하기
    </Button>
  );

  // signupButton
  const onClickSignupButton = () => {
    navigate("/signup");
  };

  // input props
  const phoneInput = {
    ...phoneInputProps,
    ...register("phone"),
  };

  const passwordInput = {
    placeholder: "비밀번호를 입력해주세요.",
    ...passwordInputProps,
    ...register("password"),
  };

  return (
    <Flex
      as="form"
      width="100%"
      direction="column"
      gap="2rem"
      padding="1.5rem 1.25rem 0rem 1.25rem"
    >
      <Flex direction="column" gap="1rem" width="100%">
        {/* 아이디 */}
        <InputTextContainer label="전화번호">
          <InputText {...phoneInput} />
        </InputTextContainer>

        {/* 비밀번호 */}
        <InputTextContainer label="비밀번호">
          <InputText {...passwordInput} />
        </InputTextContainer>
      </Flex>

      {/* 제출 */}
      <ButtonLayout colGap="0.75rem">
        <SubmitButton />
        <TextButton onClick={onClickSignupButton}>회원가입하기</TextButton>
      </ButtonLayout>
    </Flex>
  );
};

export default LoginForm;
