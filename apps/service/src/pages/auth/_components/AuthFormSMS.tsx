import {
  Button,
  InputText,
  InputTextContainer,
  Label,
} from "@linenow/core/components";

import useAuthForm from "../_hooks/useAuthForm";
import PageTitle from "@components/title/PageTitle";
import { usePostRegistrationMessage } from "@hooks/apis/user";
import { useState } from "react";
import { useCountdown } from "@linenow/core/hooks";

const MAINTAIN_TIME = 1;
const getExpiredAt = () =>
  new Date(Date.now() + MAINTAIN_TIME * 60 * 1000).toISOString();

const AuthFormSMS = () => {
  // 인증번호 유효시간을 저장
  const [expiredAt, setExpiredAt] = useState(getExpiredAt());
  const isExpired = new Date(expiredAt) < new Date();

  const { register, values } = useAuthForm();

  const { mutateAsync: sendAuth, reset } = usePostRegistrationMessage();

  const sendAuthAgain = async () => {
    reset();
    await sendAuth(values.phonenumber);
    setExpiredAt(getExpiredAt());
  };

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
      <PageTitle
        title={"인증번호를 입력해주세요"}
        description={`입력하신 전화번호로 인증번호를 전송했어요.\n전송된 인증번호 5자리를 입력해주세요`}
      />
      <InputTextContainer>
        <InputText {...authInput}>
          <Label
            color="gray"
            children={isExpired ? "시간종료" : getString("MMSS")}
          />
        </InputText>
      </InputTextContainer>

      {isExpired && (
        <Button onClick={sendAuthAgain} variant="grayLight">
          인증 번호 재전송
        </Button>
      )}
    </>
  );
};
export default AuthFormSMS;
