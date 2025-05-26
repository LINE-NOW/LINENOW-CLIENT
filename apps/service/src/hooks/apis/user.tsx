import { AxiosError } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

import { getBlackUser } from "@apis/domains/user/getBlackUser";
import { getUserCount } from "@apis/domains/user/getUserCount";
import { postAuthenticate } from "@apis/domains/user/postAuthenticate";
import { postLogout } from "@apis/domains/user/postLogout";
import { postRegistration } from "@apis/domains/user/postRegistration";
import { postRegistrationMessage } from "@apis/domains/user/postRegistrationMessage";
import { deleteWithdraw } from "@apis/domains/user/postWithdraw";

import useAuth from "@hooks/useAuth";
import useIsLoading from "@hooks/useIsLoading";
import { useToast } from "@linenow/core/hooks";

export const useGetBlackuser = () => {
  return useQuery({
    queryKey: ["black_user"],
    queryFn: () => getBlackUser(),
  });
};

export const useGetUserCount = () => {
  return useQuery({
    queryKey: ["user_count"],
    queryFn: () => getUserCount(),
  });
};

export const usePostAuthenticate = () => {
  const { login } = useAuth();
  const { presentToast } = useToast();

  type Prameter = {
    phonenumber: string;
    smsCode: string;
  };

  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["authenticate"],
    mutationFn: (params: Prameter) => {
      setLoadings({ isFullLoading: true });
      return postAuthenticate({
        user_phone: params.phonenumber,
        sms_code: params.smsCode,
      });
    },
    onSuccess: (response) => {
      presentToast("로그인을 성공했어요!");
      if (response) login({ accessToken: response?.accessToken });
    },
    onError: (error) => {
      setLoadings({ isFullLoading: false });
      const e = error as any;
      const isUser = e.data.data[0].is_signup;

      if (isUser === false) throw new Error("IS_GUEST");
      else alert("올바르지 않은 인증번호입니다.");
    },
    onSettled: () => {
      setLoadings({ isFullLoading: false });
    },
  });
};

// 회원가입
export const usePostRegistration = () => {
  const { login } = useAuth();
  const { presentToast } = useToast();
  type Prameter = {
    name: string;
    phonenumber: string;
  };

  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["registration"],
    mutationFn: (params: Prameter) => {
      setLoadings({ isFullLoading: true });
      return postRegistration({
        user_name: params.name,
        user_phone: params.phonenumber,
      });
    },

    onSuccess: (response) => {
      presentToast("회원가입을 성공했어요!");
      if (response) login({ accessToken: response?.accessToken });
    },
    onError: (error) => {
      const axiosError = error as AxiosError;
      if (axiosError.status === 400) alert("인증번호가 올바르지 않습니다!");
    },
    onSettled: () => {
      setLoadings({ isFullLoading: false });
    },
  });
};

// 문자 인증 번호 전송
export const usePostRegistrationMessage = () => {
  const { presentToast } = useToast();
  const presentCompletedSendingToast = () => {
    presentToast("인증 번호가 전송되었어요!");
  };

  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["registration_message"],
    mutationFn: (phonenumber: string) => {
      setLoadings({ isFullLoading: true });
      return postRegistrationMessage({
        user_phone: phonenumber,
      });
    },
    onSuccess: () => presentCompletedSendingToast(),
    onError: (error) => {
      const axiosError = error as AxiosError;
      if (axiosError.status === 429)
        alert("인증번호는 3분에 한 번 전송할 수 있어요!");
    },
    onSettled: () => {
      setLoadings({ isFullLoading: false });
    },
  });
};

export const usePostLogout = () => {
  const { logout } = useAuth();

  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => {
      setLoadings({ isFullLoading: true });
      return postLogout();
    },

    onSettled: () => {
      logout();
      setLoadings({ isFullLoading: false });
    },
  });
};

export const usePostWithdraw = () => {
  const { logout } = useAuth();
  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => deleteWithdraw(),
    onSuccess: () => {
      logout();
    },
    onError: () => {
      alert("회원 탈퇴에 실패했습니다.");
    },
    onSettled: () => {
      setLoadings({ isFullLoading: false });
    },
  });
};
