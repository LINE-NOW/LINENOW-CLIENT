import BottomButton from "@components/bottomButton/BottomButton";

import {
  Button,
  Flex,
  InputText,
  InputTextButton,
  InputTextContainer,
} from "@linenow/core/components";
import { formatPhonenumber } from "@utils/format";
import { SignupFormData } from "./_components/form";
import useForm from "./_components/form/useForm";
import { useToast } from "@linenow/core/hooks";
import useSendAuth from "./_hooks/useSendAuth";

const SignupPage = () => {
  const {
    values,
    fieldRefs,
    register,
    submitFrom,
    isFormValidate,
    getFieldIsError,
  } = useForm<SignupFormData>({
    initialValues: {
      name: "",
      phonenumber: "",
      authentication: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handlePhonenumberOnInput = (e: React.FormEvent<HTMLInputElement>) => {
    const inputElement = e.currentTarget;
    inputElement.value = formatPhonenumber(inputElement.value);
  };

  const { presentToast } = useToast();

  const presentCompletedSendingToast = () => {
    presentToast("인증 번호를 전송했습니다!");
  };

  const {
    sendAuthMessage,
    value: authcode,
    isLoading: authIsLoading,
  } = useSendAuth();

  const onClickAuthButton = () => {
    sendAuthMessage(values.phonenumber);
    presentCompletedSendingToast();
  };

  const AuthInput = () => {
    return (
      <InputText
        required
        pattern="[0-9]*"
        maxLength={6}
        inputMode="numeric"
        autoComplete="new-password"
        placeholder="인증번호를 입력해주세요"
        {...register("authentication", {
          rules: [
            (value) => value === authcode || "올바른 인증번호를 입력해주세요",
          ],
        })}
      />
    );
  };

  return (
    <Flex as="form" direction="column" gap="2rem" padding="1.25rem">
      {/* 이름 */}
      <InputTextContainer label="이름">
        <InputText
          required
          maxLength={12}
          placeholder="홍길동"
          {...register("name")}
        />
      </InputTextContainer>

      {/* 전화번호 */}
      <InputTextContainer
        label="전화번호"
        description={`기입하신 전화번호로 고객님께 대기 관련 문자 메세지가 전송됩니다.
                      신중하게 입력해주세요.`}
      >
        <InputTextButton
          required
          pattern="[0-9\-]*"
          maxLength={13}
          inputMode="numeric"
          placeholder="010-1234-5678"
          onInput={handlePhonenumberOnInput}
          button={{
            disabled: getFieldIsError("phonenumber"),
            onClick: onClickAuthButton,
          }}
          {...register("phonenumber", {
            rules: [
              (value) => {
                const phonePattern = /^010-\d{4}-\d{4}$/;
                return (
                  phonePattern.test(value) || "전화번호를 올바르게 작성해주세요"
                );
              },
            ],
          })}
        />

        {authIsLoading && <div>로딩중</div>}
        {authcode !== "" && <AuthInput />}
      </InputTextContainer>

      {/* 비밀번호 */}
      <InputTextContainer
        label="비밀번호"
        description={`6자 숫자를 입력해주세요.`}
      >
        <InputText
          required
          type="password"
          pattern="[0-9]*"
          maxLength={6}
          inputMode="numeric"
          autoComplete="new-password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password", {
            rules: [
              (value) =>
                value.length === 6 || "인증번호를 6자리 이상 입력해주세요",
            ],
          })}
        />
        <InputText
          required
          type="password"
          pattern="[0-9]*"
          maxLength={6}
          inputMode="numeric"
          autoComplete="new-password"
          placeholder="비밀번호를 다시 입력해주세요"
          {...register("passwordConfirm", {
            rules: [
              (value) => {
                if (!fieldRefs.password) return "오류가 발생했습니다.";
                const password = fieldRefs.password.value;
                if (password.length !== 6) return true;
                return password !== value || "비밀번호가 일치하지 않아요!";
              },
            ],
          })}
        />
      </InputTextContainer>

      <BottomButton>
        <Button type="button" onClick={submitFrom} disabled={!isFormValidate}>
          회원가입하기
        </Button>
      </BottomButton>
    </Flex>
  );
};

export default SignupPage;
