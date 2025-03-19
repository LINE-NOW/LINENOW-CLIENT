import { useEffect, useState } from "react";

const useSendAuth = () => {
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendAuthMessage = (phoneNumber: string) => {
    console.log(`👩‍🚀 ${phoneNumber}으로 인증 문자를 보냈어요!`);
    setIsLoading(true);
    // 3초 뒤 메세지가 전송된다고 가장합니다
    setTimeout(() => {
      setValue("123456");
      setIsLoading(false);
    }, 3000);
  };
  useEffect(() => {
    console.log(value);
  }, [value]);

  return { sendAuthMessage, isLoading, value };
};

export default useSendAuth;
