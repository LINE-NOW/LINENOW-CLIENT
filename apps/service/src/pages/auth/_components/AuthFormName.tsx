import { InputText, InputTextContainer } from "@linenow/core/components";
import useAuthForm from "../_hooks/useAuthForm";
import PageTitle from "@components/title/PageTitle";

const AuthFormName = () => {
  const { register } = useAuthForm();

  return (
    <>
      <PageTitle
        title={"라인나우에 오신것을 환영해요!"}
        description={`회원 가입이 진행중이에요.\n사용자분의 성함을 입력해주세요`}
      />
      <InputTextContainer>
        <InputText
          required
          maxLength={12}
          placeholder="홍길동"
          {...register("name")}
        />
      </InputTextContainer>
    </>
  );
};
export default AuthFormName;
