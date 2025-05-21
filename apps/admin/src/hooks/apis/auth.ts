import { LoginResponse } from "@apis/domains/login/_interfaces";
import { postLogin } from "@apis/domains/login/apis";
import { postLogout } from "@apis/domains/logout/apis";
import useAuth from "@hooks/useAuth";
import useIsLoading from "@hooks/useIsLoading";
import { useModal } from "@linenow/core/hooks";
import { useMutation } from "@tanstack/react-query";

export const usePostLogout = () => {
  const { closeModal } = useModal();
  const { auth, logout } = useAuth();
  const { setLoadings } = useIsLoading();

  return useMutation<void, Error, void>({
    mutationKey: ["auth_logout"],
    mutationFn: () => postLogout({ refresh_token: auth?.refreshToken || "" }),
    onSuccess: async () => {
      logout();
      setLoadings({ isFullLoading: false });
      closeModal();
    },
    onError: () => {
      setLoadings({ isFullLoading: false });
      alert("로그아웃 중 오류가 발생했어요.\n다시 시도해주세요.");
    },
  });
};

interface UsePostLoginProps {
  adminCode: string;
}
export const usePostLogin = () => {
  const { login } = useAuth();
  const { setLoadings } = useIsLoading();

  return useMutation({
    mutationKey: ["auth_login"],
    mutationFn: (requestBody: UsePostLoginProps) =>
      postLogin({ manager_code: requestBody.adminCode }),
    onMutate: () => {
      setLoadings({ isFullLoading: true }); // 로그인 요청 시작 시 로딩 시작
    },
    onSuccess: async (response: LoginResponse) => {
      login({
        accessToken: response.access,
        refreshToken: response.refresh,
        adminUser: response.user,
      });
      setLoadings({ isFullLoading: false });
    },
    onError: () => {
      setLoadings({ isFullLoading: false });
      alert("잘못된 고유번호 입니다.\n다시 입력해주세요.");
    },
  });
};
