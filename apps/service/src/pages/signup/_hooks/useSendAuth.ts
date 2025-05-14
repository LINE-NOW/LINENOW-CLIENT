import { usePostRegistrationMessage } from "@hooks/apis/user";

const useSendAuth = () => {
  const {
    mutate: sendAuthMessage,
    isPending: isLoading,
    isSuccess,
  } = usePostRegistrationMessage();
  const isCompleted = isSuccess && !isLoading;
  return { sendAuthMessage, isLoading, isCompleted };
};

export default useSendAuth;
