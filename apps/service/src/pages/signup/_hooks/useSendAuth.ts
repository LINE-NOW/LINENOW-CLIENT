import { usePostRegistrationMessage } from "@hooks/apis/user";
import { useEffect, useState } from "react";

const useSendAuth = () => {
  const mutaiton = usePostRegistrationMessage();
  const { mutate: sendAuthMessage, isPending: isLoading, isSuccess } = mutaiton;
  const isCompleted = isSuccess && !isLoading;

  const setReset = () => {
    mutaiton.reset();
  };

  const [expireAt, setExpireAt] = useState<string>("");

  useEffect(() => {
    if (isCompleted) {
      setExpireAt(getExpiredAt());
    }
  }, [isCompleted]);

  const getExpiredAt = () => {
    return new Date(Date.now() + 1 * 60 * 1000).toISOString();
  };

  return { sendAuthMessage, isLoading, isCompleted, setReset, expireAt };
};

export default useSendAuth;
