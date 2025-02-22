import { postDeleteID } from "@apis/domains/auth/deleteID/apis";
import { LoginResponse } from "@apis/domains/auth/login/_interfaces";
import { postLogin } from "@apis/domains/auth/login/apis";
import { postLogout } from "@apis/domains/auth/logout/apis";
import { SignupResponse } from "@apis/domains/auth/signup/_interfaces";
import { postSignup } from "@apis/domains/auth/signup/apis";
import useAuth from "@hooks/useAuth";
import useIsLoading from "@hooks/useIsLoading";
import useModal from "@hooks/useModal";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const usePostLogout = () => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const { auth, logout } = useAuth();
  const { setLoadings } = useIsLoading();

  return useMutation<void, Error, void>({
    mutationKey: ["auth_logout"],
    mutationFn: () => {
      setLoadings({ isFullLoading: true });
      return postLogout({ refresh: auth?.refreshToken || "" });
    },
    onSuccess: async () => {
      logout();
      setLoadings({ isFullLoading: false });
      closeModal();
      navigate("/");
    },
    onError: () => {
      setLoadings({ isFullLoading: false });
      alert("로그아웃 중 오류가 발생했어요.\n다시 시도해주세요.");
    },
  });
};

export const usePostDeleteID = () => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const { auth, logout } = useAuth();
  const { setLoadings } = useIsLoading();

  return useMutation<void, Error, void>({
    mutationKey: ["auth_deleteID"],
    mutationFn: () => {
      setLoadings({ isFullLoading: true });
      return postDeleteID({ refresh_token: auth?.refreshToken || "" });
    },
    onSuccess: async () => {
      logout();
      setLoadings({ isFullLoading: false });
      closeModal();
      navigate("/");
    },
    onError: () => {
      setLoadings({ isFullLoading: false });
      alert("회원탈퇴 중 오류가 발생했어요.\n다시 시도해주세요.");
    },
  });
};

interface UsePostLoginProps {
  username: string;
  password: string;
}

export const usePostLogin = () => {
  const { login } = useAuth();
  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["auth_login"],
    mutationFn: (requestBody: UsePostLoginProps) => {
      setLoadings({ isFullLoading: true });
      return postLogin({
        username: requestBody.username,
        password: requestBody.password,
      });
    },
    onSuccess: async (response: LoginResponse) => {
      login({
        accessToken: response.access,
        refreshToken: response.refresh,
      });
      setLoadings({ isFullLoading: false });
    },
    onError: () => {
      setLoadings({ isFullLoading: false });
      alert("전화번호와 비밀번호를 다시한번 확인해주세요.");
    },
  });
};

interface UsePostSignupProps {
  name: string;
  phone_number: string;
  password1: string;
  password2: string;
  turnstile_token: string;
}

export const usePostSignup = () => {
  const { login } = useAuth();
  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["auth_signup"],
    mutationFn: (requestBody: UsePostSignupProps) => {
      setLoadings({ isFullLoading: true });
      return postSignup({
        name: requestBody.name,
        phone_number: requestBody.phone_number,
        password1: requestBody.password1,
        password2: requestBody.password2,
        turnstile_token: requestBody.turnstile_token,
      })
    },
    onSuccess: async (response: SignupResponse) => {
      login({
        accessToken: response.access,
        refreshToken: response.refresh,
      });
      setLoadings({ isFullLoading: false });
    },
    onError: () => {
      setLoadings({ isFullLoading: false });
      alert("회원가입 중 오류가 발생했어요.\n다시 시도해주세요.");
    },
  });
};
