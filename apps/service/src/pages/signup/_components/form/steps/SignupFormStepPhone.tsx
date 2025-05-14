import useSingupForm from "@pages/signup/_hooks/useSignupForm";
import useSendAuth from "@pages/signup/_hooks/useSendAuth";

// components
import {
  Button,
  InputText,
  InputTextButton,
  InputTextContainer,
} from "@linenow/core/components";
import phoneInputProps from "@components/inputText/phone";

// utils
import { css } from "@emotion/react";

const SignupFormStepPhone = () => {
  const { register, fieldRefs, getFieldIsError } = useSingupForm();

  // 인증번호 발급
  const {
    sendAuthMessage,
    isLoading: authIsLoading,
    isCompleted,
  } = useSendAuth();

  const onClickAuthButton = () => {
    if (!fieldRefs.phonenumber) return;
    const phonenumber = fieldRefs.phonenumber.value;
    sendAuthMessage(phonenumber);
  };

  const authButtonProps: React.ComponentProps<typeof Button> = {
    variant: isCompleted ? "outline" : "blueLight",
    disabled: getFieldIsError("phonenumber"),
    onClick: isCompleted ? undefined : onClickAuthButton,
  };

  // 검증
  const phonenumberValidation = (value: string) => {
    const phonePattern = /^010-\d{4}-\d{4}$/;
    return phonePattern.test(value) || "전화번호를 올바르게 작성해주세요";
  };

  // props
  const phoneInput: React.ComponentProps<"input"> = {
    ...phoneInputProps,
    disabled: isCompleted,
    ...register("phonenumber", {
      rules: [phonenumberValidation],
    }),
  };

  const authInput: React.ComponentProps<"input"> = {
    placeholder: "인증번호를 입력해주세요",
    required: true,
    pattern: "[0-9]*",
    maxLength: 6,
    inputMode: "numeric",
    autoComplete: "new-password",
    ...register("authentication"),
  };

  return (
    <>
      <InputTextContainer
        label="전화번호"
        description={`기입하신 전화번호로 고객님께 대기 관련 문자 메세지가 전송됩니다.
                          신중하게 입력해주세요.`}
      >
        {/* 전화번호 */}
        <InputTextButton button={authButtonProps} {...phoneInput} />

        {/* 인증번호 */}
        {authIsLoading && <LoadingView />}
        {isCompleted && <InputText {...authInput} />}
      </InputTextContainer>
    </>
  );
};

export default SignupFormStepPhone;

const LoadingView = () => {
  return <div css={getLoadingViewStyle()} />;
};

const getLoadingViewStyle = () => css`
  border-radius: 0.5rem;
  width: 100%;
  height: 2.75rem;

  background: linear-gradient(90deg, #f0f2f8 15%, #fbfcff 50%, #f0f2f8 55%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite linear;

  @keyframes skeleton-loading {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`;
