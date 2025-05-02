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

    console.log("로그인 성공!");
  };

  const logout = () => {
    if (!auth) return; // 이미 로그아웃된 상태

    localStorage.removeItem("accessToken");
    setAuth(null);

    console.log("로그아웃 성공!");
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
