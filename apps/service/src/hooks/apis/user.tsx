import { getBlackUser } from "@apis/domains/user/getBlackUser";
import { postLogin } from "@apis/domains/user/postLogin";
import { postLogout } from "@apis/domains/user/postLogout";
import { postRegistration } from "@apis/domains/user/postRegistration";
import { postRegistrationMessage } from "@apis/domains/user/postRegistrationMessage";
import { deleteWithdraw } from "@apis/domains/user/postWithdraw";
import useAuth from "@hooks/useAuth";
import { useToast } from "@linenow/core/hooks";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetBlackuser = () => {
  return useQuery({
    queryKey: ["black_user"],
    queryFn: () => getBlackUser(),
  });
};

export const usePostLogin = () => {
  type Parameter = {
    phonenumber: string;
    password: string;
  };

  const { login } = useAuth();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (params: Parameter) =>
      postLogin({
        user_phone: params.phonenumber,
        user_password: params.password,
      }),
    onSuccess: (data) => {
      if (data != null) login({ accessToken: data.accessToken });
    },
  });
};

export const usePostRegistration = () => {
  const { login } = useAuth();
  const { presentToast } = useToast();
  type Prameter = {
    name: string;
    phonenumber: string;
    smsCode: string;
    password: string;
    passwordConfirm: string;
  };
  return useMutation({
    mutationKey: ["registration"],
    mutationFn: (params: Prameter) =>
      postRegistration({
        user_name: params.name,
        user_phone: params.phonenumber,
        sms_code: params.smsCode,
        user_password1: params.password,
        user_password2: params.passwordConfirm,
      }),
    onSuccess: (response) => {
      presentToast("회원가입을 성공했어요!");
      if (response) login({ accessToken: response?.accessToken });
    },
  });
};

export const usePostRegistrationMessage = () => {
  const { presentToast } = useToast();
  const presentCompletedSendingToast = () => {
    presentToast("인증 번호가 전송되었어요!");
  };

  return useMutation({
    mutationKey: ["registration_message"],
    mutationFn: (phonenumber: string) =>
      postRegistrationMessage({
        user_phone: phonenumber,
      }),
    onSuccess: () => presentCompletedSendingToast(),
  });
};

export const usePostLogout = () => {
  const { logout } = useAuth();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => postLogout(),
    onSuccess: () => {
      logout();
      window.location.href = "/";
    },
  });
};

export const usePostWithdraw = () => {
  const { logout } = useAuth();
  return useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => deleteWithdraw(),
    onSuccess: () => {
      logout();
      window.location.href = "/";
    },
  });
};
