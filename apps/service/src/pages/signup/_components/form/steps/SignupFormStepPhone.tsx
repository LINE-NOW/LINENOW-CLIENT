import { SignupFormData } from "..";

import useForm from "../useForm";
import useSendAuth from "@pages/signup/_hooks/useSendAuth";

// components
import {
  Button,
  InputText,
  InputTextButton,
  InputTextContainer,
} from "@linenow/core/components";

// utils
import { formatPhonenumber } from "@utils/format";
import { css } from "@emotion/react";

const SignupFormStepPhone = () => {
  const { register, fieldRefs, getFieldIsError } = useForm<SignupFormData>();
  const handlePhonenumberOnInput = (e: React.FormEvent<HTMLInputElement>) => {
    const inputElement = e.currentTarget;
    inputElement.value = formatPhonenumber(inputElement.value);
  };

  // 인증번호 발급
  const {
    sendAuthMessage,
    value: authcode,
    isLoading: authIsLoading,
  } = useSendAuth();

  const onClickAuthButton = () => {
    if (!fieldRefs.phonenumber) return;

    const phonenumber = fieldRefs.phonenumber.value;
    sendAuthMessage(phonenumber);
  };

  const authButtonProps: React.ComponentProps<typeof Button> = {
    variant: authcode === "" ? "blueLight" : "outline",
    disabled: getFieldIsError("phonenumber"),
    onClick: authcode !== "" ? undefined : onClickAuthButton,
  };

  // 검증
  const phonenumberValidattion = (value: string) => {
    const phonePattern = /^010-\d{4}-\d{4}$/;
    return phonePattern.test(value) || "전화번호를 올바르게 작성해주세요";
  };

  const authValidation = (value: string) =>
    value === authcode || "올바른 인증번호를 입력해주세요";

  // props
  const authInputProps: React.ComponentProps<"input"> = {
    placeholder: "인증번호를 입력해주세요",
    required: true,
    pattern: "[0-9]*",
    maxLength: 6,
    inputMode: "numeric",
    autoComplete: "new-password",
    ...register("authentication", {
      rules: [authValidation],
    }),
  };

  const phonenumberInputProps: React.ComponentProps<"input"> = {
    placeholder: "010-1234-5678",
    onInput: handlePhonenumberOnInput,
    required: true,
    pattern: "[0-9-]*",
    maxLength: 13,
    inputMode: "numeric",
    ...register("phonenumber", {
      rules: [phonenumberValidattion],
    }),
  };

  return (
    <>
      <InputTextContainer
        label="전화번호"
        description={`기입하신 전화번호로 고객님께 대기 관련 문자 메세지가 전송됩니다.
                          신중하게 입력해주세요.`}
      >
        {/* 전화번호 */}
        <InputTextButton button={authButtonProps} {...phonenumberInputProps} />

        {/* 인증번호 */}
        {authIsLoading && <LoadingView />}
        {authcode !== "" && <InputText {...authInputProps} />}
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
