import { Icon, InputText } from "@linenow/core/components";
import * as S from "./LoginInput_styled";
import { useState } from "react";

interface LoginInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
  placeholder: string;
}

const LoginInput = ({
  value,
  onChange,
  maxLength = 20,
  placeholder = "",
}: LoginInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPw = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <S.LoginInputWrapper>
      <InputText
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      <S.LoginInputIcon onClick={onShowPw}>
        <Icon
          icon={showPassword ? "eye_open" : "eye_close"}
          color="grayLight"
        />
      </S.LoginInputIcon>
    </S.LoginInputWrapper>
  );
};

export default LoginInput;
