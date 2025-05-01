import { useAtom } from "jotai";
import { useMemo } from "react";
import { authAtom } from "@atoms/auth";
import { UserToken } from "@interfaces/user";

const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);

  const login = ({ accessToken }: UserToken) => {
    if (auth) return;
    console.log("로그인을 진행합니다.", accessToken);
    localStorage.setItem("accessToken", accessToken);

    setAuth({ accessToken });
  };

  const logout = () => {
    if (!auth) return; // 이미 로그아웃된 상태

    // localStorage에서 토큰 삭제
    localStorage.removeItem("accessToken");

    setAuth(null);
  };

  const isLogin = useMemo(() => auth != null, [auth]);

  return {
    isLogin,
    auth,
    login,
    logout,
  };
};

export default useAuth;
