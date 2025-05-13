import { Button } from "@linenow/core/components";
import * as S from "./LoginPage.styled";
import LogoImg from "../../../public/icons/logo.svg";
import { useState } from "react";

import { usePostLogin } from "@hooks/apis/auth";
import LoginInput from "./components/LoginInput";

const MAX_LENGTH = 20;

const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");

  const { mutate: postLogin } = usePostLogin();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleLogin = () => {
    postLogin({ adminCode: inputValue });
  };

  return (
    <>
      <S.LoginWrapper>
        <S.LoginLogo src={LogoImg} />
        <S.LoginBoxWrapper>
          <S.LoginBoxContent>
            <S.LoginBoxTitle>관리자 로그인</S.LoginBoxTitle>
            <S.LoginBoxInputWrapper>
              <S.LoginBoxSubTitle>고유번호</S.LoginBoxSubTitle>
              <LoginInput
                value={inputValue}
                onChange={handleChange}
                maxLength={MAX_LENGTH}
                // TODO: placeholder 확인 필요
                placeholder="비밀번호를 입력해주세요"
              />
            </S.LoginBoxInputWrapper>
          </S.LoginBoxContent>
          <Button onClick={handleLogin}>로그인</Button>
        </S.LoginBoxWrapper>
      </S.LoginWrapper>
    </>
  );
};
export default LoginPage;
