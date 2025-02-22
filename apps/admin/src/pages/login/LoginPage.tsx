import { Button, InputPassword } from "@linenow/design-system";
import * as S from "./LoginPage.styled";
import LogoImg from "../../../public/icons/logo.svg";
import { useState } from "react";

import { usePostLogin } from "@hooks/apis/auth";

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
              <InputPassword
                value={inputValue}
                onChange={handleChange}
                maxLength={MAX_LENGTH}
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
