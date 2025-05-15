import { useAtom } from "jotai";
import { useMemo } from "react";
import { authAtom } from "@atoms/auth";
import { UserToken } from "@interfaces/user";

const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);

  const login = ({ accessToken }: UserToken) => {
    if (auth) return;

    localStorage.setItem("accessToken", accessToken);
    setAuth({ accessToken });
  };

  const logout = () => {
    if (!auth) return; // 이미 로그아웃된 상태

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
