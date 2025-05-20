import phoneInputProps from "@components/inputText/phone";
import { InputText, InputTextContainer } from "@linenow/core/components";
import useAuthForm from "../_hooks/useAuthForm";
import PageTitle from "@components/title/PageTitle";

const AuthFormPhonenumber = () => {
  const { register } = useAuthForm();

  const phonenumberValidation = (value: string) => {
    const phonePattern = /^010-\d{4}-\d{4}$/;
    return phonePattern.test(value) || "전화번호를 올바르게 작성해주세요";
  };

  const phoneInput: React.ComponentProps<"input"> = {
    ...phoneInputProps,
    ...register("phonenumber", {
      rules: [phonenumberValidation],
    }),
  };

  return (
    <>
      <PageTitle
        title={"전화번호를 입력해주세요"}
        description={`대기 알림 문자는 입력하신 전화번호로 보내드려요.\n정확한 번호를 입력해주세요!`}
      />
      <InputTextContainer>
        <InputText {...phoneInput} />
      </InputTextContainer>
    </>
  );
};
export default AuthFormPhonenumber;
