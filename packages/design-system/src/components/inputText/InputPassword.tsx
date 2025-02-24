// InputPassword.tsx
import { useState } from "react";

import InputText, { InputTextProps } from "./InputText";

const InputPassword = ({ label, ...props }: InputTextProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // 비밀번호 가시성 상태

  // 비밀번호 가시성 토글 함수
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <InputText
      label={label}
      rightIconButton={{
        icon: "pause",
        // name: isPasswordVisible ? "eye_open_gray" : "eye_close_gray", // 아이콘 이름 변경
        // size: "1.5rem",

        onClick: togglePasswordVisibility,
      }}
      type={isPasswordVisible ? "text" : "password"}
      {...props}
    />
  );
};

export default InputPassword;
