import { getBlackUser } from "@apis/domains/user/getBlackUser";
import { postLogin } from "@apis/domains/user/postLogin";
import { postLogout } from "@apis/domains/user/postLogout";
import { postRegistration } from "@apis/domains/user/postRegistration";
import { postRegistrationMessage } from "@apis/domains/user/postRegistrationMessage";
import { postWithdraw } from "@apis/domains/user/postWithdraw";
import useAuth from "@hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetBlackuser = () => {
  return useQuery({
    queryKey: [],
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

export const usePostLogout = () => {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => postLogout(),
  });
};

export const usePostRegistration = () => {
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
        userName: params.name,
        userPhone: params.phonenumber,
        sms_code: params.smsCode,
        user_password1: params.password,
        user_password2: params.passwordConfirm,
      }),
  });
};

export const usePostRegistrationMessage = () => {
  return useMutation({
    mutationKey: ["registration_message"],
    mutationFn: (phonenumber: string) =>
      postRegistrationMessage({
        user_phone: phonenumber,
      }),
  });
};

export const usePostWithdraw = () => {
  return useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => postWithdraw(),
  });
};
