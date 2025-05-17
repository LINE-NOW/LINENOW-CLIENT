import useSingupForm from "@pages/signup/_hooks/useSignupForm";

import {
  Button,
  InputText,
  InputTextContainer,
  Label,
} from "@linenow/core/components";
import React, { useState } from "react";

import { usePostRegistrationMessage } from "@hooks/apis/user";
import { useCountdown } from "@linenow/core/hooks";

// 유효시간 3분
const MAINTAIN_TIME = 1;
const getExpiredAt = () =>
  new Date(Date.now() + MAINTAIN_TIME * 60 * 1000).toISOString();

const SignupFormStepAuth = () => {
  const { register, values } = useSingupForm();

  const { mutateAsync: sendAuth, reset } = usePostRegistrationMessage();

  const sendAuthAgain = async () => {
    reset();
    await sendAuth(values.phonenumber);
    setExpiredAt(getExpiredAt());
  };

  const [expiredAt, setExpiredAt] = useState(getExpiredAt());

  const isExpired = new Date(expiredAt) < new Date();

  const { getString } = useCountdown({
    targetDate: expiredAt,
    timeoverAction: () => {},
  });

  const authInput: React.ComponentProps<"input"> = {
    placeholder: isExpired ? "유효시간이 만료되었어요." : "00000",
    required: true,
    pattern: "[0-9]*",
    maxLength: 5,
    inputMode: "numeric",
    autoComplete: "new-password",
    disabled: isExpired,
    ...register("authentication"),
  };

  return (
    <>
      {/* 인증번호 */}
      <InputTextContainer
        label="인증번호를 전송했어요."
        description={`입력하신 전화번호 ${values.phonenumber}로 인증번호를 전송했어요.
        전송된 인증번호 5자리를 입력해주세요`}
      >
        <InputText {...authInput}>
          <Label
            color="gray"
            children={isExpired ? "시간종료" : getString("MMSS")}
          />
        </InputText>
      </InputTextContainer>

      {isExpired && <Button onClick={sendAuthAgain}>인증 번호 재전송</Button>}
    </>
  );
};

export default React.memo(SignupFormStepAuth);
